import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type {
  BuildUserOpOptions,
  UserOpResponse,
  WithdrawalRequest
} from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import { useWalletClient } from "wagmi"

export type UseSendWithdrawalsArgs = {
  options?: BuildUserOpOptions
  withdrawalRequests?: WithdrawalRequest[] | null
}

export const useSendWithdrawals = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const { data: signer } = useWalletClient()
  const defaultAddress = signer?.account.address ?? null

  const useSendWithdrawalsMutation = useMutation(
    {
      mutationFn: (
        variables: UseSendWithdrawalsArgs
      ): Promise<UserOpResponse> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }
        const { withdrawalRequests, options } = variables

        return smartAccountClient.withdraw(
          withdrawalRequests,
          defaultAddress,
          options
        )
      },
      ...mutationArgs
    },
    queryClient
  )

  return useSendWithdrawalsMutation
}
