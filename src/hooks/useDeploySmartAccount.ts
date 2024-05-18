import { BuildUserOpOptions, UserOpResponse } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { MutationOptionsWithoutMutationFn } from "@/types";

type UseDeploySmartAccountArgs = {
  buildUseropDto?: BuildUserOpOptions;
};

export const useDeploySmartAccount = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount();

  const useDeploySmartAccountMutation = useMutation(
    {
      mutationFn: (
        variables: UseDeploySmartAccountArgs
      ): Promise<UserOpResponse> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found");
        }

        if (variables?.buildUseropDto) {
          return smartAccountClient.deploy(variables.buildUseropDto);
        }
        return smartAccountClient.deploy();
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useDeploySmartAccountMutation;
};
