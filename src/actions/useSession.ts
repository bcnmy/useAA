import type { PostUseSessionProps } from "@/hooks/useSession"
import { Options, mergeOptions } from "@/utils"
import {
  type Hex,
  type UserOpResponse,
  createSessionSmartAccountClient,
  getSingleSessionTxParams
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
    Options.getNowNonce(),
    singleSessionParams
  ])

  return usersSmartAccountClient.sendTransaction(transactions, options)
}
