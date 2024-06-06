import { sendSponsoredTransaction } from "@/actions"
import { useSmartAccount } from "@/hooks"
import type {
  MutationOptionsWithoutMutationFn,
  UseSendSponsoredTransactionArgs
} from "@/types"
import { useMutation } from "@tanstack/react-query"

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
