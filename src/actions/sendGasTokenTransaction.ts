import type { PostUseSendGasTokenTransactionProps } from "@/hooks/useSendGasTokenTransaction"
import type { BiconomySmartAccountV2 } from "@biconomy-devx/account"
/** @ignore */
export const sendGasTokenTransaction = async (
  params: PostUseSendGasTokenTransactionProps,
  smartAccountClient: BiconomySmartAccountV2 | null
) => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!")
  }

  const result = await smartAccountClient.sendTransaction(
    params.transactions,
    params.options
  )
  return result
}
