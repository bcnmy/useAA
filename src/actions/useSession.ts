import type { PostUseSessionProps } from "@/hooks/useSession"
import { Options, mergeOptions } from "@/utils"
import {
  type Hex,
  type UserOpResponse,
  createSessionSmartAccountClient
} from "@biconomy/account"

/** @ignore */
export const useSessionAction = async (
  params: PostUseSessionProps
): Promise<UserOpResponse> => {
  const {
    smartAccountAddress,
    chain,
    transactions,
    biconomyPaymasterApiKey,
    bundlerUrl,
    correspondingIndex
  } = params

  const usersSmartAccountClient = await createSessionSmartAccountClient(
    {
      accountAddress: smartAccountAddress as Hex,
      bundlerUrl,
      biconomyPaymasterApiKey,
      chainId: chain.id
    },
    smartAccountAddress as Hex,
    "SIMPLE"
  )

  const options = mergeOptions([
    Options.getNowNonce(),
    params.options,
  ])

  return usersSmartAccountClient.sendTransaction(transactions, options, {
    leafIndex: correspondingIndex || "LAST_LEAF",
    store: "DEFAULT_STORE"
  })
}
