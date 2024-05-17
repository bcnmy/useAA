import { BuildUserOpOptions, Transaction } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { MutationOptionsWithoutMutationFn } from "@/types";

type UseSendTransactionArgs = {
  manyOrOneTransactions: Transaction | Transaction[];
  buildUseropDto?: BuildUserOpOptions;
};

export const useSendTransaction = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount();

  const useSendTransactionMutation = useMutation(
    {
      mutationFn: async (params: UseSendTransactionArgs) => {
        if (!smartAccountClient) {
          throw new Error("No smart account found!");
        }

        const { manyOrOneTransactions, buildUseropDto } = params;

        const result = await smartAccountClient.sendTransaction(
          manyOrOneTransactions,
          buildUseropDto
        );
        return result;
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useSendTransactionMutation;
};
