[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / useTokenFees

# Function: useTokenFees()

> **useTokenFees**(`params`, `queryParams`?): `UseQueryResult`\<[`FeeQuotesOrDataResponse`](../type-aliases/FeeQuotesOrDataResponse.md), `Error`\>

## Parameters

• **params**: [`UseTokenFeesPayload`](../type-aliases/UseTokenFeesPayload.md)

• **queryParams?**

• **queryParams.\_defaulted?**: `boolean`

• **queryParams.\_optimisticResults?**: `"optimistic"` \| `"isRestoring"`

• **queryParams.behavior?**: `QueryBehavior`\<`unknown`, `Error`, `unknown`, `QueryKey`\>

• **queryParams.enabled?**: `boolean`

Set this to `false` to disable automatic refetching when the query mounts or changes query keys.
To refetch the query, use the `refetch` method returned from the `useQuery` instance.
Defaults to `true`.

• **queryParams.gcTime?**: `number`

The time in milliseconds that unused/inactive cache data remains in memory.
When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration.
When different garbage collection times are specified, the longest one will be used.
Setting it to `Infinity` will disable garbage collection.

• **queryParams.initialData?**: `unknown`

• **queryParams.initialDataUpdatedAt?**: `number` \| () => `undefined` \| `number`

• **queryParams.maxPages?**: `number`

Maximum number of pages to store in the data of an infinite query.

• **queryParams.meta?**: `Record`\<`string`, `unknown`\>

Additional payload to be stored on each query.
Use this property to pass information that can be used in other places.

• **queryParams.networkMode?**: `NetworkMode`

• **queryParams.notifyOnChangeProps?**: `NotifyOnChangeProps`

If set, the component will only re-render if any of the listed properties change.
When set to `['data', 'error']`, the component will only re-render when the `data` or `error` properties change.
When set to `'all'`, the component will re-render whenever a query is updated.
When set to a function, the function will be executed to compute the list of properties.
By default, access to properties will be tracked, and the component will only re-render when one of the tracked properties change.

• **queryParams.persister?**

• **queryParams.placeholderData?**: `unknown`

If set, this value will be used as the placeholder data for this particular query observer while the query is still in the `loading` data and no initialData has been provided.

• **queryParams.queryFn?**: *typeof* `skipToken` \| `QueryFunction`\<`unknown`, `QueryKey`, `never`\>

• **queryParams.queryHash?**: `string`

• **queryParams.queryKey?**: `QueryKey`

• **queryParams.queryKeyHashFn?**: `QueryKeyHashFunction`\<`QueryKey`\>

• **queryParams.refetchInterval?**: `number` \| `false` \| (`query`) => `undefined` \| `number` \| `false`

If set to a number, the query will continuously refetch at this frequency in milliseconds.
If set to a function, the function will be executed with the latest data and query to compute a frequency
Defaults to `false`.

• **queryParams.refetchIntervalInBackground?**: `boolean`

If set to `true`, the query will continue to refetch while their tab/window is in the background.
Defaults to `false`.

• **queryParams.refetchOnMount?**: `boolean` \| `"always"` \| (`query`) => `boolean` \| `"always"`

If set to `true`, the query will refetch on mount if the data is stale.
If set to `false`, will disable additional instances of a query to trigger background refetch.
If set to `'always'`, the query will always refetch on mount.
If set to a function, the function will be executed with the latest data and query to compute the value
Defaults to `true`.

• **queryParams.refetchOnReconnect?**: `boolean` \| `"always"` \| (`query`) => `boolean` \| `"always"`

If set to `true`, the query will refetch on reconnect if the data is stale.
If set to `false`, the query will not refetch on reconnect.
If set to `'always'`, the query will always refetch on reconnect.
If set to a function, the function will be executed with the latest data and query to compute the value.
Defaults to the value of `networkOnline` (`true`)

• **queryParams.refetchOnWindowFocus?**: `boolean` \| `"always"` \| (`query`) => `boolean` \| `"always"`

If set to `true`, the query will refetch on window focus if the data is stale.
If set to `false`, the query will not refetch on window focus.
If set to `'always'`, the query will always refetch on window focus.
If set to a function, the function will be executed with the latest data and query to compute the value.
Defaults to `true`.

• **queryParams.retry?**: `RetryValue`\<`Error`\>

If `false`, failed queries will not retry by default.
If `true`, failed queries will retry infinitely., failureCount: num
If set to an integer number, e.g. 3, failed queries will retry until the failed query count meets that number.
If set to a function `(failureCount, error) => boolean` failed queries will retry until the function returns false.

• **queryParams.retryDelay?**: `RetryDelayValue`\<`Error`\>

• **queryParams.retryOnMount?**: `boolean`

If set to `false`, the query will not be retried on mount if it contains an error.
Defaults to `true`.

• **queryParams.select?**

This option can be used to transform or select a part of the data returned by the query function.

• **queryParams.staleTime?**: `number`

The time in milliseconds after data is considered stale.
If set to `Infinity`, the data will never be considered stale.

• **queryParams.structuralSharing?**: `boolean` \| (`oldData`, `newData`) => `unknown`

Set this to `false` to disable structural sharing between query results.
Set this to a function which accepts the old and new data and returns resolved data of the same type to implement custom structural sharing logic.
Defaults to `true`.

• **queryParams.throwOnError?**: `ThrowOnError`\<`unknown`, `Error`, `unknown`, `QueryKey`\>

Whether errors should be thrown instead of setting the `error` property.
If set to `true` or `suspense` is `true`, all errors will be thrown to the error boundary.
If set to `false` and `suspense` is `false`, errors are returned as state.
If set to a function, it will be passed the error and the query, and it should return a boolean indicating whether to show the error in an error boundary (`true`) or return the error as state (`false`).
Defaults to `false`.

## Returns

`UseQueryResult`\<[`FeeQuotesOrDataResponse`](../type-aliases/FeeQuotesOrDataResponse.md), `Error`\>

## Description

This function will retrieve fees from the paymaster in erc20 mode

## Example

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

## Source

[hooks/useTokenFees.ts:71](https://github.com/bcnmy/useAA/blob/main/src/hooks/useTokenFees.ts#L71)
