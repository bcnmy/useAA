import React from "react";
import { useCreateSession, useSmartAccount } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { Hex, parseAbi } from "viem";
import { Sponsored, bigIntReplacer } from "@/utils";
import { HookArgs } from "../utils/types";

export type PreUseCreateSessionArgs = {
  chainId: number;
};

export const nftAddress: Hex = "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e"
export const safeMint = parseAbi([
  "function safeMint(address owner) view returns (uint balance)"
])

const CreateSessionComponent = ({wait}: HookArgs) => {
  const { mutate, isPending, isError, error, isSuccess, data } =
    useCreateSession();
  const [txHash, setTxHash] = React.useState("");
  const { smartAccountAddress } = useSmartAccount();
  const policy = [
    {
      contractAddress: nftAddress,
      functionSelector: safeMint[0],
      rules: [
        {
          offset: 0,
          condition: 0,
          referenceValue: smartAccountAddress,
        },
      ],
      interval: {
        validUntil: 0,
        validAfter: 0,
      },
      valueLimit: 0n,
    },
  ]

  const handleCreateSession = () => {
    mutate({
      options: Sponsored,
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
      <button onClick={handleCreateSession} disabled={isPending}>
        {isPending ? "Creating a Session..." : "Create a Session"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Smart account created a session!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}

      <pre>{JSON.stringify(policy, bigIntReplacer, 2)}</pre>

    </div>
  );
};

export const CreateSession = (params: HookArgs) => {
  return (
    <Providers>
      <CreateSessionComponent {...params} />
    </Providers>
  );
};
