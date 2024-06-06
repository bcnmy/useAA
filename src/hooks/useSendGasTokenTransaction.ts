import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import {
  MutationOptionsWithoutMutationFn,
} from "@/types";
import { sendGasTokenTransaction } from "@/actions/sendGasTokenTransaction";
import { Hex, Transaction } from "@biconomy/account";
import { PartialBuildOptions } from "@/utils";

export type UseSendGasTokenTransactionArgs = {
  transactions: Transaction | Transaction[];
  preferredToken: Hex;
  options?: PartialBuildOptions;
};

export const useSendGasTokenTransaction = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { queryClient, smartAccountClient } = useSmartAccount();

  const useSendGasTokenTransactionMutation = useMutation(
    {
      mutationFn: (params: UseSendGasTokenTransactionArgs) => {
        return sendGasTokenTransaction(
          params,
          smartAccountClient
        );
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useSendGasTokenTransactionMutation;
};
