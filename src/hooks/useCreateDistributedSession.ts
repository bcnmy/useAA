import { createDistributedSession } from "@/actions"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { BuildUserOpOptions } from "@/utils"
import { type PolicyWithoutSessionKey, getChain, BrowserWallet } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import { useAccount, useChainId } from "wagmi"

export type UseCreateDistributedSessionProps = {
  /** The array of policy elements to be applied to the session. */
  policy: PolicyWithoutSessionKey[]
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}

export type PostUseCreateDistributedSessionProps = UseCreateDistributedSessionProps & {
  chain: ReturnType<typeof getChain>;
  browserWallet: BrowserWallet;
}
/**

@description Creates a session to be used when submitting tx in the context of a users smart account.

Mutation function args: {@link UseCreateDistributedSessionProps}

@example

```tsx

import { useCreateDistributedSession, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const CreateDistributedSession = ({userSmartAccountAddress}) => {

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
  } = useCreateDistributedSession();

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


  const createDistributedSessionHandler = () =>
    mutate({
      policy,
      options: Options.Sponsored,
    });

  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Create a session"
        onClickFunc={createDistributedSessionHandler}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};

```
*/
export const useCreateDistributedSession = (
  mutationProps?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const chainId = useChainId()
  const { connector } = useAccount();

  const useCreateDistributedSessionMutation = useMutation(
    {
      mutationFn: async (_params: UseCreateDistributedSessionProps) => {
        if (!smartAccountClient) throw new Error("No smart account found")
        const provider = await connector?.getProvider();
        if (!provider) throw new Error("No provider found");

        const chain = getChain(chainId);
        const browserWallet = new BrowserWallet(provider as ConstructorParameters<typeof BrowserWallet>[0]);

        const params: PostUseCreateDistributedSessionProps = {
          ..._params,
          browserWallet,
          chain
        }

        return createDistributedSession(params, smartAccountClient)
      },
      ...mutationProps
    },
    queryClient
  )

  return useCreateDistributedSessionMutation
}
