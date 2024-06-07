[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useSendTransaction

# Function: useSendTransaction()

> **useSendTransaction**(`mutationProps`?): `UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSendTransactionProps`](../type-aliases/UseSendTransactionProps.md), `any`\>

## Parameters

• **mutationProps?**: [`MutationOptionsWithoutMutationFn`](../type-aliases/MutationOptionsWithoutMutationFn.md)

## Returns

`UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSendTransactionProps`](../type-aliases/UseSendTransactionProps.md), `any`\>

## Description

Sends any transaction(s).

Mutation function args: [UseSendTransactionProps](../type-aliases/UseSendTransactionProps.md)

## Example

```tsx

import { useSendTransaction, useUserOpWait, useSmartAccount } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const SendTx = () => {

  const { smartAccountAddress } = useSmartAccount();

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useSendTransaction();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  useEffect(() => {
    if (waitIsSuccess && waitData?.success === "true") {
      console.log(
        "Successful mint: " +
          `${polygonAmoy.blockExplorers.default.url}/tx/${waitData?.receipt?.transactionHash}`
      );
    }
  }, [waitIsSuccess]);

  const mintNftTx = () => mutate({
    transactions: {
      to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
      data: encodeFunctionData({
        abi: parseAbi(["function safeMint(address _to)"]),
        functionName: "safeMint",
        args: [smartAccountAddress],
      }),
    }
  });

  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Mint NFT"
        onClickFunc={mintNftTx}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};

```

## Source

[hooks/useSendTransaction.ts:79](https://github.com/bcnmy/useAA/blob/main/src/hooks/useSendTransaction.ts#L79)
