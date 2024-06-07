import type { UseSendGasTokenTransactionProps } from "@/hooks/useSendGasTokenTransaction"
import { Options, mergeOptions } from "@/utils"
import type { BiconomySmartAccountV2 } from "@biconomy/account"
/** @ignore */
export const sendGasTokenTransaction = async (
  params: UseSendGasTokenTransactionProps,
  smartAccountClient: BiconomySmartAccountV2 | null
) => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!")
  }

  const options = mergeOptions([params.options, Options.GasTokenPayment, Options.getPreferredToken(params.preferredToken)])

  const result = await smartAccountClient.sendTransaction(
    params.transactions,
    options
  )
  return result
}
