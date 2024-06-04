import {
  BuildUserOpOptions,
  UserOpResponse,
  WithdrawalRequest,
  UserOpReceipt,
} from "@biconomy/account";
import { useWalletClient } from "wagmi";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { MutationOptionsWithoutMutationFn } from "@/types";

type UseSendWithdrawalsArgs = {
  buildUseropDto?: BuildUserOpOptions;
  withdrawalRequests?: WithdrawalRequest[] | null;
  waitTxnCallback?: (userOpReceipt: UserOpReceipt) => any;
};

export const useSendWithdrawals = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount();
  const { data: signer } = useWalletClient();
  const defaultAddress = signer?.account.address ?? null;

  const useSendWithdrawalsMutation = useMutation(
    {
      mutationFn: async <
        T extends UseSendWithdrawalsArgs,
        R = T extends { waitTxnCallback: (userOpReceipt: UserOpReceipt) => any }
          ? UserOpReceipt
          : UserOpResponse,
      >(
        variables: T
      ): Promise<R> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found");
        }

        const { withdrawalRequests, buildUseropDto, waitTxnCallback } =
          variables;

        if (!waitTxnCallback) {
          return (await smartAccountClient.withdraw(
            withdrawalRequests,
            defaultAddress,
            buildUseropDto
          )) as R;
        }

        const userOpResponse = await smartAccountClient.withdraw(
          withdrawalRequests,
          defaultAddress,
          buildUseropDto
        );

        const userOpReceipt = await userOpResponse.wait();

        waitTxnCallback(userOpReceipt);
        return userOpReceipt as R;
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useSendWithdrawalsMutation;
};
