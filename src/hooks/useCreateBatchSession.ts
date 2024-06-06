import { createBatchSession } from "@/actions/createBatchSession"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import { type Policy as PolicyFromSDK, getChain } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import type { Chain } from "viem"
import { useChainId } from "wagmi"
import type { PartialOptions } from ".."

export type Policy = Omit<PolicyFromSDK, "sessionKeyAddress">
export type CoreUseCreateBatchSessionArgs = {
  policy: Policy[]
  options?: PartialOptions
}
export type PostUseCreateSessionBatchArgs = CoreUseCreateBatchSessionArgs & {
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

        const params: PostUseCreateSessionBatchArgs = {
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
