import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/types"
import type { PartialBuildOptions } from "@/utils"
import type { UserOpResponse } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"

type UseDeploySmartAccountArgs = {
  options?: PartialBuildOptions
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
