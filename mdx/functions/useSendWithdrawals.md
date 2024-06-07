[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useSendWithdrawals

# Function: useSendWithdrawals()

> **useSendWithdrawals**(`mutationProps`?): `UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSendWithdrawalsProps`](../type-aliases/UseSendWithdrawalsProps.md), `any`\>

## Parameters

• **mutationProps?**: [`MutationOptionsWithoutMutationFn`](../type-aliases/MutationOptionsWithoutMutationFn.md)

## Returns

`UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseSendWithdrawalsProps`](../type-aliases/UseSendWithdrawalsProps.md), `any`\>

## Description

Withdraws funds from Smart Account to a recipient (defaults to EOA)

Mutation function args: [UseSendWithdrawalsProps](../type-aliases/UseSendWithdrawalsProps.md)

## Example

```tsx

import { useSendWithdrawals, useUserOpWait, useSmartAccount } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { NATIVE_TOKEN_ALIAS } from "@biconomy/account"

export const Withdraw = () => {

  const { smartAccountAddress } = useSmartAccount();

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useSendWithdrawals();

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

  const withdrawalHandler = () => mutate({
    withdrawalRequests: [
      { token: "0x747A4168DB14F57871fa8cda8B5455D8C2a8e90a" }, // omit the amount to withdraw the full balance
      { address: NATIVE_TOKEN_ALIAS, amount: BigInt(1) }
    ],
    options: Options.Sponsored,
  });

  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Withdraw"
        onClickFunc={withdrawalHandler}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};

```

## Source

[hooks/useSendWithdrawals.ts:82](https://github.com/bcnmy/useAA/blob/main/src/hooks/useSendWithdrawals.ts#L82)
