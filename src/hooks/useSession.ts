import { BuildUserOpOptions, getChain, Transaction } from "@biconomy/account";
import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { useSession as useSessionAction } from "@/actions";
import {
  MutationOptionsWithoutMutationFn,
} from "@/types";
import { useChainId } from "wagmi";
import { Chain, Hex } from "viem";
import { deepMerge } from "@/utils";

export type CoreUseSessionArgs = {
  buildUseropDto?: BuildUserOpOptions;
  manyOrOneTx: Transaction | Transaction[];
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

        const defaultOptions = {
          nonceOptions: {
            nonceKey: Date.now()
          }
        }

        const buildUseropDto = deepMerge(defaultOptions, _params.buildUseropDto);

        const chain = getChain(chainId);
        const params: PostUseSessionArgs = {
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey,
          smartAccountAddress,
          chain,
          ..._params,
          buildUseropDto
        };

        return useSessionAction(params);
      },
      ...mutationArgs,
    },
    queryClient
  );

  return useSessionMutation;
};