import type { Policy as PolicyFromSDK, Transaction } from "@biconomy/account"
import type { UseMutationOptions } from "@tanstack/react-query"
import type { PartialBuildOptions } from "./utils"

export type MutationOptionsWithoutMutationFn = Omit<
  UseMutationOptions<any, any, any, any>,
  "mutationFn" | "mutationKey"
>

export type UseSendSponsoredTransactionArgs = {
  transactions: Transaction | Transaction[]
  options?: PartialBuildOptions
}

export type Policy = Omit<PolicyFromSDK, "sessionKeyAddress">
