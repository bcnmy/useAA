import { useSessionAction } from "@/actions"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"
import {
  type BuildUserOpOptions,
  type Transaction,
  getChain
} from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import type { Chain, Hex } from "viem"
import { useChainId } from "wagmi"

export type CoreUseSessionArgs = {
  options?: BuildUserOpOptions
  transactions: Transaction | Transaction[]
}
export type PostUseSessionArgs = CoreUseSessionArgs & {
  chain: Chain
  bundlerUrl: string
  smartAccountAddress: Hex
  biconomyPaymasterApiKey: string
}

export const useSession = (mutationArgs?: MutationOptionsWithoutMutationFn) => {
  const { queryClient, bundlerUrl, paymasterApiKey, smartAccountAddress } =
    useSmartAccount()
  const chainId = useChainId()

  const useSessionMutation = useMutation(
    {
      mutationFn: (_params: CoreUseSessionArgs) => {
        const chain = getChain(chainId)
        const params: PostUseSessionArgs = {
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey,
          smartAccountAddress,
          chain,
          ..._params
        }

        return useSessionAction(params)
      },
      ...mutationArgs
    },
    queryClient
  )

  return useSessionMutation
}
