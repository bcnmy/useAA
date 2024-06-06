import { UserOpResponse } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { MutationOptionsWithoutMutationFn } from "@/types";
import { PartialBuildOptions } from "@/utils";

type UseDeploySmartAccountArgs = {
  options?: PartialBuildOptions;
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

        if (variables?.options) {
          return smartAccountClient.deploy(variables.options);
        }
        return smartAccountClient.deploy();
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useDeploySmartAccountMutation;
};
