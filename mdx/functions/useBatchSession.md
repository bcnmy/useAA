[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useBatchSession

# Function: useBatchSession()

> **useBatchSession**(`mutationArgs`?): `UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseBatchSessionProps`](../type-aliases/UseBatchSessionProps.md), `any`\>

## Parameters

• **mutationArgs?**: [`MutationOptionsWithoutMutationFn`](../type-aliases/MutationOptionsWithoutMutationFn.md)

## Returns

`UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseBatchSessionProps`](../type-aliases/UseBatchSessionProps.md), `any`\>

## Description

Uses a previously created batch session (see: https://bcnmy.github.io/useAA/functions/useCreateBatchSession.html) which batches transactions in the context of a users smart account.

Mutation function args: [UseBatchSessionProps](../type-aliases/UseBatchSessionProps.md)

## Example

```tsx
import { useBatchSession, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const UseBatchSession = ({ smartAccountAddress }) => {

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useBatchSession();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  const nftMintTx: Transaction = {
    to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
    data: encodeFunctionData({
      abi: parseAbi(["function safeMint(address _to)"]),
      functionName: "safeMint",
      args: [smartAccountAddress],
    }),
  };

  const txTwice = () =>
    mutate({
      transactions: [nftMintTx, nftMintTx],
      correspondingIndexes: [0, 1],
      options: Options.Sponsored
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
        title="Use Session to Mint Twice"
        onClickFunc={txTwice}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};
```

## Source

[hooks/useBatchSession.ts:91](https://github.com/bcnmy/useAA/blob/main/src/hooks/useBatchSession.ts#L91)
