import { createBatchSession } from "@/actions/createBatchSession"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn, Policy } from "@/types"
import { getChain } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import type { Chain } from "viem"
import { useChainId } from "wagmi"
import type { PartialBuildOptions } from ".."

export type CoreUseCreateBatchSessionArgs = {
  policy: Policy[]
  options?: PartialBuildOptions
}
export type PostUseCreateSessionArgs = CoreUseCreateBatchSessionArgs & {
  chain: Chain
}

export const useCreateBatchSession = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const chainId = useChainId()

  const useCreateSessionMutation = useMutation(
    {
      mutationFn: (_params: CoreUseCreateBatchSessionArgs) => {
        if (!smartAccountClient) throw new Error("No smart account found")
        const chain = getChain(chainId)

        const params: PostUseCreateSessionArgs = {
          ..._params,
          chain
        }

        return createBatchSession(params, smartAccountClient)
      },
      ...mutationArgs
    },
    queryClient
  )

  return useCreateSessionMutation
}
