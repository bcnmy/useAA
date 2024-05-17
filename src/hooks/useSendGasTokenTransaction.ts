import { PaymasterMode } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { sendSponsoredTransaction } from "@/actions";
import {
  MutationOptionsWithoutMutationFn,
  UseSendSponsoredTransactionArgs,
} from "@/types";

export const useSendGasTokenTransaction = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { queryClient, smartAccountClient } = useSmartAccount();

  const useSendGasTokenTransactionMutation = useMutation(
    {
      mutationFn: (params: UseSendSponsoredTransactionArgs) => {
        return sendSponsoredTransaction(
          params,
          PaymasterMode.ERC20,
          smartAccountClient
        );
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useSendGasTokenTransactionMutation;
};
