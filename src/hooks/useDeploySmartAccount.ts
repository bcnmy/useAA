import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { PartialOptions } from "@/utils"
import type { UserOpResponse } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"

export type UseDeploySmartAccountArgs = {
  options?: PartialOptions
}

export const useDeploySmartAccount = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()

  const useDeploySmartAccountMutation = useMutation(
    {
      mutationFn: (
        variables: UseDeploySmartAccountArgs
      ): Promise<UserOpResponse> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }

        if (variables?.options) {
          return smartAccountClient.deploy(variables.options)
        }
        return smartAccountClient.deploy()
      },
      ...mutationArgs
    },
    queryClient
  )

  return useDeploySmartAccountMutation
}
