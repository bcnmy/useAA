[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useSendSponsoredTransaction

# Function: useSendSponsoredTransaction()

> **useSendSponsoredTransaction**(`mutationProps`?): `UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSendSponsoredTransactionProps`](../type-aliases/UseSendSponsoredTransactionProps.md), `any`\>

## Parameters

• **mutationProps?**

• **mutationProps.gcTime?**: `number`

• **mutationProps.meta?**: `Record`\<`string`, `unknown`\>

• **mutationProps.networkMode?**: `NetworkMode`

• **mutationProps.onError?**

• **mutationProps.onMutate?**

• **mutationProps.onSettled?**

• **mutationProps.onSuccess?**

• **mutationProps.retry?**: `RetryValue`\<`any`\>

• **mutationProps.retryDelay?**: `RetryDelayValue`\<`any`\>

• **mutationProps.scope?**: `MutationScope`

• **mutationProps.throwOnError?**: `boolean` \| (`error`) => `boolean`

## Returns

`UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSendSponsoredTransactionProps`](../type-aliases/UseSendSponsoredTransactionProps.md), `any`\>

## Description

Sends a transaction, using a paymaster for sponsorship.

Mutation function args: [UseSendSponsoredTransactionProps](../type-aliases/UseSendSponsoredTransactionProps.md)

## Example

```tsx

import { useSendSponsoredTransaction, useUserOpWait, useSmartAccount } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const SendSponsoredTx = () => {

  const { smartAccountAddress } = useSmartAccount();

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useSendSponsoredTransaction();

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

[hooks/useSendSponsoredTransaction.ts:77](https://github.com/bcnmy/useAA/blob/main/src/hooks/useSendSponsoredTransaction.ts#L77)
