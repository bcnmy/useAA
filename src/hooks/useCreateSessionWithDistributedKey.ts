import { createSessionWithDistributedKey } from "@/actions"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { BuildUserOpOptions } from "@/utils"
import { type PolicyLeaf, getChain, BrowserWallet } from "@biconomy-devx/account"
import { useMutation } from "@tanstack/react-query"
import { useAccount, useChainId } from "wagmi"

export type UseCreateSessionWithDistributedKeyProps = {
  /** The array of policy elements to be applied to the session. */
  policy: PolicyLeaf[]
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}

export type PostUseCreateSessionWithDistributedKeyProps = UseCreateSessionWithDistributedKeyProps & {
  chain: ReturnType<typeof getChain>;
  browserWallet: BrowserWallet;
}
/**

@description Creates a session to be used when submitting tx in the context of a users smart account.

Mutation function args: {@link UseCreateSessionWithDistributedKeyProps}

@example

```tsx

import { useCreateSessionWithDistributedKey, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const CreateSessionWithDistributedKey = ({userSmartAccountAddress}) => {

  const policy = [
    {
      contractAddress: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
      functionSelector: "safeMint(address)",
      rules: [
        {
          offset: 0,
          condition: 0,
          referenceValue: userSmartAccountAddress,
        },
      ],
      interval: {
        validUntil: 0,
        validAfter: 0,
      },
      valueLimit: 0n,
    },
  ];

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useCreateSessionWithDistributedKey();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  useEffect(() => {
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


  const createSessionWithDistributedKeyHandler = () =>
    mutate({
      policy,
      options: Options.Sponsored,
    });

  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Create a session"
        onClickFunc={createSessionWithDistributedKeyHandler}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};

```
*/
export const useCreateSessionWithDistributedKey = (
  mutationProps?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const chainId = useChainId()
  const { connector } = useAccount();

  const useCreateSessionWithDistributedKeyMutation = useMutation(
    {
      mutationFn: async (_params: UseCreateSessionWithDistributedKeyProps) => {
        if (!smartAccountClient) throw new Error("No smart account found")
        const provider = await connector?.getProvider();
        if (!provider) throw new Error("No provider found");

        const chain = getChain(chainId);
        const browserWallet = new BrowserWallet(provider as ConstructorParameters<typeof BrowserWallet>[0]);

        const params: PostUseCreateSessionWithDistributedKeyProps = {
          ..._params,
          browserWallet,
          chain
        }

        return createSessionWithDistributedKey(params, smartAccountClient)
      },
      ...mutationProps
    },
    queryClient
  )

  return useCreateSessionWithDistributedKeyMutation
}
