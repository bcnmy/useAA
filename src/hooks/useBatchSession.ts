import { getChain, Transaction } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { useBatchSession as useBatchSessionAction } from "@/actions";
import {
  MutationOptionsWithoutMutationFn,
} from "@/types";
import { useChainId } from "wagmi";
import { Chain, Hex } from "viem";
import { getNowNonce, mergeOptions, PartialBuildOptions } from "@/utils";

export type CoreUseBatchSessionArgs = {
  options?: PartialBuildOptions;
  transactions: Transaction | Transaction[];
  correspondingIndexes: number[]
};
export type PostUseBatchSessionArgs = CoreUseBatchSessionArgs & {
  chain: Chain;
  bundlerUrl: string;
  smartAccountAddress: Hex;
  biconomyPaymasterApiKey: string;
};

export const useBatchSession = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { queryClient, bundlerUrl, paymasterApiKey, smartAccountAddress } = useSmartAccount();
  const chainId = useChainId();

  const useBatchSessionMutation = useMutation(
    {
      mutationFn: (_params: CoreUseBatchSessionArgs) => {
        const options = mergeOptions([_params.options, getNowNonce()]);
        const chain = getChain(chainId);
        const params: PostUseBatchSessionArgs = {
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey,
          smartAccountAddress,
          chain,
          ..._params,
          options
        };

        return useBatchSessionAction(params);
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useBatchSessionMutation;
};
