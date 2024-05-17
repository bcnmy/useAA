import { BuildUserOpOptions, Transaction, UserOpResponse } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { MutationOptionsWithoutMutationFn } from "@/types";


type UseSendTransactionArgs = {
  manyOrOneTransactions: Transaction | Transaction[]
  buildUseropDto?: BuildUserOpOptions
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
        const { manyOrOneTransactions, buildUseropDto } = variables

        return smartAccountClient.sendTransaction(
          manyOrOneTransactions,
          buildUseropDto
        )
      },
      ...mutationArgs
    },
    queryClient
  )

  return useSendTransactionMutation
}
