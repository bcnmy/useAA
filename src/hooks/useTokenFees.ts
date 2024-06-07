import { useSmartAccount } from "@/hooks"
import { mergeOptions, type BuildUserOpOptions, Options } from "@/utils"
import type {
  FeeQuotesOrDataResponse,
  Transaction
} from "@biconomy/account"
import {
  type QueryKey,
  type UseQueryOptions,
  useQuery
} from "@tanstack/react-query"
import type { UseQueryParameters } from "wagmi/query"

export type { FeeQuotesOrDataResponse } from "@biconomy/account"

export type UseTokenFeesPayload = {
  /** The transactions to be batched. */
  transactions: Transaction | Transaction[]
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
}
/**

@description This function will retrieve fees from the paymaster in erc20 mode

@example

```tsx
import { useTokenFees, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const TokenFees = () => {

  const { smartAccountAddress } = useSmartAccount();

  const mintTx: Transaction =   {
    to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
    data: encodeFunctionData({
      abi: parseAbi(["function safeMint(address _to)"]),
      functionName: "safeMint",
      args: [smartAccountAddress],
    }),
  }

  const {
    mutate,
    data: feeData,
    error,
    isLoading,
  } = useTokenFees({ transactions: mintTx });

  return (
    <ErrorGuard errors={[error]}>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {feeData?.feeQuotes.map((quote) => (
              <div key={quote.token}>{quote.token}: {quote.amount}</div>
            ))}
          </div>
        )}
      }</div>
    </ErrorGuard>
  );
};
```
*/
export const useTokenFees = (
  params: UseTokenFeesPayload,
  queryParams?: UseQueryParameters
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const { transactions, options: _options } = params;

  const options = mergeOptions([_options, Options.GasTokenPayment])

  return useQuery(
    {
      queryKey: [
        "feeQuotesOrDataResponse",
        transactions,
        options
      ],
      queryFn: async () => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }

        return await smartAccountClient.getTokenFees(
          transactions,
          options
        )
      },
      enabled: !!transactions,
      ...queryParams
    } as UseQueryOptions<
      FeeQuotesOrDataResponse,
      Error,
      FeeQuotesOrDataResponse,
      QueryKey
    >,
    queryClient
  )
}
