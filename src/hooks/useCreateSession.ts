import { BuildUserOpOptions, Policy, getChain } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { createSession } from "@/actions";
import {
  MutationOptionsWithoutMutationFn,
} from "@/types";
import { useChainId } from "wagmi";
import { Chain } from "viem";

export type CoreUseCreateSessionArgs = {
  policy: PolicyElement[];
  buildUseropDto?: BuildUserOpOptions;
};
export type PostUseCreateSessionArgs = CoreUseCreateSessionArgs & {
  chain: Chain;
};
export type PolicyElement = Omit<Policy, "sessionKeyAddress">

export const useCreateSession = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount();
  const chainId = useChainId();

  const useCreateSessionMutation = useMutation(
    {
      mutationFn: (_params: CoreUseCreateSessionArgs) => {
        if (!smartAccountClient) throw new Error("No smart account found");
        const chain = getChain(chainId);

        const params: PostUseCreateSessionArgs = {
          ..._params,
          chain,
        };

        return createSession(
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
