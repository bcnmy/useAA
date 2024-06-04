import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import {
  BuildUserOpOptionsModified,
  MutationOptionsWithoutMutationFn,
} from "@/types";
import { sendGasTokenTransaction } from "@/actions/sendGasTokenTransaction";
import { Hex, Transaction } from "@biconomy/account";

export type UseSendGasTokenTransactionArgs = {
  manyOrOneTransactions: Transaction | Transaction[];
  preferredToken: Hex;
  buildUseropDto?: BuildUserOpOptionsModified;
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
