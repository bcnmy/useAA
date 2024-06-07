[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useDeploySmartAccount

# Function: useDeploySmartAccount()

> **useDeploySmartAccount**(`mutationProps`?): `UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseDeploySmartAccountProps`](../type-aliases/UseDeploySmartAccountProps.md), `any`\>

## Parameters

• **mutationProps?**: [`MutationOptionsWithoutMutationFn`](../type-aliases/MutationOptionsWithoutMutationFn.md)

## Returns

`UseMutationResult`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md), `any`, [`UseDeploySmartAccountProps`](../type-aliases/UseDeploySmartAccountProps.md), `any`\>

## Description

Deploys a users smartAccount contract. It is useful for deploying in a moment when you know that gas prices are low, and you want to deploy the account before sending the first user operation. This step can otherwise be skipped, as the deployment will alternatively be bundled with the first user operation.

Mutation function args: [UseDeploySmartAccountProps](../type-aliases/UseDeploySmartAccountProps.md)

## Example

```tsx

import { useDeploySmartAccount, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const DeploySmartAccount = () => {

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useDeploySmartAccount();

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

  const deployTx = () =>
    mutate({
      options: Options.Sponsored,
    });

  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Deploy Smart Account"
        onClickFunc={deployTx}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};

```

## Source

[hooks/useDeploySmartAccount.ts:69](https://github.com/bcnmy/useAA/blob/main/src/hooks/useDeploySmartAccount.ts#L69)
