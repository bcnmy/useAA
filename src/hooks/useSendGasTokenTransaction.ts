import { sendGasTokenTransaction } from "@/actions/sendGasTokenTransaction"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import type { BuildUserOpOptions } from "@/utils"
import type { Hex, Transaction } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"

export type UseSendGasTokenTransactionProps = {
  /** The transaction or transactions to send */
  transactions: Transaction | Transaction[]
  /** The preferred token to use for gas payment */
  preferredToken: Hex
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}
/**

@description Sends a transaction, taking an erc20 token of choice as payment for the gas.

Mutation function args: {@link UseSendGasTokenTransactionProps}

@example

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
*/
export const useSendGasTokenTransaction = (
  mutationProps?: MutationOptionsWithoutMutationFn
) => {
  const { queryClient, smartAccountClient } = useSmartAccount()

  const useSendGasTokenTransactionMutation = useMutation(
    {
      mutationFn: (params: UseSendGasTokenTransactionProps) => {
        return sendGasTokenTransaction(params, smartAccountClient)
      },
      ...mutationProps
    },
    queryClient
  )

  return useSendGasTokenTransactionMutation
}
