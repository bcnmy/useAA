import type { PartialBuildOptions } from "@/utils"
import type { BiconomySmartAccountV2, Transaction } from "@biconomy/account"

export type UseSendSponsoredTransactionArgs = {
  transactions: Transaction | Transaction[]
  options?: PartialBuildOptions
}

export const sendSponsoredTransaction = async (
  params: UseSendSponsoredTransactionArgs,
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
