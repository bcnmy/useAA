import { createSession } from "@/actions"
import { type Policy, useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { BuildUserOpOptions } from "@/utils"
import { getChain } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import { useChainId } from "wagmi"

export type UseCreateSessionProps = {
  /** The array of policy elements to be applied to the session. */
  policy: Policy[]
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}
export type PostUseCreateSessionProps = UseCreateSessionProps & {
  chain: ReturnType<typeof getChain>
}
/**

@description Creates a session to be used when submitting tx in the context of a users smart account.

Mutation function args: {@link UseCreateSessionProps}

@example

```tsx

import { useCreateSession, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const CreateSession = ({userSmartAccountAddress}) => {

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
  } = useCreateSession();

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


  const createSessionHandler = () =>
    mutate({
      policy,
      options: Options.Sponsored,
    });

  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Create a session"
        onClickFunc={createSessionHandler}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};

```
*/
export const useCreateSession = (
  mutationProps?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const chainId = useChainId()

  const useCreateSessionMutation = useMutation(
    {
      mutationFn: (_params: UseCreateSessionProps) => {
        if (!smartAccountClient) throw new Error("No smart account found")
        const chain = getChain(chainId)

        const params: PostUseCreateSessionProps = {
          ..._params,
          chain
        }

        return createSession(params, smartAccountClient)
      },
      ...mutationProps
    },
    queryClient
  )

  return useCreateSessionMutation
}
