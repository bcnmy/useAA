import { createBatchSession } from "@/actions/createBatchSession"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import { type Policy as PolicyFromSDK, getChain } from "@biconomy-devx/account"
import { type UseMutationResult, useMutation } from "@tanstack/react-query"
import type { BuildUserOpOptions, UserOpResponse } from "@/utils"
import { useChainId } from "wagmi"

export { type Policy as PolicyFromSDK } from "@biconomy-devx/account"
export type Policy = Omit<PolicyFromSDK, "sessionKeyAddress">
export type UseCreateBatchSessionProps = {
  /** The array of policy elements to be applied to the session. */
  policy: Policy[]
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}
export type PostUseCreateSessionBatchProps = UseCreateBatchSessionProps & {
  chain: ReturnType<typeof getChain>
}
/**
 
@description Creates a sessions to be used when submitting batches of txs simultaneously in the context of a users smart account.

Mutation function args: {@link UseCreateBatchSessionProps}

@example

```tsx

import { useCreateBatchSession, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const CreateBatchSession = ({userSmartAccountAddress}) => {

  const leafPolicy: Policy = {
    interval: {
      validUntil: 0,
      validAfter: 0,
    },
    contractAddress: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
    functionSelector: "safeMint(address)",
    rules: [
      {
        offset: 0,
        condition: 0,
        referenceValue: userSmartAccountAddress,
      },
    ],
    valueLimit: 0n,
  }

  const policyLeaves: Policy[] = [leafPolicy, leafPolicy];

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useCreateBatchSession();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  const grantPermission = () =>
    mutate({
      policy: policyLeaves,
      options: Options.Sponsored,
    });

  useEffect(() => {
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Grant Permission"
        onClickFunc={grantPermission}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};

```
*/
export const useCreateBatchSession = (
  mutationProps?: MutationOptionsWithoutMutationFn
): UseMutationResult<UserOpResponse, Error, UseCreateBatchSessionProps> => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const chainId = useChainId()

  const useCreateSessionMutation = useMutation(
    {
      mutationFn: (_params: UseCreateBatchSessionProps) => {
        if (!smartAccountClient) throw new Error("No smart account found")
        const chain = getChain(chainId)

        const params: PostUseCreateSessionBatchProps = {
          ..._params,
          chain
        }

        return createBatchSession(params, smartAccountClient)
      },
      ...mutationProps
    },
    queryClient
  )

  return useCreateSessionMutation
}
