import { useBatchSessionAction } from "@/actions"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import { type PartialBuildOptions, getNowNonce, mergeOptions } from "@/utils"
import { type Transaction, getChain } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import type { Chain, Hex } from "viem"
import { useChainId } from "wagmi"

export type CoreUseBatchSessionArgs = {
  options?: PartialBuildOptions
  transactions: Transaction | Transaction[]
  correspondingIndexes: number[]
}
export type PostUseBatchSessionArgs = CoreUseBatchSessionArgs & {
  chain: Chain
  bundlerUrl: string
  smartAccountAddress: Hex
  biconomyPaymasterApiKey: string
}

export const useBatchSession = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { queryClient, bundlerUrl, paymasterApiKey, smartAccountAddress } =
    useSmartAccount()
  const chainId = useChainId()

  const useBatchSessionMutation = useMutation(
    {
      mutationFn: (_params: CoreUseBatchSessionArgs) => {
        const options = mergeOptions([_params.options, getNowNonce()])
        const chain = getChain(chainId)
        const params: PostUseBatchSessionArgs = {
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey,
          smartAccountAddress,
          chain,
          ..._params,
          options
        }

        return useBatchSessionAction(params)
      },
      ...mutationArgs
    },
    queryClient
  )

  return useBatchSessionMutation
}
