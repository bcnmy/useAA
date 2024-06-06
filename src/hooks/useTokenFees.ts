import { useSmartAccount } from "@/hooks"
import type { PartialOptions } from "@/utils"
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

type UseTokenFeesPayload = {
  transactions: Transaction | Transaction[]
  options: PartialOptions
}

export const useTokenFees = (
  args: UseQueryParameters & UseTokenFeesPayload
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const { transactions, options, ...rest } = args

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
          options ?? {}
        )
      },
      enabled: !!transactions && !!options,
      ...rest
    } as UseQueryOptions<
      FeeQuotesOrDataResponse,
      Error,
      FeeQuotesOrDataResponse,
      QueryKey
    >,
    queryClient
  )
}
