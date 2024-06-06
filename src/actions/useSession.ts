import type { PostUseSessionArgs } from "@/hooks/useSession"
import { getNowNonce, mergeOptions } from "@/utils"
import {
  type Hex,
  type UserOpResponse,
  createSessionSmartAccountClient,
  getSingleSessionTxParams
} from "@biconomy/account"

export const useSession = async (
  params: PostUseSessionArgs
): Promise<UserOpResponse> => {
  const {
    smartAccountAddress,
    chain,
    transactions,
    biconomyPaymasterApiKey,
    bundlerUrl
  } = params
  const usersSmartAccountClient = await createSessionSmartAccountClient(
    {
      accountAddress: smartAccountAddress as Hex,
      bundlerUrl,
      biconomyPaymasterApiKey,
      chainId: chain.id
    },
    smartAccountAddress as Hex
  )

  const singleSessionParams = await getSingleSessionTxParams(
    smartAccountAddress,
    chain,
    null
  )

  const options = mergeOptions([
    params.options,
    getNowNonce(),
    singleSessionParams
  ])

  return usersSmartAccountClient.sendTransaction(transactions, options)
}
