import React from "react";
import { useBatchSession } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { encodeFunctionData, parseAbi } from "viem";
import { Transaction } from "@biconomy/account";
import { Sponsored } from "@/utils";
import { HookArgs } from "../utils/types";

export type PreUseUseBatchSessionArgs = {
  chainId: number;
};

export const contractAddress = "0xC834b3804817883a6b7072e815C3faf8682bFA13"
const order = parseAbi(["function submitOrder(uint256 _orderNum)"])
const cancel = parseAbi(["function submitCancel(uint256 _orderNum)"])


const UseBatchSessionComponent = ({wait}:HookArgs) => {
  const { mutate, isPending, isError, error, isSuccess, data } = useBatchSession();
  const [txHash, setTxHash] = React.useState("");

  const handleUseBatchSession = () => {

    const submitCancelTx: Transaction = {
      to: contractAddress,
      data: encodeFunctionData({
        abi: cancel,
        functionName: "submitCancel",
        args: [BigInt(1)]
      })
    }

    const submitOrderTx: Transaction = {
      to: contractAddress,
      data: encodeFunctionData({
        abi: order,
        functionName: "submitOrder",
        args: [BigInt(1)]
      })
    }

    const txs = [submitOrderTx, submitCancelTx]
    const correspondingIndexes = [1, 0] // The order of the txs from the sessionBatch

    mutate({
      buildUseropDto: Sponsored,
      manyOrOneTx: txs,
      correspondingIndexes
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
    if (wait) {
      waitAction();
    }

  }, [data, wait]);

  return (
    <div>
      <button onClick={handleUseBatchSession} disabled={isPending}>
        {isPending ? "Creating a Batch Session..." : "Use a Batch Session"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Success!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}
    </div>
  );
};

export const UseBatchSession = (params: HookArgs) => {
  return (
    <Providers>
      <UseBatchSessionComponent {...params}/>
    </Providers>
  );
};
