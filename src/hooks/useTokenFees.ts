import { useSmartAccount } from "@/hooks"
import type {
  BuildUserOpOptions,
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
  manyOrOneTransactions: Transaction | Transaction[]
  buildUseropDto: BuildUserOpOptions
}

export const useTokenFees = (
  args: UseQueryParameters & UseTokenFeesPayload
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  const { manyOrOneTransactions, buildUseropDto } = args

  return useQuery(
    {
      queryKey: [
        "feeQuotesOrDataResponse",
        manyOrOneTransactions,
        buildUseropDto
      ],
      queryFn: async () => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }

        return await smartAccountClient.getTokenFees(
          manyOrOneTransactions,
          buildUseropDto
        )
      },
      enabled: !!manyOrOneTransactions && !!buildUseropDto,
      ...args
    } as UseQueryOptions<
      FeeQuotesOrDataResponse,
      Error,
      FeeQuotesOrDataResponse,
      QueryKey
    >,
    queryClient
  )
}
