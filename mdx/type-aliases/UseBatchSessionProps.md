[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / UseBatchSessionProps

# Type alias: UseBatchSessionProps

> **UseBatchSessionProps**: `object`

## Type declaration

### correspondingIndexes

> **correspondingIndexes**: `number`[]

An array of indexes for the transactions corresponding to the relevant session IDs.

### options?

> `optional` **options**: [`BuildUserOpOptions`](BuildUserOpOptions.md)

The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail

### transactions

> **transactions**: [`Transaction`](Transaction.md) \| [`Transaction`](Transaction.md)[]

The transactions to be batched.

## Source

[hooks/useBatchSession.ts:11](https://github.com/bcnmy/useAA/blob/main/src/hooks/useBatchSession.ts#L11)
