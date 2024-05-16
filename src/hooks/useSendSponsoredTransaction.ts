import {
  BuildUserOpOptions,
  PaymasterMode,
  Transaction
} from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import { useSmartAccount } from "./useSmartAccount"
import { MutationOptionsWithoutMutationFn } from "../types/mutation"

type BuildUserOpOptionsWithoutPaymasterServiceData = Omit<
  BuildUserOpOptions,
  "paymasterServiceData"
>

type UseSendSponsoredTransactionArgs = {
  manyOrOneTransactions: Transaction | Transaction[]
  buildUseropDto?: BuildUserOpOptionsWithoutPaymasterServiceData
}

export const useSendSponsoredTransaction = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()

  const useSendSponsoredTransactionMutation = useMutation(
    {
      mutationFn: async (params: UseSendSponsoredTransactionArgs) => {
        if (!smartAccountClient) {
          throw new Error("No smart account found!")
        }

        const { manyOrOneTransactions, buildUseropDto } = params

        const result = await smartAccountClient.sendTransaction(
          manyOrOneTransactions,
          {
            ...buildUseropDto,
            paymasterServiceData: { mode: PaymasterMode.SPONSORED }
          }
        )
        return result
      },
      ...mutationArgs
    },
    queryClient
  )

  return useSendSponsoredTransactionMutation
}
