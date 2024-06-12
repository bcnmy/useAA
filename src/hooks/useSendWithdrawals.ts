import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type {
  BuildUserOpOptions,
  Hex,
  UserOpResponse,
} from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import { useWalletClient } from "wagmi"

export type WithdrawalRequest = {
  /** The address of the asset */
  address: Hex;
  /** The amount to withdraw. Expects unformatted amount. Will use max amount if unset */
  amount?: bigint;
  /** The destination address of the funds. The second argument from the `withdraw(...)` function will be used as the default if left unset. */
  recipient?: Hex;
}

export type UseSendWithdrawalsProps = {
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
  /** Withdrawal requests */
  withdrawalRequests?: WithdrawalRequest[] | null
}
/**
 
@description Withdraws funds from Smart Account to a recipient (defaults to EOA)

Mutation function args: {@link UseSendWithdrawalsProps}

@example

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
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


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
*/
export const useSendWithdrawals = (
  mutationProps?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const { data: signer } = useWalletClient()
  const defaultAddress = signer?.account.address ?? null

  const useSendWithdrawalsMutation = useMutation(
    {
      mutationFn: (
        variables: UseSendWithdrawalsProps
      ): Promise<UserOpResponse> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }
        const { withdrawalRequests, options } = variables

        return smartAccountClient.withdraw(
          withdrawalRequests,
          defaultAddress,
          options
        )
      },
      ...mutationProps
    },
    queryClient
  )

  return useSendWithdrawalsMutation
}
