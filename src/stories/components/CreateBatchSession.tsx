import React from "react";
import { useCreateBatchSession } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { Hex, parseAbi } from "viem";
import { Sponsored, bigIntReplacer } from "@/utils";
import { HookArgs } from "../utils/types";

export type PreUseCreateBatchSessionArgs = {
  chainId: number;
};

export const contractAddress: Hex = "0xC834b3804817883a6b7072e815C3faf8682bFA13"
const order = parseAbi(["function submitOrder(uint256 _orderNum)"])
const cancel = parseAbi(["function submitCancel(uint256 _orderNum)"])

const CreateBatchSessionComponent = ({wait}: HookArgs) => {
  const { mutate, isPending, isError, error, isSuccess, data } =
    useCreateBatchSession();
  const [txHash, setTxHash] = React.useState("");

  const policy = [
    {
      interval: {
        validUntil: 0,
        validAfter: 0
      },
      contractAddress,
      functionSelector: cancel[0],
      rules: [
        {
          offset: 0,
          condition: 0,
          referenceValue: BigInt(1)
        }
      ],
      valueLimit: 0n
    },
    {
      interval: {
        validUntil: 0,
        validAfter: 0
      },
      contractAddress,
      functionSelector: order[0],
      rules: [
        {
          offset: 0,
          condition: 0,
          referenceValue: BigInt(1)
        }
      ],
      valueLimit: 0n
    },
  ]

  const handleCreateBatchSession = () => {
    mutate({
      buildUseropDto: Sponsored,
      policy
    });
  };

  React.useEffect(() => {
    const waitAction = async () => {
      if (data) {
        const {
          receipt: { transactionHash },
        } = await data.wait();
        setTxHash(transactionHash);
      }
    };
    if(wait){
      waitAction();
    }
  }, [data, wait]);

  return (
    <div>
      <button onClick={handleCreateBatchSession} disabled={isPending}>
        {isPending ? "Creating a batch Session..." : "Create a Batch Session"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Smart account created a batch session!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}

      <pre>{JSON.stringify(policy, bigIntReplacer, 2)}</pre>

    </div>
  );
};

export const CreateBatchSession = (params: HookArgs) => {
  return (
    <Providers>
      <CreateBatchSessionComponent {...params}/>
    </Providers>
  );
};
