import {
  BuildUserOpOptions,
  PaymasterUserOperationDto,
  Transaction,
} from "@biconomy/account";
import { UseMutationOptions } from "@tanstack/react-query";

export type MutationOptionsWithoutMutationFn = Omit<
  UseMutationOptions<any, any, any, any>,
  "mutationFn" | "mutationKey"
>;

type PaymasterUserOperationDtoWithoutMode = Omit<
  PaymasterUserOperationDto,
  "mode"
>;

export type BuildUserOpOptionsModified = Omit<
  BuildUserOpOptions,
  "paymasterServiceData"
> & {
  paymasterServiceData?: PaymasterUserOperationDtoWithoutMode;
};

export type UseSendSponsoredTransactionArgs = {
  manyOrOneTransactions: Transaction | Transaction[];
  buildUseropDto?: BuildUserOpOptionsModified;
};
