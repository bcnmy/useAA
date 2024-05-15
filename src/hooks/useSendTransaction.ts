import { BuildUserOpOptions, Transaction } from "@biconomy/account";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "./useSmartAccount";

type UseSendTransactionArgs = {
  manyOrOneTransactions: Transaction | Transaction[];
  buildUseropDto?: BuildUserOpOptions;
};

type MutationOptionsWithoutMutationFn = Omit<
  UseMutationOptions<any, any, any, any>,
  "mutationFn" | "mutationKey"
>;

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
