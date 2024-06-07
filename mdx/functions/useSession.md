[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useSession

# Function: useSession()

> **useSession**(`mutationProps`?): `UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSessionProps`](../type-aliases/UseSessionProps.md), `any`\>

## Parameters

• **mutationProps?**: [`MutationOptionsWithoutMutationFn`](../type-aliases/MutationOptionsWithoutMutationFn.md)

## Returns

`UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSessionProps`](../type-aliases/UseSessionProps.md), `any`\>

## Description

Uses a previously created session (see: https://bcnmy.github.io/useAA/functions/useCreateSession.html) which sends transactions in the context of a users smart account.

Mutation function args: [UseSessionProps](../type-aliases/UseSessionProps.md)

## Example

```tsx
import { useSession, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const UseSession = ({ smartAccountAddress }) => {

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useSession();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  const mintTx = () =>
    mutate({
      transactions: {
        to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
        data: encodeFunctionData({
          abi: parseAbi(["function safeMint(address _to)"]),
          functionName: "safeMint",
          args: [smartAccountAddress],
        }),
      },
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
        title="Use Session to Mint"
        onClickFunc={mintTx}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};
```

## Source

[hooks/useSession.ts:87](https://github.com/bcnmy/useAA/blob/main/src/hooks/useSession.ts#L87)
