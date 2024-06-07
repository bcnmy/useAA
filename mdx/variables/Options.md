[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / Options

# Variable: Options

> `const` **Options**: `object`

## Type declaration

### GasTokenPayment

> `readonly` **GasTokenPayment**: `object`

### GasTokenPayment.paymasterServiceData

> `readonly` **paymasterServiceData**: `object`

### GasTokenPayment.paymasterServiceData.calculateGasLimits

> `readonly` **calculateGasLimits**: `true` = `true`

### GasTokenPayment.paymasterServiceData.mode

> `readonly` **mode**: `ERC20` = `PaymasterMode.ERC20`

### Sponsored

> `readonly` **Sponsored**: `object`

### Sponsored.paymasterServiceData

> `readonly` **paymasterServiceData**: `object`

### Sponsored.paymasterServiceData.calculateGasLimits

> `readonly` **calculateGasLimits**: `true` = `true`

### Sponsored.paymasterServiceData.mode

> `readonly` **mode**: `SPONSORED` = `PaymasterMode.SPONSORED`

### getIncreasedVerification()

> `readonly` **getIncreasedVerification**: (`percentage`) => [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

#### Parameters

• **percentage**: `number`

#### Returns

[`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

### getNowNonce()

> `readonly` **getNowNonce**: () => [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

#### Returns

[`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

### getPreferredToken()

> `readonly` **getPreferredToken**: (`token`) => `object`

#### Parameters

• **token**: `string`

#### Returns

`object`

##### paymasterServiceData

> **paymasterServiceData**: `object`

##### paymasterServiceData.mode

> **mode**: `PaymasterMode` = `PaymasterMode.ERC20`

##### paymasterServiceData.preferredToken

> **preferredToken**: `string` = `token`

## Source

[utils/index.ts:61](https://github.com/bcnmy/useAA/blob/main/src/utils/index.ts#L61)
