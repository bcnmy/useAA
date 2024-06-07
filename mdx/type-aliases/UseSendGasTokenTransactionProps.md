[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / UseSendGasTokenTransactionProps

# Type alias: UseSendGasTokenTransactionProps

> **UseSendGasTokenTransactionProps**: `object`

## Type declaration

### options?

> `optional` **options**: [`BuildUserOpOptions`](BuildUserOpOptions.md)

The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail

### preferredToken

> **preferredToken**: `Hex`

The preferred token to use for gas payment

### transactions

> **transactions**: [`Transaction`](Transaction.md) \| [`Transaction`](Transaction.md)[]

The transaction or transactions to send

## Source

[hooks/useSendGasTokenTransaction.ts:9](https://github.com/bcnmy/useAA/blob/main/src/hooks/useSendGasTokenTransaction.ts#L9)
