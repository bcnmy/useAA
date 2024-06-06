import { sendSponsoredTransaction } from "@/actions"
import type { UseSendSponsoredTransactionArgs } from "@/actions/sendSponsoredTransaction"
import { useSmartAccount } from "@/hooks"
import { type UseMutationOptions, useMutation } from "@tanstack/react-query"

export type MutationOptionsWithoutMutationFn = Omit<
  UseMutationOptions<any, any, any, any>,
  "mutationFn" | "mutationKey"
>

export const useSendSponsoredTransaction = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()

  const useSendSponsoredTransactionMutation = useMutation(
    {
      mutationFn: (params: UseSendSponsoredTransactionArgs) => {
        return sendSponsoredTransaction(params, smartAccountClient)
      },
      ...mutationArgs
    },
    queryClient
  )

  return useSendSponsoredTransactionMutation
}
