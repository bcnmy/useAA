import { Transaction, UserOpResponse } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { MutationOptionsWithoutMutationFn } from "@/types";
import { PartialBuildOptions, mergeOptions } from "@/utils";


type UseSendTransactionArgs = {
  transactions: Transaction | Transaction[]
  options?: PartialBuildOptions
}

export const useSendTransaction = (mutationArgs?: MutationOptionsWithoutMutationFn) => {
  const { smartAccountClient, queryClient } = useSmartAccount()

  const useSendTransactionMutation = useMutation(
    {
      mutationFn: (
        variables: UseSendTransactionArgs
      ): Promise<UserOpResponse> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }
        const { transactions, options } = variables;

        return smartAccountClient.sendTransaction(
          transactions,
          mergeOptions(options)
        )
      },
      ...mutationArgs
    },
    queryClient
  )

  return useSendTransactionMutation
}
