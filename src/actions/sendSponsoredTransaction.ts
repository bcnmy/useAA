import { mergeOptions, Options, type BuildUserOpOptions } from "@/utils"
import type { BiconomySmartAccountV2, Transaction } from "@biconomy-devx/account"

export type UseSendSponsoredTransactionProps = {
  /** The transaction or transactions to send */
  transactions: Transaction | Transaction[]
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}
/** @ignore */
export const sendSponsoredTransaction = async (
  params: UseSendSponsoredTransactionProps,
  smartAccountClient: BiconomySmartAccountV2 | null
) => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!")
  }

  const options = mergeOptions([
    Options.Sponsored,
    params.options,
  ])

  const result = await smartAccountClient.sendTransaction(
    params.transactions,
    options
  )
  return result
}
