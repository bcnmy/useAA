import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { sendSponsoredTransaction } from "@/actions";
import {
  MutationOptionsWithoutMutationFn,
  UseSendSponsoredTransactionArgs,
} from "@/types";

export const useSendSponsoredTransaction = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount();


  const useSendSponsoredTransactionMutation = useMutation(
    {
      mutationFn: (params: UseSendSponsoredTransactionArgs) => {
        return sendSponsoredTransaction(
          params,
          smartAccountClient
        );
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useSendSponsoredTransactionMutation;
};
