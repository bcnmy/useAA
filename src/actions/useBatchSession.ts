import type { PostUseBatchSessionProps } from "@/hooks/useBatchSession"
import { Options, mergeOptions } from "@/utils"
import {
  type Hex,
  type UserOpResponse,
  createSessionSmartAccountClient,
  getBatchSessionTxParams
} from "@biconomy/account"
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

  const batchSessionParams = await getBatchSessionTxParams(
    Array.isArray(transactions) ? transactions : [transactions],
    correspondingIndexes,
    smartAccountAddress,
    chain
  )

  const options = mergeOptions([
    params.options,
    Options.getNowNonce(),
    batchSessionParams
  ])

  return usersSmartAccountClient.sendTransaction(transactions, options)
}
