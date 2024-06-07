[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useCreateBatchSession

# Function: useCreateBatchSession()

> **useCreateBatchSession**(`mutationProps`?): `UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `Error`, [`UseCreateBatchSessionProps`](../type-aliases/UseCreateBatchSessionProps.md)\>

## Parameters

• **mutationProps?**: [`MutationOptionsWithoutMutationFn`](../type-aliases/MutationOptionsWithoutMutationFn.md)

## Returns

`UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `Error`, [`UseCreateBatchSessionProps`](../type-aliases/UseCreateBatchSessionProps.md)\>

## Description

Creates a sessions to be used when submitting batches of txs simultaneously in the context of a users smart account.

Mutation function args: [UseCreateBatchSessionProps](../type-aliases/UseCreateBatchSessionProps.md)

## Example

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
    if (waitIsSuccess && waitData?.success === "true") {
      console.log(
        "Successful mint: " +
          `${polygonAmoy.blockExplorers.default.url}/tx/${waitData?.receipt?.transactionHash}`
      );
    }
  }, [waitIsSuccess]);

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

## Source

[hooks/useCreateBatchSession.ts:98](https://github.com/bcnmy/useAA/blob/main/src/hooks/useCreateBatchSession.ts#L98)
