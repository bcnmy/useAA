import { sendGasTokenTransaction } from "@/actions/sendGasTokenTransaction"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { PartialBuildOptions } from "@/utils"
import type { Hex, Transaction } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"

export type UseSendGasTokenTransactionArgs = {
  transactions: Transaction | Transaction[]
  preferredToken: Hex
  options?: PartialBuildOptions
}

export const useSendGasTokenTransaction = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { queryClient, smartAccountClient } = useSmartAccount()

  const useSendGasTokenTransactionMutation = useMutation(
    {
      mutationFn: (params: UseSendGasTokenTransactionArgs) => {
        return sendGasTokenTransaction(params, smartAccountClient)
      },
      ...mutationArgs
    },
    queryClient
  )

  return useSendGasTokenTransactionMutation
}
