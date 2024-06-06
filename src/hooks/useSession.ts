import { BuildUserOpOptions, getChain, Transaction } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { useSession as useSessionAction } from "@/actions";
import {
  MutationOptionsWithoutMutationFn,
} from "@/types";
import { useChainId } from "wagmi";
import { Chain, Hex } from "viem";

export type CoreUseSessionArgs = {
  options?: BuildUserOpOptions;
  transactions: Transaction | Transaction[];
};
export type PostUseSessionArgs = CoreUseSessionArgs & {
  chain: Chain;
  bundlerUrl: string;
  smartAccountAddress: Hex;
  biconomyPaymasterApiKey: string;
};

export const useSession = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { queryClient, bundlerUrl, paymasterApiKey, smartAccountAddress } = useSmartAccount();
  const chainId = useChainId();

  const useSessionMutation = useMutation(
    {
      mutationFn: (_params: CoreUseSessionArgs) => {

        const chain = getChain(chainId);
        const params: PostUseSessionArgs = {
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey,
          smartAccountAddress,
          chain,
          ..._params,
        };

        return useSessionAction(params);
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useSessionMutation;
};
