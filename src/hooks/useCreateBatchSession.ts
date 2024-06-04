import { BuildUserOpOptions, Policy, getChain } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import {
  MutationOptionsWithoutMutationFn,
} from "@/types";
import { useChainId } from "wagmi";
import { Chain } from "viem";
import { createBatchSession } from "@/actions/createBatchSession";

export type CoreUseCreateBatchSessionArgs = {
  policy: PolicyElement[];
  buildUseropDto?: BuildUserOpOptions;
};
export type PostUseCreateSessionArgs = CoreUseCreateBatchSessionArgs & {
  chain: Chain;
};
export type PolicyElement = Omit<Policy, "sessionKeyAddress">

export const useCreateBatchSession = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount();
  const chainId = useChainId();

  const useCreateSessionMutation = useMutation(
    {
      mutationFn: (_params: CoreUseCreateBatchSessionArgs) => {
        if (!smartAccountClient) throw new Error("No smart account found");
        const chain = getChain(chainId);

        const params: PostUseCreateSessionArgs = {
          ..._params,
          chain,
        };

        return createBatchSession(
          params,
          smartAccountClient
        );
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useCreateSessionMutation;
};
