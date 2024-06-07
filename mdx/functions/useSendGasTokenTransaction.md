[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useSendGasTokenTransaction

# Function: useSendGasTokenTransaction()

> **useSendGasTokenTransaction**(`mutationProps`?): `UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSendGasTokenTransactionProps`](../type-aliases/UseSendGasTokenTransactionProps.md), `any`\>

## Parameters

• **mutationProps?**: [`MutationOptionsWithoutMutationFn`](../type-aliases/MutationOptionsWithoutMutationFn.md)

## Returns

`UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSendGasTokenTransactionProps`](../type-aliases/UseSendGasTokenTransactionProps.md), `any`\>

## Description

Sends a transaction, taking an erc20 token of choice as payment for the gas.

Mutation function args: [UseSendGasTokenTransactionProps](../type-aliases/UseSendGasTokenTransactionProps.md)

## Example

```tsx

import { useSendGasTokenTransaction, useUserOpWait, Options, useSmartAccount, mergeOptions } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const SendGasTokenTx = () => {

  const { smartAccountAddress } = useSmartAccount();

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useSendGasTokenTransaction();

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

[hooks/useSendGasTokenTransaction.ts:82](https://github.com/bcnmy/useAA/blob/main/src/hooks/useSendGasTokenTransaction.ts#L82)
