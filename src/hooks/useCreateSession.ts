import { createSession } from "@/actions"
import { type Policy, useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { PartialOptions } from "@/utils"
import { getChain } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import type { Chain } from "viem"
import { useChainId } from "wagmi"

export type CoreUseCreateSessionArgs = {
  policy: Policy[]
  options?: PartialOptions
}
export type PostUseCreateSessionArgs = CoreUseCreateSessionArgs & {
  chain: Chain
}
export const useCreateSession = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const chainId = useChainId()

  const useCreateSessionMutation = useMutation(
    {
      mutationFn: (_params: CoreUseCreateSessionArgs) => {
        if (!smartAccountClient) throw new Error("No smart account found")
        const chain = getChain(chainId)

        const params: PostUseCreateSessionArgs = {
          ..._params,
          chain
        }

        return createSession(params, smartAccountClient)
      },
      ...mutationArgs
    },
    queryClient
  )

  return useCreateSessionMutation
}
