import {
  Transaction, Policy as PolicyFromSDK
} from "@biconomy/account";
import { UseMutationOptions } from "@tanstack/react-query";
import { PartialBuildOptions } from "./utils";

export type MutationOptionsWithoutMutationFn = Omit<
  UseMutationOptions<any, any, any, any>,
  "mutationFn" | "mutationKey"
>;

export type UseSendSponsoredTransactionArgs = {
  transactions: Transaction | Transaction[];
  options?: PartialBuildOptions;
};

export type Policy = Omit<PolicyFromSDK, "sessionKeyAddress">
