import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { BuildUserOpOptions } from "@/utils"
import type { UserOpResponse } from "@biconomy-devx/account"
import { useMutation } from "@tanstack/react-query"

export type UseDeploySmartAccountProps = {
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}
/**

@description Deploys a users smartAccount contract. It is useful for deploying in a moment when you know that gas prices are low, and you want to deploy the account before sending the first user operation. This step can otherwise be skipped, as the deployment will alternatively be bundled with the first user operation.

Mutation function args: {@link UseDeploySmartAccountProps}

@example

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
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


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
*/
export const useDeploySmartAccount = (
  mutationProps?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()

  const useDeploySmartAccountMutation = useMutation(
    {
      mutationFn: (
        variables: UseDeploySmartAccountProps
      ): Promise<UserOpResponse> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }
        return smartAccountClient.deploy(variables.options ?? {})
      },
      ...mutationProps
    },
    queryClient
  )

  return useDeploySmartAccountMutation
}
