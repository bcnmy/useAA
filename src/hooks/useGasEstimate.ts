import { useSmartAccount } from "@/hooks"
import type { BuildUserOpOptions, Transaction } from "@biconomy-devx/account"
import {
  type QueryKey,
  type UseQueryOptions,
  useQuery
} from "@tanstack/react-query"
import type { UseQueryParameters } from "wagmi/query"

export type UseGasEstimatePayload = {
  /** The transactions to be batched. */
  transactions: Transaction[]
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail*/
  buildUseropDto?: BuildUserOpOptions
}
/**

@description This hook retrieves gas estimates for a given set of transactions using the smart account.

@example

```tsx
import { useGasEstimate } from "@biconomy/useAA";
import { useSmartAccount } from "@/hooks";
import { encodeFunctionData, parseAbi } from "wagmi";

export const GasEstimate = () => {
  const { smartAccountAddress } = useSmartAccount();

  const mintTx: Transaction = {
    to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
    data: encodeFunctionData({
      abi: parseAbi(["function safeMint(address _to)"]),
      functionName: "safeMint",
      args: [smartAccountAddress],
    }),
  };

  const { data: gasEstimate, error, isLoading } = useGasEstimate({ transactions: [mintTx] });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      Gas Estimate: {gasEstimate ? gasEstimate.toString() : "No estimate available"}
    </div>
  );
};
```
*/
export const useGasEstimate = (
  params: UseGasEstimatePayload,
  queryParams?: UseQueryParameters
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const { transactions, buildUseropDto } = params
  return useQuery(
    {
      queryKey: ["gasEstimate", transactions, buildUseropDto],
      queryFn: async () => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }

        return await smartAccountClient.getGasEstimate(
          transactions,
          buildUseropDto
        )
      },
      enabled: !!transactions.length,
      ...queryParams
    } as UseQueryOptions<bigint, Error, bigint, QueryKey>,
    queryClient
  )
}
