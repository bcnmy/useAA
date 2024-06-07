import { sendSponsoredTransaction } from "@/actions"
import type { UseSendSponsoredTransactionProps } from "@/actions/sendSponsoredTransaction"
import { useSmartAccount } from "@/hooks"
import { type UseMutationOptions, useMutation } from "@tanstack/react-query"
import type { Prettify } from "viem/chains"

export type MutationOptionsWithoutMutationFn = Omit<
  UseMutationOptions<any, any, any, any>,
  "mutationFn" | "mutationKey"
>

/**

@description Sends a transaction, using a paymaster for sponsorship.

Mutation function args: {@link UseSendSponsoredTransactionProps}

@example

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
*/
export const useSendSponsoredTransaction = (
  mutationProps?: Prettify<MutationOptionsWithoutMutationFn>
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()

  const useSendSponsoredTransactionMutation = useMutation(
    {
      mutationFn: (params: UseSendSponsoredTransactionProps) => {
        return sendSponsoredTransaction(params, smartAccountClient)
      },
      ...mutationProps
    },
    queryClient
  )

  return useSendSponsoredTransactionMutation
}
