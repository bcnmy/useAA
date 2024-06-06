import { type Policy as PolicyFromSDK, getChain } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { createSession } from "@/actions";
import {
  MutationOptionsWithoutMutationFn,
} from "@/types";
import { useChainId } from "wagmi";
import { Chain } from "viem";
import { PartialBuildOptions } from "..";

export type CoreUseCreateSessionArgs = {
  policy: Policy[];
  options?: PartialBuildOptions;
};
export type PostUseCreateSessionArgs = CoreUseCreateSessionArgs & {
  chain: Chain;
};
export type Policy = Omit<PolicyFromSDK, "sessionKeyAddress">

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
