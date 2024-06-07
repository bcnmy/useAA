[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / WithdrawalRequest

# Interface: WithdrawalRequest

## Properties

### address

> **address**: \`0x$\{string\}\`

The address of the asset

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/utils/Types.d.ts:32

***

### amount?

> `optional` **amount**: `bigint`

The amount to withdraw. Expects unformatted amount. Will use max amount if unset

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/utils/Types.d.ts:34

***

### recipient?

> `optional` **recipient**: \`0x$\{string\}\`

The destination address of the funds. The second argument from the `withdraw(...)` function will be used as the default if left unset.

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/utils/Types.d.ts:36
