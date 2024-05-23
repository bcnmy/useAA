import {
  BuildUserOpOptions,
  UserOpResponse,
  WithdrawalRequest,
} from "@biconomy/account";
import { useWalletClient } from "wagmi";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { MutationOptionsWithoutMutationFn } from "@/types";

type UseSendWithdrawalsArgs = {
  buildUseropDto?: BuildUserOpOptions;
  withdrawalRequests?: WithdrawalRequest[] | null;
};

export const useSendWithdrawals = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount();
  const { data: signer } = useWalletClient();
  const defaultAddress = signer?.account.address ?? null;

  const useSendWithdrawalsMutation = useMutation(
    {
      mutationFn: (
        variables: UseSendWithdrawalsArgs
      ): Promise<UserOpResponse> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found");
        }
        const { withdrawalRequests, buildUseropDto } = variables;

        return smartAccountClient.withdraw(
          withdrawalRequests,
          defaultAddress,
          buildUseropDto
        );
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useSendWithdrawalsMutation;
};
