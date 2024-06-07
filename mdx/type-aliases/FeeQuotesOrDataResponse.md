[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / FeeQuotesOrDataResponse

# Type alias: FeeQuotesOrDataResponse

> **FeeQuotesOrDataResponse**: `object`

## Type declaration

### callGasLimit?

> `optional` **callGasLimit**: `BigNumberish`

### feeQuotes?

> `optional` **feeQuotes**: `PaymasterFeeQuote`[]

Array of results from the paymaster

### paymasterAndData?

> `optional` **paymasterAndData**: `Uint8Array` \| `Hex`

Relevant Data returned from the paymaster

### preVerificationGas?

> `optional` **preVerificationGas**: `BigNumberish`

### tokenPaymasterAddress?

> `optional` **tokenPaymasterAddress**: `Hex`

Normally set to the spender in the proceeding call to send the tx

### verificationGasLimit?

> `optional` **verificationGasLimit**: `BigNumberish`

## Source

../node\_modules/@biconomy/account/dist/\_types/paymaster/utils/Types.d.ts:86
