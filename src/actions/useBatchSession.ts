import type { PostUseBatchSessionProps } from "@/hooks/useBatchSession"
import { Options, mergeOptions } from "@/utils"
import {
  type Hex,
  type UserOpResponse,
  createSessionSmartAccountClient
} from "@biconomy-devx/account"
/** @ignore */
export const useBatchSessionAction = async (
  params: PostUseBatchSessionProps
): Promise<UserOpResponse> => {
  const {
    smartAccountAddress,
    chain,
    transactions,
    biconomyPaymasterApiKey,
    bundlerUrl,
    correspondingIndexes
  } = params

  const usersSmartAccountClient = await createSessionSmartAccountClient(
    {
      accountAddress: smartAccountAddress as Hex,
      bundlerUrl,
      biconomyPaymasterApiKey,
      chainId: chain.id
    },
    smartAccountAddress as Hex,
    true
  )

  const options = mergeOptions([
    Options.getNowNonce(),
    params.options,
  ])

  return usersSmartAccountClient.sendTransaction(transactions, options, {
    leafIndex: correspondingIndexes || "LAST_LEAVES",
    store: "DEFAULT_STORE"
  })
}
