import { BuildUserOpOptions, Transaction } from "@biconomy/account";
import { useAA } from "../providers/UseAAProvider";
import { useState } from "react";
import { s } from "vitest/dist/reporters-1evA5lom.js";

export const useSendTransaction = (
  manyOrOneTransactions: Transaction | Transaction[],
  buildUseropDto?: BuildUserOpOptions | undefined
) => {
  const { smartAccountClient } = useAA();

  const [isPending, setIsPending] = useState(false);
  const [isError, setError] = useState<Error | null>(null);
  const [isIdle, setIdle] = useState(true);
  const [data, setData] = useState<any>(null);

  const mutate = async () => {
    try {
      setError(null);
      setIsPending(true);
      setIdle(false);
      const result = await smartAccountClient?.sendTransaction(
        manyOrOneTransactions,
        buildUseropDto
      );
      setData(result);
      setIsPending(false);
      setIdle(true);
    } catch (error: any) {
      setData(null);
      setIsPending(false);
      setError(error);
      setIdle(true);
    }
  };

  return {
    isPending,
    isError,
    isIdle,
    data,
    mutate,
  };
};
