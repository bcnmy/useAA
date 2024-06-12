import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { BuildUserOpOptions } from "@/utils"
import type { Transaction, UserOpResponse } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"

export type UseSendTransactionProps = {
  /** The transactions to be batched. */
  transactions: Transaction | Transaction[]
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}
/**

@description Sends any transaction(s).

Mutation function args: {@link UseSendTransactionProps}

@example

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
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


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
export const useSendTransaction = (
  mutationProps?: MutationOptionsWithoutMutationFn
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()

  const useSendTransactionMutation = useMutation(
    {
      mutationFn: (
        variables: UseSendTransactionProps
      ): Promise<UserOpResponse> => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }
        const { transactions, options } = variables

        return smartAccountClient.sendTransaction(
          transactions,
          options
        )
      },
      ...mutationProps
    },
    queryClient
  )

  return useSendTransactionMutation
}
