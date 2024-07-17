import { sendGasTokenTransaction } from "@/actions/sendGasTokenTransaction"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import { Options, mergeOptions, type BuildUserOpOptions } from "@/utils"
import type { Hex, PaymasterFeeQuote, Transaction } from "@biconomy-devx/account"
import { useMutation } from "@tanstack/react-query"

export type { PaymasterFeeQuote } from "@biconomy-devx/account"

export type UseSendGasTokenTransactionProps = {
  /** The transaction or transactions to send */
  transactions: Transaction | Transaction[]
  /** The preferred token to use for gas payment */
  tokenParam: Hex | PaymasterFeeQuote
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}

export type PostUseSendGasTokenTransactionProps = Omit<UseSendGasTokenTransactionProps, "tokenParam">;

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
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


  const transactions = useMemo(
    () => ({
      to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
      data: encodeFunctionData({
        abi: parseAbi(["function safeMint(address _to)"]),
        functionName: "safeMint",
        args: [smartAccountAddress as Hex],
      }),
    }),
    [smartAccountAddress]
  );

  const { data: feeQuoteResponse, isLoading: isLoadingFee } = useTokenFees({ transactions });

  const mintNftTx = () => mutate({ transactions, tokenParam: feeQuotes[0] });

  // OR if you know in advance which token you'd like to use

  const alternativeMintTx = () => mutate({ transactions, tokenParam: "0xf555F8d9Cf90f9d95D34488e6C852796D9acBd31" });

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
  const { queryClient, smartAccountClient } = useSmartAccount();

  const useSendGasTokenTransactionMutation = useMutation(
    {
      mutationFn: (params: UseSendGasTokenTransactionProps) => {
        const { transactions, options: _options, tokenParam } = params;
        if (params.tokenParam) {
          const quote = tokenParam as PaymasterFeeQuote;
          const options = mergeOptions([Options.GasTokenPayment, Options.getGasTokenFeeQuote(quote), _options])
          return sendGasTokenTransaction(({ transactions, options }), smartAccountClient)
        }
        const token = tokenParam as Hex;
        const options = mergeOptions([Options.GasTokenPayment, Options.getPreferredToken(token), _options])
        return sendGasTokenTransaction(({ transactions, options }), smartAccountClient)
      },
      ...mutationProps
    },
    queryClient
  )

  return useSendGasTokenTransactionMutation
}
