[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / BiconomySmartAccountV2

# Class: BiconomySmartAccountV2

## Extends

- `BaseSmartContractAccount`

## Constructors

### new BiconomySmartAccountV2()

> `private` **new BiconomySmartAccountV2**(): [`BiconomySmartAccountV2`](BiconomySmartAccountV2.md)

#### Returns

[`BiconomySmartAccountV2`](BiconomySmartAccountV2.md)

#### Overrides

`BaseSmartContractAccount.constructor`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:27

## Properties

### SENTINEL\_MODULE

> `private` **SENTINEL\_MODULE**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:14

***

### accountAddress?

> `protected` `optional` **accountAddress**: \`0x$\{string\}\`

#### Inherited from

`BaseSmartContractAccount.accountAddress`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:13

***

### accountContract?

> `private` `optional` **accountContract**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:20

***

### accountInitCode?

> `protected` `optional` **accountInitCode**: \`0x$\{string\}\`

#### Inherited from

`BaseSmartContractAccount.accountInitCode`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:14

***

### activeValidationModule

> **activeValidationModule**: `BaseValidationModule`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:26

***

### biconomySmartAccountConfig

> `readonly` **biconomySmartAccountConfig**: `BiconomySmartAccountV2ConfigConstructorProps`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:12

***

### bundler?

> `optional` **bundler**: `IBundler`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:19

***

### chainId

> `private` **chainId**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:16

***

### defaultFallbackHandlerAddress

> `private` **defaultFallbackHandlerAddress**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:21

***

### defaultValidationModule

> **defaultValidationModule**: `BaseValidationModule`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:25

***

### deploymentState

> `protected` **deploymentState**: `DeploymentState`

#### Inherited from

`BaseSmartContractAccount.deploymentState`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:12

***

### encodeUpgradeToAndCall()

> **encodeUpgradeToAndCall**: (`_upgradeToImplAddress`, `_upgradeToInitData`) => `Promise`\<\`0x$\{string\}\`\>

If your contract supports UUPS, you can implement this method which can be
used to upgrade the implementation of the account.

#### Parameters

• **\_upgradeToImplAddress**: \`0x$\{string\}\`

• **\_upgradeToInitData**: \`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`BaseSmartContractAccount.encodeUpgradeToAndCall`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:94

***

### entryPoint

> `protected` **entryPoint**: `object`

#### abi

> **abi**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

#### address

> **address**: \`0x$\{string\}\`

#### createEventFilter

> **createEventFilter**: `object`

Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs).

##### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  client: publicClient,
})
const filter = await contract.createEventFilter.Transfer()
```

#### createEventFilter.AccountDeployed()

> **AccountDeployed**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"AccountDeployed"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"AccountDeployed"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.BeforeExecution()

> **BeforeExecution**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"BeforeExecution"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| readonly []

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"BeforeExecution"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.Deposited()

> **Deposited**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"Deposited"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"Deposited"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.SignatureAggregatorChanged()

> **SignatureAggregatorChanged**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"SignatureAggregatorChanged"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"SignatureAggregatorChanged"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.StakeLocked()

> **StakeLocked**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeLocked"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeLocked"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.StakeUnlocked()

> **StakeUnlocked**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeUnlocked"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeUnlocked"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.StakeWithdrawn()

> **StakeWithdrawn**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeWithdrawn"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeWithdrawn"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.UserOperationEvent()

> **UserOperationEvent**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"UserOperationEvent"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"UserOperationEvent"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.UserOperationRevertReason()

> **UserOperationRevertReason**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"UserOperationRevertReason"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"UserOperationRevertReason"`, `TArgs`, `TStrict`\>\>

#### createEventFilter.Withdrawn()

> **Withdrawn**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"Withdrawn"`, `TArgs`, `TStrict`\>\>

##### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"Withdrawn"`, `TArgs`, `TStrict`\>\>

#### estimateGas

> **estimateGas**: `object` & `object`

Estimates the gas necessary to complete a transaction without submitting it to the network.

##### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint() public']),
  client: publicClient,
})
const gas = await contract.estimateGas.mint({
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
})
```

##### Type declaration

###### addStake()

> **addStake**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`number`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addStake"`, readonly [`number`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### depositTo()

> **depositTo**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"depositTo"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### getSenderAddress()

> **getSenderAddress**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"getSenderAddress"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### handleAggregatedOps()

> **handleAggregatedOps**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly `object`[], \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleAggregatedOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### handleOps()

> **handleOps**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly `object`[], \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### incrementNonce()

> **incrementNonce**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"incrementNonce"`, readonly [`bigint`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### innerHandleOp()

> **innerHandleOp**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"innerHandleOp"`, readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### simulateHandleOp()

> **simulateHandleOp**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateHandleOp"`, readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### simulateValidation()

> **simulateValidation**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`object`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateValidation"`, readonly [`object`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### unlockStake()

> **unlockStake**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [`Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"unlockStake"`, readonly [], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### withdrawStake()

> **withdrawStake**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawStake"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### withdrawTo()

> **withdrawTo**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawTo"`, readonly [\`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

##### Type declaration

###### addStake()

> **addStake**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`number`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addStake"`, readonly [`number`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### depositTo()

> **depositTo**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"depositTo"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### getSenderAddress()

> **getSenderAddress**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"getSenderAddress"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### handleAggregatedOps()

> **handleAggregatedOps**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly `object`[], \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleAggregatedOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### handleOps()

> **handleOps**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly `object`[], \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### incrementNonce()

> **incrementNonce**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"incrementNonce"`, readonly [`bigint`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### innerHandleOp()

> **innerHandleOp**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"innerHandleOp"`, readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### simulateHandleOp()

> **simulateHandleOp**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateHandleOp"`, readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### simulateValidation()

> **simulateValidation**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`object`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateValidation"`, readonly [`object`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### unlockStake()

> **unlockStake**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [`Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"unlockStake"`, readonly [], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### withdrawStake()

> **withdrawStake**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawStake"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### withdrawTo()

> **withdrawTo**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawTo"`, readonly [\`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

#### getEvents

> **getEvents**: `object`

Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs).

##### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  client: publicClient,
})
const filter = await contract.createEventFilter.Transfer()
```

#### getEvents.AccountDeployed()

> **AccountDeployed**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"AccountDeployed"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"AccountDeployed"`\>\>

#### getEvents.BeforeExecution()

> **BeforeExecution**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"BeforeExecution"`\>\>

##### Parameters

• ...**parameters**: [`object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"BeforeExecution"`\>\>

#### getEvents.Deposited()

> **Deposited**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"Deposited"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"Deposited"`\>\>

#### getEvents.SignatureAggregatorChanged()

> **SignatureAggregatorChanged**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"SignatureAggregatorChanged"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"SignatureAggregatorChanged"`\>\>

#### getEvents.StakeLocked()

> **StakeLocked**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeLocked"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeLocked"`\>\>

#### getEvents.StakeUnlocked()

> **StakeUnlocked**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeUnlocked"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeUnlocked"`\>\>

#### getEvents.StakeWithdrawn()

> **StakeWithdrawn**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeWithdrawn"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"StakeWithdrawn"`\>\>

#### getEvents.UserOperationEvent()

> **UserOperationEvent**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"UserOperationEvent"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"UserOperationEvent"`\>\>

#### getEvents.UserOperationRevertReason()

> **UserOperationRevertReason**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"UserOperationRevertReason"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"UserOperationRevertReason"`\>\>

#### getEvents.Withdrawn()

> **Withdrawn**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"Withdrawn"`\>\>

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"Withdrawn"`\>\>

#### read

> **read**: `object`

Calls a read-only function on a contract, and returns the response.

A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.

Internally, `read` uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

##### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi([
    'function balanceOf(address owner) view returns (uint256)',
  ]),
  client: publicClient,
})
const result = await contract.read.balanceOf(['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'])
// 424122n
```

#### read.SIG\_VALIDATION\_FAILED()

> **SIG\_VALIDATION\_FAILED**: (...`parameters`) => `Promise`\<`bigint`\>

##### Parameters

• ...**parameters**: [`object`]

##### Returns

`Promise`\<`bigint`\>

#### read.\_validateSenderAndPaymaster()

> **\_validateSenderAndPaymaster**: (...`parameters`) => `Promise`\<`void`\>

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`], `object`]

##### Returns

`Promise`\<`void`\>

#### read.balanceOf()

> **balanceOf**: (...`parameters`) => `Promise`\<`bigint`\>

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `object`]

##### Returns

`Promise`\<`bigint`\>

#### read.deposits()

> **deposits**: (...`parameters`) => `Promise`\<readonly [`bigint`, `boolean`, `bigint`, `number`, `number`]\>

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `object`]

##### Returns

`Promise`\<readonly [`bigint`, `boolean`, `bigint`, `number`, `number`]\>

#### read.getDepositInfo()

> **getDepositInfo**: (...`parameters`) => `Promise`\<`object`\>

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `object`]

##### Returns

`Promise`\<`object`\>

###### deposit

> **deposit**: `bigint`

###### stake

> **stake**: `bigint`

###### staked

> **staked**: `boolean`

###### unstakeDelaySec

> **unstakeDelaySec**: `number`

###### withdrawTime

> **withdrawTime**: `number`

#### read.getNonce()

> **getNonce**: (...`parameters`) => `Promise`\<`bigint`\>

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `object`]

##### Returns

`Promise`\<`bigint`\>

#### read.getUserOpHash()

> **getUserOpHash**: (...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Parameters

• ...**parameters**: [readonly [`object`], `object`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### read.nonceSequenceNumber()

> **nonceSequenceNumber**: (...`parameters`) => `Promise`\<`bigint`\>

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `object`]

##### Returns

`Promise`\<`bigint`\>

#### simulate

> **simulate**: `object`

Simulates/validates a contract interaction. This is useful for retrieving return data and revert reasons of contract write functions.

This function does not require gas to execute and does not change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract), but also supports contract write functions.

Internally, `simulate` uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

##### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint() public']),
  client: publicClient,
})
const result = await contract.simulate.mint({
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
})
```

#### simulate.addStake()

> **addStake**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addStake"`, readonly [`number`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [`number`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addStake"`, readonly [`number`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addStake"`, readonly [`number`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.depositTo()

> **depositTo**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"depositTo"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"depositTo"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"depositTo"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.getSenderAddress()

> **getSenderAddress**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"getSenderAddress"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"getSenderAddress"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"getSenderAddress"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.handleAggregatedOps()

> **handleAggregatedOps**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleAggregatedOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [readonly `object`[], \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleAggregatedOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleAggregatedOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.handleOps()

> **handleOps**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [readonly `object`[], \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"handleOps"`, readonly [readonly `object`[], \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.incrementNonce()

> **incrementNonce**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"incrementNonce"`, readonly [`bigint`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [`bigint`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"incrementNonce"`, readonly [`bigint`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"incrementNonce"`, readonly [`bigint`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.innerHandleOp()

> **innerHandleOp**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"innerHandleOp"`, readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"innerHandleOp"`, readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"innerHandleOp"`, readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.simulateHandleOp()

> **simulateHandleOp**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateHandleOp"`, readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateHandleOp"`, readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateHandleOp"`, readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.simulateValidation()

> **simulateValidation**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateValidation"`, readonly [`object`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [`object`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateValidation"`, readonly [`object`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"simulateValidation"`, readonly [`object`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.unlockStake()

> **unlockStake**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"unlockStake"`, readonly [], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [`Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"unlockStake"`, readonly [], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"unlockStake"`, readonly [], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.withdrawStake()

> **withdrawStake**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawStake"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawStake"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawStake"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### simulate.withdrawTo()

> **withdrawTo**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawTo"`, readonly [\`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawTo"`, readonly [\`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

##### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawTo"`, readonly [\`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

#### watchEvent

> **watchEvent**: `object`

Watches and returns emitted contract event logs.

This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent#onLogs).

`watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.

##### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  client: publicClient,
})
const filter = await contract.createEventFilter.Transfer()
const unwatch = contract.watchEvent.Transfer(
  { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
  { onLogs: (logs) => console.log(logs) },
)
```

#### watchEvent.AccountDeployed()

> **AccountDeployed**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.BeforeExecution()

> **BeforeExecution**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.Deposited()

> **Deposited**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.SignatureAggregatorChanged()

> **SignatureAggregatorChanged**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.StakeLocked()

> **StakeLocked**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.StakeUnlocked()

> **StakeUnlocked**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.StakeWithdrawn()

> **StakeWithdrawn**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.UserOperationEvent()

> **UserOperationEvent**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.UserOperationRevertReason()

> **UserOperationRevertReason**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### watchEvent.Withdrawn()

> **Withdrawn**: (...`parameters`) => `WatchContractEventReturnType`

##### Parameters

• ...**parameters**: [`object`, `object`]

##### Returns

`WatchContractEventReturnType`

#### write

> **write**: `object`

Executes a write function on a contract.

A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, and hence a [Transaction](https://viem.sh/docs/glossary/terms) is needed to be broadcast in order to change the state.

Internally, `write` uses a [Wallet Client](https://viem.sh/docs/clients/wallet) to call the [`sendTransaction` action](https://viem.sh/docs/actions/wallet/sendTransaction) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

__Warning: The `write` internally sends a transaction – it does not validate if the contract write will succeed (the contract may throw an error). It is highly recommended to [simulate the contract write with `contract.simulate`](https://viem.sh/docs/contract/writeContract#usage) before you execute it.__

##### Example

```ts
import { createWalletClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const walletClient = createWalletClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32 tokenId) nonpayable']),
  client: walletClient,
})
const hash = await contract.write.min([69420], {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```

#### write.addStake()

> **addStake**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "addStake", readonly \[number\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [`number`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.depositTo()

> **depositTo**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "depositTo", readonly \[\`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.getSenderAddress()

> **getSenderAddress**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "getSenderAddress", readonly \[\`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.handleAggregatedOps()

> **handleAggregatedOps**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "handleAggregatedOps", readonly \[readonly Object\[\], \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [readonly `object`[], \`0x$\{string\}\`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.handleOps()

> **handleOps**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "handleOps", readonly \[readonly Object\[\], \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [readonly `object`[], \`0x$\{string\}\`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.incrementNonce()

> **incrementNonce**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "incrementNonce", readonly \[bigint\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [`bigint`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.innerHandleOp()

> **innerHandleOp**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "innerHandleOp", readonly \[\`0x$\{string\}\`, Object, \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `object`, \`0x$\{string\}\`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.simulateHandleOp()

> **simulateHandleOp**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "simulateHandleOp", readonly \[Object, \`0x$\{string\}\`, \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [`object`, \`0x$\{string\}\`, \`0x$\{string\}\`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.simulateValidation()

> **simulateValidation**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "simulateValidation", readonly \[Object\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [`object`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.unlockStake()

> **unlockStake**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "unlockStake", readonly \[\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [`Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.withdrawStake()

> **withdrawStake**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "withdrawStake", readonly \[\`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### write.withdrawTo()

> **withdrawTo**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "withdrawTo", readonly \[\`0x$\{string\}\`, bigint\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

##### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `Options`]

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`BaseSmartContractAccount.entryPoint`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:16

***

### entryPointAddress

> `protected` **entryPointAddress**: \`0x$\{string\}\`

#### Inherited from

`BaseSmartContractAccount.entryPointAddress`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:17

***

### extend()

> **extend**: \<`R`\>(`fn`) => [`BiconomySmartAccountV2`](BiconomySmartAccountV2.md) & `R`

#### Type parameters

• **R**

#### Parameters

• **fn**

#### Returns

[`BiconomySmartAccountV2`](BiconomySmartAccountV2.md) & `R`

#### Inherited from

`BaseSmartContractAccount.extend`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:98

***

### factoryAddress

> `protected` **factoryAddress**: \`0x$\{string\}\`

#### Inherited from

`BaseSmartContractAccount.factoryAddress`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:11

***

### getBuildUserOpNonce

> `private` **getBuildUserOpNonce**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:379

***

### getCounterFactualAddressV2

> `private` **getCounterFactualAddressV2**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:205

***

### getPaymasterAndData

> `private` **getPaymasterAndData**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:241

***

### getPaymasterFeeQuotesOrData

> `private` **getPaymasterFeeQuotesOrData**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:242

***

### implementationAddress

> `private` **implementationAddress**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:22

***

### index

> `private` **index**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:15

***

### maxIndexForScan

> `private` **maxIndexForScan**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:24

***

### paymaster?

> `optional` **paymaster**: `IPaymaster`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:18

***

### provider

> `private` **provider**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:17

***

### rpcProvider

> `readonly` **rpcProvider**: `object`

#### account

> **account**: `undefined`

The Account of the Client.

#### batch?

> `optional` **batch**: `object`

Flags for batch settings.

#### batch.multicall?

> `optional` **multicall**: `boolean` \| `object`

Toggle to enable `eth_call` multicall aggregation.

#### cacheTime

> **cacheTime**: `number`

Time (in ms) that cached data will remain in memory.

#### call()

> **call**: (`parameters`) => `Promise`\<`CallReturnType`\>

Executes a new message call immediately without submitting a transaction to the network.

- Docs: https://viem.sh/docs/actions/public/call
- JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const data = await client.call({
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
})
```

##### Parameters

• **parameters**: `CallParameters`\<`undefined` \| `Chain`\>

##### Returns

`Promise`\<`CallReturnType`\>

#### ccipRead?

> `optional` **ccipRead**: `false` \| `object`

[CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration.

#### chain

> **chain**: `undefined` \| `Chain`

Chain for the client.

#### createBlockFilter()

> **createBlockFilter**: () => `Promise`\<`object`\>

Creates a Filter to listen for new block hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).

- Docs: https://viem.sh/docs/actions/public/createBlockFilter
- JSON-RPC Methods: [`eth_newBlockFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newBlockFilter)

##### Example

```ts
import { createPublicClient, createBlockFilter, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await createBlockFilter(client)
// { id: "0x345a6572337856574a76364e457a4366", type: 'block' }
```

##### Returns

`Promise`\<`object`\>

###### id

> **id**: \`0x$\{string\}\`

###### request

> **request**: `EIP1193RequestFn`\<readonly [`object`, `object`, `object`]\>

###### type

> **type**: `"block"`

#### createContractEventFilter()

> **createContractEventFilter**: \<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>(`args`) => `Promise`\<`CreateContractEventFilterReturnType`\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs).

- Docs: https://viem.sh/docs/contract/createContractEventFilter

##### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createContractEventFilter({
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
})
```

##### Type parameters

• **TAbi** *extends* `Abi` \| readonly `unknown`[]

• **TEventName** *extends* `undefined` \| `string`

• **TArgs** *extends* `undefined` \| `Record`\<`string`, `unknown`\> \| readonly `unknown`[]

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

• **TFromBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

• **TToBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

##### Parameters

• **args**: `CreateContractEventFilterParameters`\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>

CreateContractEventFilterParameters

##### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

#### createEventFilter()

> **createEventFilter**: \<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>(`args`?) => `Promise`\<\{ \[K in string \| number \| symbol\]: Filter\<"event", TAbiEvents, \_EventName, \_Args, TStrict, TFromBlock, TToBlock\>\[K\] \}\>

Creates a [`Filter`](https://viem.sh/docs/glossary/types#filter) to listen for new events that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).

- Docs: https://viem.sh/docs/actions/public/createEventFilter
- JSON-RPC Methods: [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xfba3912ca04dd458c843e2ee08967fc04f3579c2',
})
```

##### Type parameters

• **TAbiEvent** *extends* `undefined` \| `AbiEvent` = `undefined`

• **TAbiEvents** *extends* `undefined` \| readonly `unknown`[] \| readonly `AbiEvent`[] = `TAbiEvent` *extends* `AbiEvent` ? [`TAbiEvent`\<`TAbiEvent`\>] : `undefined`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

• **TFromBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

• **TToBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

• **_EventName** *extends* `undefined` \| `string` = `MaybeAbiEventName`\<`TAbiEvent`\>

• **_Args** *extends* `undefined` \| `Record`\<`string`, `unknown`\> \| readonly `unknown`[] = `undefined`

##### Parameters

• **args?**: `CreateEventFilterParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>

CreateEventFilterParameters

##### Returns

`Promise`\<\{ \[K in string \| number \| symbol\]: Filter\<"event", TAbiEvents, \_EventName, \_Args, TStrict, TFromBlock, TToBlock\>\[K\] \}\>

#### createPendingTransactionFilter()

> **createPendingTransactionFilter**: () => `Promise`\<`object`\>

Creates a Filter to listen for new pending transaction hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).

- Docs: https://viem.sh/docs/actions/public/createPendingTransactionFilter
- JSON-RPC Methods: [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createPendingTransactionFilter()
// { id: "0x345a6572337856574a76364e457a4366", type: 'transaction' }
```

##### Returns

`Promise`\<`object`\>

###### id

> **id**: \`0x$\{string\}\`

###### request

> **request**: `EIP1193RequestFn`\<readonly [`object`, `object`, `object`]\>

###### type

> **type**: `"transaction"`

#### estimateContractGas()

> **estimateContractGas**: \<`TChain`, `abi`, `functionName`, `args`\>(`args`) => `Promise`\<`bigint`\>

Estimates the gas required to successfully execute a contract write function call.

- Docs: https://viem.sh/docs/contract/estimateContractGas

##### Remarks

Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`estimateGas` action](https://viem.sh/docs/actions/public/estimateGas) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

##### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gas = await client.estimateContractGas({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint() public']),
  functionName: 'mint',
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
})
```

##### Type parameters

• **TChain** *extends* `undefined` \| `Chain`

• **abi** *extends* `Abi` \| readonly `unknown`[]

• **functionName** *extends* `string`

• **args** *extends* `unknown`

##### Parameters

• **args**: `EstimateContractGasParameters`\<`abi`, `functionName`, `args`, `TChain`\>

EstimateContractGasParameters

##### Returns

`Promise`\<`bigint`\>

#### estimateFeesPerGas()

> **estimateFeesPerGas**: \<`TChainOverride`, `TType`\>(`args`?) => `Promise`\<`EstimateFeesPerGasReturnType`\>

Returns an estimate for the fees per gas for a transaction to be included
in the next block.

- Docs: https://viem.sh/docs/actions/public/estimateFeesPerGas

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const maxPriorityFeePerGas = await client.estimateFeesPerGas()
// { maxFeePerGas: ..., maxPriorityFeePerGas: ... }
```

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TType** *extends* `FeeValuesType` = `"eip1559"`

##### Parameters

• **args?**: `EstimateFeesPerGasParameters`\<`undefined` \| `Chain`, `TChainOverride`, `TType`\>

##### Returns

`Promise`\<`EstimateFeesPerGasReturnType`\>

#### estimateGas()

> **estimateGas**: (`args`) => `Promise`\<`bigint`\>

Estimates the gas necessary to complete a transaction without submitting it to the network.

- Docs: https://viem.sh/docs/actions/public/estimateGas
- JSON-RPC Methods: [`eth_estimateGas`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)

##### Example

```ts
import { createPublicClient, http, parseEther } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gasEstimate = await client.estimateGas({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: parseEther('1'),
})
```

##### Parameters

• **args**: `EstimateGasParameters`\<`undefined` \| `Chain`\>

EstimateGasParameters

##### Returns

`Promise`\<`bigint`\>

#### estimateMaxPriorityFeePerGas()

> **estimateMaxPriorityFeePerGas**: \<`TChainOverride`\>(`args`?) => `Promise`\<`bigint`\>

Returns an estimate for the max priority fee per gas (in wei) for a transaction
to be included in the next block.

- Docs: https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const maxPriorityFeePerGas = await client.estimateMaxPriorityFeePerGas()
// 10000000n
```

##### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

##### Parameters

• **args?**

• **args.chain?**: `null` \| `TChainOverride`

##### Returns

`Promise`\<`bigint`\>

#### extend()

> **extend**: \<`client`\>(`fn`) => `Client`\<`Transport`, `undefined` \| `Chain`, `undefined`, `PublicRpcSchema`, \{ \[K in string \| number \| symbol\]: client\[K\] \} & `PublicActions`\<`Transport`, `undefined` \| `Chain`\>\>

##### Type parameters

• **client** *extends* `object` & `ExactPartial`\<`ExtendableProtectedActions`\<`Transport`, `undefined` \| `Chain`, `undefined`\>\>

##### Parameters

• **fn**

##### Returns

`Client`\<`Transport`, `undefined` \| `Chain`, `undefined`, `PublicRpcSchema`, \{ \[K in string \| number \| symbol\]: client\[K\] \} & `PublicActions`\<`Transport`, `undefined` \| `Chain`\>\>

#### getBalance()

> **getBalance**: (`args`) => `Promise`\<`bigint`\>

Returns the balance of an address in wei.

- Docs: https://viem.sh/docs/actions/public/getBalance
- JSON-RPC Methods: [`eth_getBalance`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)

##### Remarks

You can convert the balance to ether units with [`formatEther`](https://viem.sh/docs/utilities/formatEther).

```ts
const balance = await getBalance(client, {
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  blockTag: 'safe'
})
const balanceAsEther = formatEther(balance)
// "6.942"
```

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const balance = await client.getBalance({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
// 10000000000000000000000n (wei)
```

##### Parameters

• **args**: `GetBalanceParameters`

GetBalanceParameters

##### Returns

`Promise`\<`bigint`\>

#### getBlobBaseFee()

> **getBlobBaseFee**: () => `Promise`\<`bigint`\>

Returns the base fee per blob gas in wei.

- Docs: https://viem.sh/docs/actions/public/getBlobBaseFee
- JSON-RPC Methods: [`eth_blobBaseFee`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blobBaseFee)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { getBlobBaseFee } from 'viem/public'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const blobBaseFee = await client.getBlobBaseFee()
```

##### Returns

`Promise`\<`bigint`\>

#### getBlock()

> **getBlock**: \<`TIncludeTransactions`, `TBlockTag`\>(`args`?) => `Promise`\<`object`\>

Returns information about a block at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlock
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/fetching-blocks
- JSON-RPC Methods:
  - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) for `blockNumber` & `blockTag`.
  - Calls [`eth_getBlockByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) for `blockHash`.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const block = await client.getBlock()
```

##### Type parameters

• **TIncludeTransactions** *extends* `boolean` = `false`

• **TBlockTag** *extends* `BlockTag` = `"latest"`

##### Parameters

• **args?**: `GetBlockParameters`\<`TIncludeTransactions`, `TBlockTag`\>

GetBlockParameters

##### Returns

`Promise`\<`object`\>

###### baseFeePerGas

> **baseFeePerGas**: `null` \| `bigint`

Base fee per gas

###### blobGasUsed

> **blobGasUsed**: `bigint`

Total used blob gas by all transactions in this block

###### difficulty

> **difficulty**: `bigint`

Difficulty for this block

###### excessBlobGas

> **excessBlobGas**: `bigint`

Excess blob gas

###### extraData

> **extraData**: \`0x$\{string\}\`

"Extra data" field of this block

###### gasLimit

> **gasLimit**: `bigint`

Maximum gas allowed in this block

###### gasUsed

> **gasUsed**: `bigint`

Total used gas by all transactions in this block

###### hash

> **hash**: `TBlockTag` *extends* `"pending"` ? `null` : \`0x$\{string\}\`

Block hash or `null` if pending

###### logsBloom

> **logsBloom**: `TBlockTag` *extends* `"pending"` ? `null` : \`0x$\{string\}\`

Logs bloom filter or `null` if pending

###### miner

> **miner**: \`0x$\{string\}\`

Address that received this block’s mining rewards

###### mixHash

> **mixHash**: \`0x$\{string\}\`

Unique identifier for the block.

###### nonce

> **nonce**: `TBlockTag` *extends* `"pending"` ? `null` : \`0x$\{string\}\`

Proof-of-work hash or `null` if pending

###### number

> **number**: `TBlockTag` *extends* `"pending"` ? `null` : `bigint`

Block number or `null` if pending

###### parentHash

> **parentHash**: \`0x$\{string\}\`

Parent block hash

###### receiptsRoot

> **receiptsRoot**: \`0x$\{string\}\`

Root of the this block’s receipts trie

###### sealFields

> **sealFields**: \`0x$\{string\}\`[]

###### sha3Uncles

> **sha3Uncles**: \`0x$\{string\}\`

SHA3 of the uncles data in this block

###### size

> **size**: `bigint`

Size of this block in bytes

###### stateRoot

> **stateRoot**: \`0x$\{string\}\`

Root of this block’s final state trie

###### timestamp

> **timestamp**: `bigint`

Unix timestamp of when this block was collated

###### totalDifficulty

> **totalDifficulty**: `null` \| `bigint`

Total difficulty of the chain until this block

###### transactions

> **transactions**: `TIncludeTransactions` *extends* `true` ? (`object` \| `object` \| `object` \| `object`)[] : \`0x$\{string\}\`[]

###### transactionsRoot

> **transactionsRoot**: \`0x$\{string\}\`

Root of this block’s transaction trie

###### uncles

> **uncles**: \`0x$\{string\}\`[]

List of uncle hashes

###### withdrawals?

> `optional` **withdrawals**: `Withdrawal`[]

List of withdrawal objects

###### withdrawalsRoot?

> `optional` **withdrawalsRoot**: \`0x$\{string\}\`

Root of the this block’s withdrawals trie

#### getBlockNumber()

> **getBlockNumber**: (`args`?) => `Promise`\<`bigint`\>

Returns the number of the most recent block seen.

- Docs: https://viem.sh/docs/actions/public/getBlockNumber
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/fetching-blocks
- JSON-RPC Methods: [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const blockNumber = await client.getBlockNumber()
// 69420n
```

##### Parameters

• **args?**: `GetBlockNumberParameters`

GetBlockNumberParameters

##### Returns

`Promise`\<`bigint`\>

#### getBlockTransactionCount()

> **getBlockTransactionCount**: (`args`?) => `Promise`\<`number`\>

Returns the number of Transactions at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlockTransactionCount
- JSON-RPC Methods:
  - Calls [`eth_getBlockTransactionCountByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber) for `blockNumber` & `blockTag`.
  - Calls [`eth_getBlockTransactionCountByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash) for `blockHash`.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const count = await client.getBlockTransactionCount()
```

##### Parameters

• **args?**: `GetBlockTransactionCountParameters`

GetBlockTransactionCountParameters

##### Returns

`Promise`\<`number`\>

#### getBytecode()

> **getBytecode**: (`args`) => `Promise`\<`GetBytecodeReturnType`\>

Retrieves the bytecode at an address.

- Docs: https://viem.sh/docs/contract/getBytecode
- JSON-RPC Methods: [`eth_getCode`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const code = await client.getBytecode({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```

##### Parameters

• **args**: `GetBytecodeParameters`

GetBytecodeParameters

##### Returns

`Promise`\<`GetBytecodeReturnType`\>

#### getChainId()

> **getChainId**: () => `Promise`\<`number`\>

Returns the chain ID associated with the current network.

- Docs: https://viem.sh/docs/actions/public/getChainId
- JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const chainId = await client.getChainId()
// 1
```

##### Returns

`Promise`\<`number`\>

#### getContractEvents()

> **getContractEvents**: \<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>(`args`) => `Promise`\<`GetContractEventsReturnType`\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

Returns a list of event logs emitted by a contract.

- Docs: https://viem.sh/docs/actions/public/getContractEvents
- JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiAbi } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const logs = await client.getContractEvents(client, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 abi: wagmiAbi,
 eventName: 'Transfer'
})
```

##### Type parameters

• **abi** *extends* `Abi` \| readonly `unknown`[]

• **eventName** *extends* `undefined` \| `string` = `undefined`

• **strict** *extends* `undefined` \| `boolean` = `undefined`

• **fromBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

• **toBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

##### Parameters

• **args**: `GetContractEventsParameters`\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>

##### Returns

`Promise`\<`GetContractEventsReturnType`\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

#### getEnsAddress()

> **getEnsAddress**: (`args`) => `Promise`\<`GetEnsAddressReturnType`\>

Gets address for ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsAddress
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

##### Remarks

Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensAddress = await client.getEnsAddress({
  name: normalize('wevm.eth'),
})
// '0xd2135CfB216b74109775236E36d4b433F1DF507B'
```

##### Parameters

• **args**

GetEnsAddressParameters

• **args.blockNumber?**: `bigint`

The balance of the account at a block number.

• **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

• **args.coinType?**: `number`

ENSIP-9 compliant coinType used to resolve addresses for other chains

• **args.gatewayUrls?**: `string`[]

Universal Resolver gateway URLs to use for resolving CCIP-read requests.

• **args.name**: `string`

Name to get the address for.

• **args.strict?**: `boolean`

Whether or not to throw errors propagated from the ENS Universal Resolver Contract.

• **args.universalResolverAddress?**: \`0x$\{string\}\`

Address of ENS Universal Resolver Contract.

##### Returns

`Promise`\<`GetEnsAddressReturnType`\>

#### getEnsAvatar()

> **getEnsAvatar**: (`args`) => `Promise`\<`GetEnsAvatarReturnType`\>

Gets the avatar of an ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsAvatar
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

##### Remarks

Calls [`getEnsText`](https://viem.sh/docs/ens/actions/getEnsText) with `key` set to `'avatar'`.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensAvatar = await client.getEnsAvatar({
  name: normalize('wevm.eth'),
})
// 'https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio'
```

##### Parameters

• **args**

GetEnsAvatarParameters

• **args.assetGatewayUrls?**: `AssetGatewayUrls`

Gateway urls to resolve IPFS and/or Arweave assets.

• **args.blockNumber?**: `bigint`

The balance of the account at a block number.

• **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

• **args.gatewayUrls?**: `string`[]

Universal Resolver gateway URLs to use for resolving CCIP-read requests.

• **args.name**: `string`

ENS name to get Text for.

• **args.strict?**: `boolean`

Whether or not to throw errors propagated from the ENS Universal Resolver Contract.

• **args.universalResolverAddress?**: \`0x$\{string\}\`

Address of ENS Universal Resolver Contract.

##### Returns

`Promise`\<`GetEnsAvatarReturnType`\>

#### getEnsName()

> **getEnsName**: (`args`) => `Promise`\<`GetEnsNameReturnType`\>

Gets primary name for specified address.

- Docs: https://viem.sh/docs/ens/actions/getEnsName
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

##### Remarks

Calls `reverse(bytes)` on ENS Universal Resolver Contract to "reverse resolve" the address to the primary ENS name.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensName = await client.getEnsName({
  address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
})
// 'wevm.eth'
```

##### Parameters

• **args**

GetEnsNameParameters

• **args.address**: \`0x$\{string\}\`

Address to get ENS name for.

• **args.blockNumber?**: `bigint`

The balance of the account at a block number.

• **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

• **args.gatewayUrls?**: `string`[]

Universal Resolver gateway URLs to use for resolving CCIP-read requests.

• **args.strict?**: `boolean`

Whether or not to throw errors propagated from the ENS Universal Resolver Contract.

• **args.universalResolverAddress?**: \`0x$\{string\}\`

Address of ENS Universal Resolver Contract.

##### Returns

`Promise`\<`GetEnsNameReturnType`\>

#### getEnsResolver()

> **getEnsResolver**: (`args`) => `Promise`\<\`0x$\{string\}\`\>

Gets resolver for ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsResolver
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

##### Remarks

Calls `findResolver(bytes)` on ENS Universal Resolver Contract to retrieve the resolver of an ENS name.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const resolverAddress = await client.getEnsResolver({
  name: normalize('wevm.eth'),
})
// '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
```

##### Parameters

• **args**

GetEnsResolverParameters

• **args.blockNumber?**: `bigint`

The balance of the account at a block number.

• **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

• **args.name**: `string`

Name to get the address for.

• **args.universalResolverAddress?**: \`0x$\{string\}\`

Address of ENS Universal Resolver Contract.

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### getEnsText()

> **getEnsText**: (`args`) => `Promise`\<`GetEnsTextReturnType`\>

Gets a text record for specified ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsResolver
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

##### Remarks

Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const twitterRecord = await client.getEnsText({
  name: normalize('wevm.eth'),
  key: 'com.twitter',
})
// 'wagmi_sh'
```

##### Parameters

• **args**

GetEnsTextParameters

• **args.blockNumber?**: `bigint`

The balance of the account at a block number.

• **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

• **args.gatewayUrls?**: `string`[]

Universal Resolver gateway URLs to use for resolving CCIP-read requests.

• **args.key**: `string`

Text record to retrieve.

• **args.name**: `string`

ENS name to get Text for.

• **args.strict?**: `boolean`

Whether or not to throw errors propagated from the ENS Universal Resolver Contract.

• **args.universalResolverAddress?**: \`0x$\{string\}\`

Address of ENS Universal Resolver Contract.

##### Returns

`Promise`\<`GetEnsTextReturnType`\>

#### getFeeHistory()

> **getFeeHistory**: (`args`) => `Promise`\<`GetFeeHistoryReturnType`\>

Returns a collection of historical gas information.

- Docs: https://viem.sh/docs/actions/public/getFeeHistory
- JSON-RPC Methods: [`eth_feeHistory`](https://docs.alchemy.com/reference/eth-feehistory)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const feeHistory = await client.getFeeHistory({
  blockCount: 4,
  rewardPercentiles: [25, 75],
})
```

##### Parameters

• **args**: `GetFeeHistoryParameters`

GetFeeHistoryParameters

##### Returns

`Promise`\<`GetFeeHistoryReturnType`\>

#### getFilterChanges()

> **getFilterChanges**: \<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>(`args`) => `Promise`\<`GetFilterChangesReturnType`\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

Returns a list of logs or hashes based on a [Filter](/docs/glossary/terms#filter) since the last time it was called.

- Docs: https://viem.sh/docs/actions/public/getFilterChanges
- JSON-RPC Methods: [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)

##### Remarks

A Filter can be created from the following actions:

- [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
- [`createContractEventFilter`](https://viem.sh/docs/contract/createContractEventFilter)
- [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
- [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)

Depending on the type of filter, the return value will be different:

- If the filter was created with `createContractEventFilter` or `createEventFilter`, it returns a list of logs.
- If the filter was created with `createPendingTransactionFilter`, it returns a list of transaction hashes.
- If the filter was created with `createBlockFilter`, it returns a list of block hashes.

##### Examples

```ts
// Blocks
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createBlockFilter()
const hashes = await client.getFilterChanges({ filter })
```

```ts
// Contract Events
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createContractEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  eventName: 'Transfer',
})
const logs = await client.getFilterChanges({ filter })
```

```ts
// Raw Events
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})
const logs = await client.getFilterChanges({ filter })
```

```ts
// Transactions
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createPendingTransactionFilter()
const hashes = await client.getFilterChanges({ filter })
```

##### Type parameters

• **TFilterType** *extends* `FilterType`

• **TAbi** *extends* `undefined` \| `Abi` \| readonly `unknown`[]

• **TEventName** *extends* `undefined` \| `string`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

• **TFromBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

• **TToBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

##### Parameters

• **args**: `GetFilterChangesParameters`\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>

GetFilterChangesParameters

##### Returns

`Promise`\<`GetFilterChangesReturnType`\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

#### getFilterLogs()

> **getFilterLogs**: \<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>(`args`) => `Promise`\<`GetFilterLogsReturnType`\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

Returns a list of event logs since the filter was created.

- Docs: https://viem.sh/docs/actions/public/getFilterLogs
- JSON-RPC Methods: [`eth_getFilterLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)

##### Remarks

`getFilterLogs` is only compatible with **event filters**.

##### Example

```ts
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})
const logs = await client.getFilterLogs({ filter })
```

##### Type parameters

• **TAbi** *extends* `undefined` \| `Abi` \| readonly `unknown`[]

• **TEventName** *extends* `undefined` \| `string`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

• **TFromBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

• **TToBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

##### Parameters

• **args**: `GetFilterLogsParameters`\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>

GetFilterLogsParameters

##### Returns

`Promise`\<`GetFilterLogsReturnType`\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

#### getGasPrice()

> **getGasPrice**: () => `Promise`\<`bigint`\>

Returns the current price of gas (in wei).

- Docs: https://viem.sh/docs/actions/public/getGasPrice
- JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gasPrice = await client.getGasPrice()
```

##### Returns

`Promise`\<`bigint`\>

#### getLogs()

> **getLogs**: \<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>(`args`?) => `Promise`\<`GetLogsReturnType`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

Returns a list of event logs matching the provided parameters.

- Docs: https://viem.sh/docs/actions/public/getLogs
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/filters-and-logs/event-logs
- JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)

##### Example

```ts
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const logs = await client.getLogs()
```

##### Type parameters

• **TAbiEvent** *extends* `undefined` \| `AbiEvent` = `undefined`

• **TAbiEvents** *extends* `undefined` \| readonly `unknown`[] \| readonly `AbiEvent`[] = `TAbiEvent` *extends* `AbiEvent` ? [`TAbiEvent`\<`TAbiEvent`\>] : `undefined`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

• **TFromBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

• **TToBlock** *extends* `undefined` \| `bigint` \| `BlockTag` = `undefined`

##### Parameters

• **args?**: `GetLogsParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>

GetLogsParameters

##### Returns

`Promise`\<`GetLogsReturnType`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

#### getProof()

> **getProof**: (`args`) => `Promise`\<`GetProofReturnType`\>

Returns the account and storage values of the specified account including the Merkle-proof.

- Docs: https://viem.sh/docs/actions/public/getProof
- JSON-RPC Methods:
  - Calls [`eth_getProof`](https://eips.ethereum.org/EIPS/eip-1186)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const block = await client.getProof({
 address: '0x...',
 storageKeys: ['0x...'],
})
```

##### Parameters

• **args**: `GetProofParameters`

##### Returns

`Promise`\<`GetProofReturnType`\>

#### getStorageAt()

> **getStorageAt**: (`args`) => `Promise`\<`GetStorageAtReturnType`\>

Returns the value from a storage slot at a given address.

- Docs: https://viem.sh/docs/contract/getStorageAt
- JSON-RPC Methods: [`eth_getStorageAt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { getStorageAt } from 'viem/contract'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const code = await client.getStorageAt({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  slot: toHex(0),
})
```

##### Parameters

• **args**: `GetStorageAtParameters`

GetStorageAtParameters

##### Returns

`Promise`\<`GetStorageAtReturnType`\>

#### getTransaction()

> **getTransaction**: \<`TBlockTag`\>(`args`) => `Promise`\<`object` \| `object` \| `object` \| `object`\>

Returns information about a [Transaction](https://viem.sh/docs/glossary/terms#transaction) given a hash or block identifier.

- Docs: https://viem.sh/docs/actions/public/getTransaction
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionByHash)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transaction = await client.getTransaction({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

##### Type parameters

• **TBlockTag** *extends* `BlockTag` = `"latest"`

##### Parameters

• **args**: `GetTransactionParameters`\<`TBlockTag`\>

GetTransactionParameters

##### Returns

`Promise`\<`object` \| `object` \| `object` \| `object`\>

#### getTransactionConfirmations()

> **getTransactionConfirmations**: (`args`) => `Promise`\<`bigint`\>

Returns the number of blocks passed (confirmations) since the transaction was processed on a block.

- Docs: https://viem.sh/docs/actions/public/getTransactionConfirmations
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionConfirmations`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionConfirmations)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const confirmations = await client.getTransactionConfirmations({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

##### Parameters

• **args**: `GetTransactionConfirmationsParameters`\<`undefined` \| `Chain`\>

GetTransactionConfirmationsParameters

##### Returns

`Promise`\<`bigint`\>

#### getTransactionCount()

> **getTransactionCount**: (`args`) => `Promise`\<`number`\>

Returns the number of [Transactions](https://viem.sh/docs/glossary/terms#transaction) an Account has broadcast / sent.

- Docs: https://viem.sh/docs/actions/public/getTransactionCount
- JSON-RPC Methods: [`eth_getTransactionCount`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionCount = await client.getTransactionCount({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

##### Parameters

• **args**: `GetTransactionCountParameters`

GetTransactionCountParameters

##### Returns

`Promise`\<`number`\>

#### getTransactionReceipt()

> **getTransactionReceipt**: (`args`) => `Promise`\<`TransactionReceipt`\>

Returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms#transaction-receipt) given a [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash.

- Docs: https://viem.sh/docs/actions/public/getTransactionReceipt
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionReceipt = await client.getTransactionReceipt({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

##### Parameters

• **args**: `GetTransactionReceiptParameters`

GetTransactionReceiptParameters

##### Returns

`Promise`\<`TransactionReceipt`\>

#### key

> **key**: `string`

A key for the client.

#### multicall()

> **multicall**: \<`contracts`, `allowFailure`\>(`args`) => `Promise`\<`MulticallReturnType`\<`contracts`, `allowFailure`\>\>

Similar to [`readContract`](https://viem.sh/docs/contract/readContract), but batches up multiple functions on a contract in a single RPC call via the [`multicall3` contract](https://github.com/mds1/multicall).

- Docs: https://viem.sh/docs/contract/multicall

##### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const abi = parseAbi([
  'function balanceOf(address) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
])
const result = await client.multicall({
  contracts: [
    {
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'balanceOf',
      args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
    },
    {
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'totalSupply',
    },
  ],
})
// [{ result: 424122n, status: 'success' }, { result: 1000000n, status: 'success' }]
```

##### Type parameters

• **contracts** *extends* readonly `unknown`[]

• **allowFailure** *extends* `boolean` = `true`

##### Parameters

• **args**: `MulticallParameters`\<`contracts`, `allowFailure`\>

MulticallParameters

##### Returns

`Promise`\<`MulticallReturnType`\<`contracts`, `allowFailure`\>\>

#### name

> **name**: `string`

A name for the client.

#### pollingInterval

> **pollingInterval**: `number`

Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds.

#### prepareTransactionRequest()

> **prepareTransactionRequest**: \<`TRequest`, `TChainOverride`, `TAccountOverride`\>(`args`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<Extract\<UnionOmit\<(...), (...)\> & ((...) extends (...) ? (...) : (...)) & ((...) extends (...) ? (...) : (...)), IsNever\<(...)\> extends true ? unknown : ExactPartial\<(...)\>\> & Object, ParameterTypeToParameters\<TRequest\["parameters"\] extends readonly PrepareTransactionRequestParameterType\[\] ? any\[any\]\[number\] : "type" \| "gas" \| "nonce" \| "blobVersionedHashes" \| "chainId" \| "fees"\>\> & (unknown extends TRequest\["kzg"\] ? Object : Pick\<TRequest, "kzg"\>))\[K\] \}\>

Prepares a transaction request for signing.

- Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest

##### Examples

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

##### Type parameters

• **TRequest** *extends* `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> & `object` & `object`

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• **args**: `PrepareTransactionRequestParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`, `TAccountOverride`, `TRequest`\>

PrepareTransactionRequestParameters

##### Returns

`Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<Extract\<UnionOmit\<(...), (...)\> & ((...) extends (...) ? (...) : (...)) & ((...) extends (...) ? (...) : (...)), IsNever\<(...)\> extends true ? unknown : ExactPartial\<(...)\>\> & Object, ParameterTypeToParameters\<TRequest\["parameters"\] extends readonly PrepareTransactionRequestParameterType\[\] ? any\[any\]\[number\] : "type" \| "gas" \| "nonce" \| "blobVersionedHashes" \| "chainId" \| "fees"\>\> & (unknown extends TRequest\["kzg"\] ? Object : Pick\<TRequest, "kzg"\>))\[K\] \}\>

#### readContract()

> **readContract**: \<`abi`, `functionName`, `args`\>(`args`) => `Promise`\<`ReadContractReturnType`\<`abi`, `functionName`, `args`\>\>

Calls a read-only function on a contract, and returns the response.

- Docs: https://viem.sh/docs/contract/readContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/reading-contracts

##### Remarks

A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.

Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

##### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'
import { readContract } from 'viem/contract'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.readContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
  functionName: 'balanceOf',
  args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
// 424122n
```

##### Type parameters

• **abi** *extends* `Abi` \| readonly `unknown`[]

• **functionName** *extends* `string`

• **args** *extends* `unknown`

##### Parameters

• **args**: `ReadContractParameters`\<`abi`, `functionName`, `args`\>

ReadContractParameters

##### Returns

`Promise`\<`ReadContractReturnType`\<`abi`, `functionName`, `args`\>\>

#### request

> **request**: `EIP1193RequestFn`\<`PublicRpcSchema`\>

Request function wrapped with friendly error handling

#### sendRawTransaction()

> **sendRawTransaction**: (`args`) => `Promise`\<\`0x$\{string\}\`\>

Sends a **signed** transaction to the network

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
- JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)

##### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { sendRawTransaction } from 'viem/wallet'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const hash = await client.sendRawTransaction({
  serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
})
```

##### Parameters

• **args**: `SendRawTransactionParameters`

##### Returns

`Promise`\<\`0x$\{string\}\`\>

#### simulateContract()

> **simulateContract**: \<`abi`, `functionName`, `args`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<`SimulateContractReturnType`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`, `accountOverride`\>\>

Simulates/validates a contract interaction. This is useful for retrieving **return data** and **revert reasons** of contract write functions.

- Docs: https://viem.sh/docs/contract/simulateContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/writing-to-contracts

##### Remarks

This function does not require gas to execute and _**does not**_ change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract), but also supports contract write functions.

Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.simulateContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32) view returns (uint32)']),
  functionName: 'mint',
  args: ['69420'],
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

##### Type parameters

• **abi** *extends* `Abi` \| readonly `unknown`[]

• **functionName** *extends* `string`

• **args** *extends* `unknown`

• **chainOverride** *extends* `undefined` \| `Chain`

• **accountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

##### Parameters

• **args**: `SimulateContractParameters`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `chainOverride`, `accountOverride`\>

SimulateContractParameters

##### Returns

`Promise`\<`SimulateContractReturnType`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`, `accountOverride`\>\>

#### transport

> **transport**: `TransportConfig`\<`string`, `EIP1193RequestFn`\> & `Record`\<`string`, `any`\>

The RPC transport

#### type

> **type**: `string`

The type of client.

#### uid

> **uid**: `string`

A unique ID for the client.

#### uninstallFilter()

> **uninstallFilter**: (`args`) => `Promise`\<`boolean`\>

Destroys a Filter that was created from one of the following Actions:

- [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
- [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
- [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)

- Docs: https://viem.sh/docs/actions/public/uninstallFilter
- JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'

const filter = await client.createPendingTransactionFilter()
const uninstalled = await client.uninstallFilter({ filter })
// true
```

##### Parameters

• **args**: `UninstallFilterParameters`

UninstallFilterParameters

##### Returns

`Promise`\<`boolean`\>

#### verifyMessage()

> **verifyMessage**: (`args`) => `Promise`\<`boolean`\>

##### Parameters

• **args**: `VerifyMessageParameters`

##### Returns

`Promise`\<`boolean`\>

#### verifyTypedData()

> **verifyTypedData**: (`args`) => `Promise`\<`boolean`\>

##### Parameters

• **args**: `VerifyTypedDataParameters`

##### Returns

`Promise`\<`boolean`\>

#### waitForTransactionReceipt()

> **waitForTransactionReceipt**: (`args`) => `Promise`\<`TransactionReceipt`\>

Waits for the [Transaction](https://viem.sh/docs/glossary/terms#transaction) to be included on a [Block](https://viem.sh/docs/glossary/terms#block) (one confirmation), and then returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms#transaction-receipt). If the Transaction reverts, then the action will throw an error.

- Docs: https://viem.sh/docs/actions/public/waitForTransactionReceipt
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/sending-transactions
- JSON-RPC Methods:
  - Polls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt) on each block until it has been processed.
  - If a Transaction has been replaced:
    - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) and extracts the transactions
    - Checks if one of the Transactions is a replacement
    - If so, calls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt).

##### Remarks

The `waitForTransactionReceipt` action additionally supports Replacement detection (e.g. sped up Transactions).

Transactions can be replaced when a user modifies their transaction in their wallet (to speed up or cancel). Transactions are replaced when they are sent from the same nonce.

There are 3 types of Transaction Replacement reasons:

- `repriced`: The gas price has been modified (e.g. different `maxFeePerGas`)
- `cancelled`: The Transaction has been cancelled (e.g. `value === 0n`)
- `replaced`: The Transaction has been replaced (e.g. different `value` or `data`)

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionReceipt = await client.waitForTransactionReceipt({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

##### Parameters

• **args**: `WaitForTransactionReceiptParameters`\<`undefined` \| `Chain`\>

WaitForTransactionReceiptParameters

##### Returns

`Promise`\<`TransactionReceipt`\>

#### watchBlockNumber()

> **watchBlockNumber**: (`args`) => `WatchBlockNumberReturnType`

Watches and returns incoming block numbers.

- Docs: https://viem.sh/docs/actions/public/watchBlockNumber
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/watching-blocks
- JSON-RPC Methods:
  - When `poll: true`, calls [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchBlockNumber({
  onBlockNumber: (blockNumber) => console.log(blockNumber),
})
```

##### Parameters

• **args**: `WatchBlockNumberParameters`

WatchBlockNumberParameters

##### Returns

`WatchBlockNumberReturnType`

#### watchBlocks()

> **watchBlocks**: \<`TIncludeTransactions`, `TBlockTag`\>(`args`) => `WatchBlocksReturnType`

Watches and returns information for incoming blocks.

- Docs: https://viem.sh/docs/actions/public/watchBlocks
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/watching-blocks
- JSON-RPC Methods:
  - When `poll: true`, calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getBlockByNumber) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchBlocks({
  onBlock: (block) => console.log(block),
})
```

##### Type parameters

• **TIncludeTransactions** *extends* `boolean` = `false`

• **TBlockTag** *extends* `BlockTag` = `"latest"`

##### Parameters

• **args**: `WatchBlocksParameters`\<`Transport`, `undefined` \| `Chain`, `TIncludeTransactions`, `TBlockTag`\>

WatchBlocksParameters

##### Returns

`WatchBlocksReturnType`

#### watchContractEvent()

> **watchContractEvent**: \<`TAbi`, `TEventName`, `TStrict`\>(`args`) => `WatchContractEventReturnType`

Watches and returns emitted contract event logs.

- Docs: https://viem.sh/docs/contract/watchContractEvent

##### Remarks

This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent#onLogs).

`watchContractEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchContractEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.

##### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = client.watchContractEvent({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed from, address indexed to, uint256 value)']),
  eventName: 'Transfer',
  args: { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
  onLogs: (logs) => console.log(logs),
})
```

##### Type parameters

• **TAbi** *extends* `Abi` \| readonly `unknown`[]

• **TEventName** *extends* `string`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• **args**: `WatchContractEventParameters`\<`TAbi`, `TEventName`, `TStrict`, `Transport`\>

WatchContractEventParameters

##### Returns

`WatchContractEventReturnType`

#### watchEvent()

> **watchEvent**: \<`TAbiEvent`, `TAbiEvents`, `TStrict`\>(`args`) => `WatchEventReturnType`

Watches and returns emitted [Event Logs](https://viem.sh/docs/glossary/terms#event-log).

- Docs: https://viem.sh/docs/actions/public/watchEvent
- JSON-RPC Methods:
  - **RPC Provider supports `eth_newFilter`:**
    - Calls [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter) to create a filter (called on initialize).
    - On a polling interval, it will call [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).
  - **RPC Provider does not support `eth_newFilter`:**
    - Calls [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) for each block between the polling interval.

##### Remarks

This Action will batch up all the Event Logs found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/actions/public/watchEvent#onLogs).

`watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/actions/public/createEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = client.watchEvent({
  onLogs: (logs) => console.log(logs),
})
```

##### Type parameters

• **TAbiEvent** *extends* `undefined` \| `AbiEvent` = `undefined`

• **TAbiEvents** *extends* `undefined` \| readonly `unknown`[] \| readonly `AbiEvent`[] = `TAbiEvent` *extends* `AbiEvent` ? [`TAbiEvent`\<`TAbiEvent`\>] : `undefined`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

##### Parameters

• **args**: `WatchEventParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `Transport`\>

WatchEventParameters

##### Returns

`WatchEventReturnType`

#### watchPendingTransactions()

> **watchPendingTransactions**: (`args`) => `WatchPendingTransactionsReturnType`

Watches and returns pending transaction hashes.

- Docs: https://viem.sh/docs/actions/public/watchPendingTransactions
- JSON-RPC Methods:
  - When `poll: true`
    - Calls [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter) to initialize the filter.
    - Calls [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getFilterChanges) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newPendingTransactions"` event.

##### Remarks

This Action will batch up all the pending transactions found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchPendingTransactions#pollinginterval-optional), and invoke them via [`onTransactions`](https://viem.sh/docs/actions/public/watchPendingTransactions#ontransactions).

##### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchPendingTransactions({
  onTransactions: (hashes) => console.log(hashes),
})
```

##### Parameters

• **args**: `WatchPendingTransactionsParameters`\<`Transport`\>

WatchPendingTransactionsParameters

##### Returns

`WatchPendingTransactionsReturnType`

#### Inherited from

`BaseSmartContractAccount.rpcProvider`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:18

***

### scanForUpgradedAccountsFromV1

> `private` **scanForUpgradedAccountsFromV1**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:23

***

### sessionData?

> `private` `optional` **sessionData**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:13

***

### signer

> `protected` **signer**: `SmartAccountSigner`\<`any`\>

#### Inherited from

`BaseSmartContractAccount.signer`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:15

***

### validateUserOpAndPaymasterRequest

> `private` **validateUserOpAndPaymasterRequest**: `any`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:532

## Methods

### \_getAccountContract()

> **\_getAccountContract**(): `Promise`\<`object`\>

#### Returns

`Promise`\<`object`\>

##### abi

> **abi**: readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`]

##### address

> **address**: \`0x$\{string\}\`

##### createEventFilter

> **createEventFilter**: `object`

Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs).

###### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  client: publicClient,
})
const filter = await contract.createEventFilter.Transfer()
```

##### createEventFilter.ChangedFallbackHandler()

> **ChangedFallbackHandler**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ChangedFallbackHandler"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ChangedFallbackHandler"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.DisabledModule()

> **DisabledModule**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"DisabledModule"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `Record`\<`string`, `unknown`\> \| readonly `unknown`[]

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"DisabledModule"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.EnabledModule()

> **EnabledModule**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"EnabledModule"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `Record`\<`string`, `unknown`\> \| readonly `unknown`[]

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"EnabledModule"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.ExecutionFailure()

> **ExecutionFailure**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFailure"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFailure"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.ExecutionFromModuleFailure()

> **ExecutionFromModuleFailure**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFromModuleFailure"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFromModuleFailure"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.ExecutionFromModuleSuccess()

> **ExecutionFromModuleSuccess**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFromModuleSuccess"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFromModuleSuccess"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.ExecutionSuccess()

> **ExecutionSuccess**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionSuccess"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionSuccess"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.ImplementationUpdated()

> **ImplementationUpdated**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ImplementationUpdated"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ImplementationUpdated"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.ModuleTransaction()

> **ModuleTransaction**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ModuleTransaction"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `Record`\<`string`, `unknown`\> \| readonly `unknown`[]

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ModuleTransaction"`, `TArgs`, `TStrict`\>\>

##### createEventFilter.SmartAccountReceivedNativeToken()

> **SmartAccountReceivedNativeToken**: \<`TArgs`, `TStrict`\>(...`parameters`) => `Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"SmartAccountReceivedNativeToken"`, `TArgs`, `TStrict`\>\>

###### Type parameters

• **TArgs** *extends* `undefined` \| `object`

• **TStrict** *extends* `undefined` \| `boolean` = `undefined`

###### Parameters

• ...**parameters**: [`object` \| `object` *extends* `TArgs` ? `Readonly`\<`TArgs`\> : `never`, `object` & `object`]

###### Returns

`Promise`\<`CreateContractEventFilterReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"SmartAccountReceivedNativeToken"`, `TArgs`, `TStrict`\>\>

##### estimateGas

> **estimateGas**: `object` & `object`

Estimates the gas necessary to complete a transaction without submitting it to the network.

###### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint() public']),
  client: publicClient,
})
const gas = await contract.estimateGas.mint({
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
})
```

###### Type declaration

###### addDeposit()

> **addDeposit**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [`Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addDeposit"`, readonly [], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### disableModule()

> **disableModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"disableModule"`, readonly [\`0x$\{(...)\}\`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### enableModule()

> **enableModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"enableModule"`, readonly [\`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execBatchTransactionFromModule()

> **execBatchTransactionFromModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[], readonly `number`[]], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execBatchTransactionFromModule"`, readonly [readonly ...[], readonly ...[], readonly ...[], readonly ...[]], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execTransactionFromModule()

> **execTransactionFromModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`, `bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...], `"execTransactionFromModule"`, ... \| ..., ... \| ...\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>] \| [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...], `"execTransactionFromModule"`, ... \| ..., ... \| ...\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execTransactionFromModuleReturnData()

> **execTransactionFromModuleReturnData**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModuleReturnData"`, readonly [\`0x$\{(...)\}\`, `bigint`, \`0x$\{(...)\}\`, `number`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execute()

> **execute**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute"`, readonly [\`0x$\{(...)\}\`, `bigint`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### executeBatch()

> **executeBatch**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch"`, readonly [readonly ...[], readonly ...[], readonly ...[]], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### executeBatch\_y6U()

> **executeBatch\_y6U**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch_y6U"`, readonly [readonly ...[], readonly ...[], readonly ...[]], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execute\_ncC()

> **execute\_ncC**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute_ncC"`, readonly [\`0x$\{(...)\}\`, `bigint`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### init()

> **init**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"init"`, readonly [\`0x$\{(...)\}\`, \`0x$\{(...)\}\`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### setFallbackHandler()

> **setFallbackHandler**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setFallbackHandler"`, readonly [\`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### setupAndEnableModule()

> **setupAndEnableModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setupAndEnableModule"`, readonly [\`0x$\{(...)\}\`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### updateImplementation()

> **updateImplementation**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"updateImplementation"`, readonly [\`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### validateUserOp()

> **validateUserOp**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`object`, \`0x$\{string\}\`, `bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"validateUserOp"`, readonly [`object`, \`0x$\{(...)\}\`, `bigint`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### withdrawDepositTo()

> **withdrawDepositTo**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawDepositTo"`, readonly [\`0x$\{(...)\}\`, `bigint`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### Type declaration

###### addDeposit()

> **addDeposit**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [`Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addDeposit"`, readonly [], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### disableModule()

> **disableModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"disableModule"`, readonly [\`0x$\{(...)\}\`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### enableModule()

> **enableModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"enableModule"`, readonly [\`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execBatchTransactionFromModule()

> **execBatchTransactionFromModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[], readonly `number`[]], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execBatchTransactionFromModule"`, readonly [readonly ...[], readonly ...[], readonly ...[], readonly ...[]], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execTransactionFromModule()

> **execTransactionFromModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`, `bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...], `"execTransactionFromModule"`, ... \| ..., ... \| ...\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>] \| [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...], `"execTransactionFromModule"`, ... \| ..., ... \| ...\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execTransactionFromModuleReturnData()

> **execTransactionFromModuleReturnData**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModuleReturnData"`, readonly [\`0x$\{(...)\}\`, `bigint`, \`0x$\{(...)\}\`, `number`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execute()

> **execute**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute"`, readonly [\`0x$\{(...)\}\`, `bigint`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### executeBatch()

> **executeBatch**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch"`, readonly [readonly ...[], readonly ...[], readonly ...[]], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### executeBatch\_y6U()

> **executeBatch\_y6U**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch_y6U"`, readonly [readonly ...[], readonly ...[], readonly ...[]], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### execute\_ncC()

> **execute\_ncC**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute_ncC"`, readonly [\`0x$\{(...)\}\`, `bigint`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### init()

> **init**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"init"`, readonly [\`0x$\{(...)\}\`, \`0x$\{(...)\}\`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### setFallbackHandler()

> **setFallbackHandler**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setFallbackHandler"`, readonly [\`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### setupAndEnableModule()

> **setupAndEnableModule**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setupAndEnableModule"`, readonly [\`0x$\{(...)\}\`, \`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### updateImplementation()

> **updateImplementation**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"updateImplementation"`, readonly [\`0x$\{(...)\}\`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### validateUserOp()

> **validateUserOp**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`object`, \`0x$\{string\}\`, `bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"validateUserOp"`, readonly [`object`, \`0x$\{(...)\}\`, `bigint`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

###### withdrawDepositTo()

> **withdrawDepositTo**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `Prettify`\<`UnionOmit`\<`EstimateContractGasParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawDepositTo"`, readonly [\`0x$\{(...)\}\`, `bigint`], `undefined` \| `Chain`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>\>]

###### Returns

`Promise`\<`bigint`\>

##### getEvents

> **getEvents**: `object`

Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs).

###### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  client: publicClient,
})
const filter = await contract.createEventFilter.Transfer()
```

##### getEvents.ChangedFallbackHandler()

> **ChangedFallbackHandler**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ChangedFallbackHandler"`\>\>

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ChangedFallbackHandler"`\>\>

##### getEvents.DisabledModule()

> **DisabledModule**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"DisabledModule"`\>\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"DisabledModule"`\>\>

##### getEvents.EnabledModule()

> **EnabledModule**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"EnabledModule"`\>\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"EnabledModule"`\>\>

##### getEvents.ExecutionFailure()

> **ExecutionFailure**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFailure"`\>\>

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFailure"`\>\>

##### getEvents.ExecutionFromModuleFailure()

> **ExecutionFromModuleFailure**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFromModuleFailure"`\>\>

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFromModuleFailure"`\>\>

##### getEvents.ExecutionFromModuleSuccess()

> **ExecutionFromModuleSuccess**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFromModuleSuccess"`\>\>

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionFromModuleSuccess"`\>\>

##### getEvents.ExecutionSuccess()

> **ExecutionSuccess**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionSuccess"`\>\>

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ExecutionSuccess"`\>\>

##### getEvents.ImplementationUpdated()

> **ImplementationUpdated**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ImplementationUpdated"`\>\>

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ImplementationUpdated"`\>\>

##### getEvents.ModuleTransaction()

> **ModuleTransaction**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ModuleTransaction"`\>\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"ModuleTransaction"`\>\>

##### getEvents.SmartAccountReceivedNativeToken()

> **SmartAccountReceivedNativeToken**: (...`parameters`) => `Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"SmartAccountReceivedNativeToken"`\>\>

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`Promise`\<`GetContractEventsReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"SmartAccountReceivedNativeToken"`\>\>

##### read

> **read**: `object`

Calls a read-only function on a contract, and returns the response.

A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.

Internally, `read` uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

###### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi([
    'function balanceOf(address owner) view returns (uint256)',
  ]),
  client: publicClient,
})
const result = await contract.read.balanceOf(['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'])
// 424122n
```

##### read.VERSION()

> **VERSION**: (...`parameters`) => `Promise`\<`string`\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<`string`\>

##### read.entryPoint()

> **entryPoint**: (...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### read.getDeposit()

> **getDeposit**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<`bigint`\>

##### read.getFallbackHandler()

> **getFallbackHandler**: (...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### read.getImplementation()

> **getImplementation**: (...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### read.getModulesPaginated()

> **getModulesPaginated**: (...`parameters`) => `Promise`\<readonly [readonly \`0x$\{string\}\`[], \`0x$\{string\}\`]\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `object`]

###### Returns

`Promise`\<readonly [readonly \`0x$\{string\}\`[], \`0x$\{string\}\`]\>

##### read.isModuleEnabled()

> **isModuleEnabled**: (...`parameters`) => `Promise`\<`boolean`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `object`]

###### Returns

`Promise`\<`boolean`\>

##### read.isValidSignature()

> **isValidSignature**: (...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `object`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### read.nonce()

> **nonce**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`bigint`], `object`]

###### Returns

`Promise`\<`bigint`\>

##### read.noncesDeprecated()

> **noncesDeprecated**: (...`parameters`) => `Promise`\<`bigint`\>

###### Parameters

• ...**parameters**: [readonly [`bigint`], `object`]

###### Returns

`Promise`\<`bigint`\>

##### read.ownerDeprecated()

> **ownerDeprecated**: (...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### read.supportsInterface()

> **supportsInterface**: (...`parameters`) => `Promise`\<`boolean`\>

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `object`]

###### Returns

`Promise`\<`boolean`\>

##### simulate

> **simulate**: `object`

Simulates/validates a contract interaction. This is useful for retrieving return data and revert reasons of contract write functions.

This function does not require gas to execute and does not change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract), but also supports contract write functions.

Internally, `simulate` uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

###### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint() public']),
  client: publicClient,
})
const result = await contract.simulate.mint({
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
})
```

##### simulate.addDeposit()

> **addDeposit**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addDeposit"`, readonly [], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [`Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addDeposit"`, readonly [], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"addDeposit"`, readonly [], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.disableModule()

> **disableModule**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"disableModule"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"disableModule"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"disableModule"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.enableModule()

> **enableModule**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"enableModule"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"enableModule"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"enableModule"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.execBatchTransactionFromModule()

> **execBatchTransactionFromModule**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execBatchTransactionFromModule"`, readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[], readonly `number`[]], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[], readonly `number`[]], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execBatchTransactionFromModule"`, readonly [readonly \`0x$\{(...)\}\`[], readonly `bigint`[], readonly \`0x$\{(...)\}\`[], readonly `number`[]], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execBatchTransactionFromModule"`, readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[], readonly `number`[]], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.execTransactionFromModule()

> **execTransactionFromModule**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModule"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`, `bigint`] \| readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`, `bigint`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModule"`, readonly [..., ..., ..., ..., ...] \| readonly [..., ..., ..., ...], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>] \| [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModule"`, readonly [..., ..., ..., ..., ...] \| readonly [..., ..., ..., ...], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModule"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`, `bigint`] \| readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.execTransactionFromModuleReturnData()

> **execTransactionFromModuleReturnData**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModuleReturnData"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModuleReturnData"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execTransactionFromModuleReturnData"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.execute()

> **execute**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.executeBatch()

> **executeBatch**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch"`, readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch"`, readonly [readonly \`0x$\{(...)\}\`[], readonly `bigint`[], readonly \`0x$\{(...)\}\`[]], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch"`, readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.executeBatch\_y6U()

> **executeBatch\_y6U**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch_y6U"`, readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch_y6U"`, readonly [readonly \`0x$\{(...)\}\`[], readonly `bigint`[], readonly \`0x$\{(...)\}\`[]], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"executeBatch_y6U"`, readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.execute\_ncC()

> **execute\_ncC**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute_ncC"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute_ncC"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"execute_ncC"`, readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.init()

> **init**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"init"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"init"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"init"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.setFallbackHandler()

> **setFallbackHandler**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setFallbackHandler"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setFallbackHandler"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setFallbackHandler"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.setupAndEnableModule()

> **setupAndEnableModule**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setupAndEnableModule"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setupAndEnableModule"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"setupAndEnableModule"`, readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.updateImplementation()

> **updateImplementation**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"updateImplementation"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"updateImplementation"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"updateImplementation"`, readonly [\`0x$\{string\}\`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.validateUserOp()

> **validateUserOp**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"validateUserOp"`, readonly [`object`, \`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [`object`, \`0x$\{string\}\`, `bigint`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"validateUserOp"`, readonly [`object`, \`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"validateUserOp"`, readonly [`object`, \`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### simulate.withdrawDepositTo()

> **withdrawDepositTo**: \<`TChainOverride`, `TAccountOverride`\>(...`parameters`) => `Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawDepositTo"`, readonly [\`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain` = `undefined`

• **TAccountOverride** *extends* `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `Omit`\<`SimulateContractParameters`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawDepositTo"`, readonly [\`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `TChainOverride`, `TAccountOverride`\>, `"address"` \| `"args"` \| `"abi"` \| `"functionName"`\>]

###### Returns

`Promise`\<`SimulateContractReturnType`\<readonly [`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`], `"withdrawDepositTo"`, readonly [\`0x$\{string\}\`, `bigint`], `undefined` \| `Chain`, `undefined`, `TChainOverride`, `TAccountOverride`\>\>

##### watchEvent

> **watchEvent**: `object`

Watches and returns emitted contract event logs.

This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent#onLogs).

`watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs) instead.

###### Example

```ts
import { createPublicClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  client: publicClient,
})
const filter = await contract.createEventFilter.Transfer()
const unwatch = contract.watchEvent.Transfer(
  { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
  { onLogs: (logs) => console.log(logs) },
)
```

##### watchEvent.ChangedFallbackHandler()

> **ChangedFallbackHandler**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.DisabledModule()

> **DisabledModule**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.EnabledModule()

> **EnabledModule**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.ExecutionFailure()

> **ExecutionFailure**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.ExecutionFromModuleFailure()

> **ExecutionFromModuleFailure**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.ExecutionFromModuleSuccess()

> **ExecutionFromModuleSuccess**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.ExecutionSuccess()

> **ExecutionSuccess**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.ImplementationUpdated()

> **ImplementationUpdated**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.ModuleTransaction()

> **ModuleTransaction**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`]

###### Returns

`WatchContractEventReturnType`

##### watchEvent.SmartAccountReceivedNativeToken()

> **SmartAccountReceivedNativeToken**: (...`parameters`) => `WatchContractEventReturnType`

###### Parameters

• ...**parameters**: [`object`, `object`]

###### Returns

`WatchContractEventReturnType`

##### write

> **write**: `object`

Executes a write function on a contract.

A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, and hence a [Transaction](https://viem.sh/docs/glossary/terms) is needed to be broadcast in order to change the state.

Internally, `write` uses a [Wallet Client](https://viem.sh/docs/clients/wallet) to call the [`sendTransaction` action](https://viem.sh/docs/actions/wallet/sendTransaction) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

__Warning: The `write` internally sends a transaction – it does not validate if the contract write will succeed (the contract may throw an error). It is highly recommended to [simulate the contract write with `contract.simulate`](https://viem.sh/docs/contract/writeContract#usage) before you execute it.__

###### Example

```ts
import { createWalletClient, getContract, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const walletClient = createWalletClient({
  chain: mainnet,
  transport: http(),
})
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32 tokenId) nonpayable']),
  client: walletClient,
})
const hash = await contract.write.min([69420], {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```

##### write.addDeposit()

> **addDeposit**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "addDeposit", readonly \[\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [`Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.disableModule()

> **disableModule**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "disableModule", readonly \[\`0x$\{string\}\`, \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.enableModule()

> **enableModule**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "enableModule", readonly \[\`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.execBatchTransactionFromModule()

> **execBatchTransactionFromModule**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "execBatchTransactionFromModule", readonly \[readonly \`0x$\{(...)\}\`\[\], readonly bigint\[\], readonly \`0x$\{(...)\}\`\[\], readonly number\[\]\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[], readonly `number`[]], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.execTransactionFromModule()

> **execTransactionFromModule**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "execTransactionFromModule", readonly \[\`0x$\{(...)\}\`, bigint, \`0x$\{(...)\}\`, number, bigint\] \| readonly \[\`0x$\{(...)\}\`, bigint, \`0x$\{(...)\}\`, number\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`, `bigint`], `Options`] \| [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.execTransactionFromModuleReturnData()

> **execTransactionFromModuleReturnData**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "execTransactionFromModuleReturnData", readonly \[\`0x$\{string\}\`, bigint, \`0x$\{string\}\`, number\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`, `number`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.execute()

> **execute**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "execute", readonly \[\`0x$\{string\}\`, bigint, \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.executeBatch()

> **executeBatch**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "executeBatch", readonly \[readonly \`0x$\{(...)\}\`\[\], readonly bigint\[\], readonly \`0x$\{(...)\}\`\[\]\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.executeBatch\_y6U()

> **executeBatch\_y6U**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "executeBatch\_y6U", readonly \[readonly \`0x$\{(...)\}\`\[\], readonly bigint\[\], readonly \`0x$\{(...)\}\`\[\]\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [readonly \`0x$\{string\}\`[], readonly `bigint`[], readonly \`0x$\{string\}\`[]], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.execute\_ncC()

> **execute\_ncC**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "execute\_ncC", readonly \[\`0x$\{string\}\`, bigint, \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`, \`0x$\{string\}\`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.init()

> **init**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "init", readonly \[\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`, \`0x$\{string\}\`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.setFallbackHandler()

> **setFallbackHandler**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "setFallbackHandler", readonly \[\`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.setupAndEnableModule()

> **setupAndEnableModule**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "setupAndEnableModule", readonly \[\`0x$\{string\}\`, \`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, \`0x$\{string\}\`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.updateImplementation()

> **updateImplementation**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "updateImplementation", readonly \[\`0x$\{string\}\`\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.validateUserOp()

> **validateUserOp**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "validateUserOp", readonly \[Object, \`0x$\{string\}\`, bigint\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [`object`, \`0x$\{string\}\`, `bigint`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### write.withdrawDepositTo()

> **withdrawDepositTo**: \<`TChainOverride`, `Options`\>(...`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type parameters

• **TChainOverride** *extends* `undefined` \| `Chain`

• **Options** *extends* \{ \[K in string \| number \| symbol\]: UnionOmit\<WriteContractParameters\<readonly \[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object\], "withdrawDepositTo", readonly \[\`0x$\{string\}\`, bigint\], undefined \| Chain, undefined, TChainOverride\>, "address" \| "args" \| "abi" \| "functionName"\>\[K\] \}

###### Parameters

• ...**parameters**: [readonly [\`0x$\{string\}\`, `bigint`], `Options`]

###### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:206

***

### buildTokenPaymasterUserOp()

> **buildTokenPaymasterUserOp**(`userOp`, `tokenPaymasterRequest`): `Promise`\<`Partial`\<`UserOperationStruct`\>\>

#### Parameters

• **userOp**: `Partial`\<`UserOperationStruct`\>

partial user operation without signature and paymasterAndData

• **tokenPaymasterRequest**: `BiconomyTokenPaymasterRequest`

This dto provides information about fee quote. Fee quote is received from earlier request getFeeQuotesOrData() to the Biconomy paymaster.
 maxFee and token decimals from the quote, along with the spender is required to append approval transaction.

#### Returns

`Promise`\<`Partial`\<`UserOperationStruct`\>\>

updated userOp with new callData, callGasLimit

#### Notice

This method should be called when gas is paid in ERC20 token using TokenPaymaster

#### Description

Optional method to update the userOp.calldata with batched transaction which approves the paymaster spender with necessary amount(if required)

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:542

***

### buildUserOp()

> **buildUserOp**(`transactions`, `buildUseropDto`?): `Promise`\<`Partial`\<`UserOperationStruct`\>\>

Builds a user operation

This method will also simulate the validation and execution of the user operation, telling the user if the user operation will be successful or not.

- Docs: https://docs.biconomy.io/Account/transactions/userpaid#build-useroperation

#### Parameters

• **transactions**: [`Transaction`](../type-aliases/Transaction.md)[]

Array of [Transaction](../type-aliases/Transaction.md) to be sent.

• **buildUseropDto?**: [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

[BuildUserOpOptions](../type-aliases/BuildUserOpOptions.md).

#### Returns

`Promise`\<`Partial`\<`UserOperationStruct`\>\>

Promise<PartialUserOperationStruct>> the built user operation to be sent.

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl }); // Retrieve bundler url from dashboard
const encodedCall = encodeFunctionData({
  abi: parseAbi(["function safeMint(address to) public"]),
  functionName: "safeMint",
  args: ["0x..."],
});

const transaction = {
  to: nftAddress,
  data: encodedCall
}

const userOp = await smartAccount.buildUserOp([{ to: "0x...", data: encodedCall }]);
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:531

***

### deploy()

> **deploy**(`buildUseropDto`?): `Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

Deploys the smart contract

This method will deploy a Smart Account contract. It is useful for deploying in a moment when you know that gas prices are low,
and you want to deploy the account before sending the first user operation. This step can otherwise be skipped,
as the deployment will alternatively be bundled with the first user operation.

#### Parameters

• **buildUseropDto?**: [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

[BuildUserOpOptions](../type-aliases/BuildUserOpOptions.md).

#### Returns

`Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

Promise<[UserOpResponse](../type-aliases/UserOpResponse.md)> that you can use to track the user operation.

#### Error

Throws an error if the account has already been deployed.

#### Error

Throws an error if the account has not enough native token balance to deploy, if not using a paymaster.

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({
 signer,
 biconomyPaymasterApiKey,
 bundlerUrl
});

// If you want to use a paymaster...
const { wait } = await smartAccount.deploy({
  paymasterServiceData: { mode: PaymasterMode.SPONSORED },
});

// Or if you can't use a paymaster send native token to this address:
const counterfactualAddress = await smartAccount.getAccountAddress();

// Then deploy the account
const { wait } = await smartAccount.deploy();

const { success, receipt } = await wait();
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:588

***

### disableModule()

> **disableModule**(`prevModule`, `moduleAddress`): `Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

#### Parameters

• **prevModule**: \`0x$\{string\}\`

• **moduleAddress**: \`0x$\{string\}\`

#### Returns

`Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:595

***

### enableModule()

> **enableModule**(`moduleAddress`): `Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

#### Parameters

• **moduleAddress**: \`0x$\{string\}\`

#### Returns

`Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:592

***

### encodeBatchExecute()

> **encodeBatchExecute**(`txs`): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **txs**: `BatchUserOperationCallData`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Overrides

`BaseSmartContractAccount.encodeBatchExecute`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:233

***

### encodeExecute()

> **encodeExecute**(`to`, `value`, `data`): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **to**: \`0x$\{string\}\`

{ target } address of transaction

• **value**: `bigint`

represents amount of native tokens

• **data**: \`0x$\{string\}\`

represent data associated with transaction

#### Returns

`Promise`\<\`0x$\{string\}\`\>

encoded data for execute function

#### Overrides

`BaseSmartContractAccount.encodeExecute`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:224

***

### encodeExecuteBatch()

> **encodeExecuteBatch**(`to`, `value`, `data`): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **to**: \`0x$\{string\}\`[]

{ target } array of addresses in transaction

• **value**: `bigint`[]

represents array of amount of native tokens associated with each transaction

• **data**: \`0x$\{string\}\`[]

represent array of data associated with each transaction

#### Returns

`Promise`\<\`0x$\{string\}\`\>

encoded data for executeBatch function

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:232

***

### estimateUserOpGas()

> **estimateUserOpGas**(`userOp`, `stateOverrideSet`?): `Promise`\<`Partial`\<`UserOperationStruct`\>\>

#### Parameters

• **userOp**: `Partial`\<`UserOperationStruct`\>

• **stateOverrideSet?**: `StateOverrideSet`

#### Returns

`Promise`\<`Partial`\<`UserOperationStruct`\>\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:377

***

### getAccountAddress()

> **getAccountAddress**(`params`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **params?**: `CounterFactualAddressParam`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:63

***

### getAccountInitCode()

> **getAccountInitCode**(): `Promise`\<\`0x$\{string\}\`\>

Return the value to put into the "initCode" field, if the account is not yet deployed.
This value holds the "factory" address, followed by this account's information

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Overrides

`BaseSmartContractAccount.getAccountInitCode`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:216

***

### getAddress()

> **getAddress**(`params`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **params?**: `CounterFactualAddressParam`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Overrides

`BaseSmartContractAccount.getAddress`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:62

***

### getAllModules()

> **getAllModules**(`pageSize`?): `Promise`\<`string`[]\>

#### Parameters

• **pageSize?**: `number`

#### Returns

`Promise`\<`string`[]\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:598

***

### getBalances()

> **getBalances**(`addresses`?): `Promise`\<`BalancePayload`[]\>

Returns balances for the smartAccount instance.

This method will fetch tokens info given an array of token addresses for the smartAccount instance.
The balance of the native token will always be returned as the last element in the reponse array, with the address set to 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE.

#### Parameters

• **addresses?**: \`0x$\{string\}\`[]

Optional. Array of asset addresses to fetch the balances of. If not provided, the method will return only the balance of the native token.

#### Returns

`Promise`\<`BalancePayload`[]\>

Promise<Array<BalancePayload>> - An array of token balances (plus the native token balance) of the smartAccount instance.

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const token = "0x747A4168DB14F57871fa8cda8B5455D8C2a8e90a";
const smartAccount = await createSmartAccountClient({ signer, bundlerUrl });
const [tokenBalanceFromSmartAccount, nativeTokenBalanceFromSmartAccount] = await smartAccount.getBalances([token]);

console.log(tokenBalanceFromSmartAccount);
// {
//   amount: 1000000000000000n,
//   decimals: 6,
//   address: "0x747A4168DB14F57871fa8cda8B5455D8C2a8e90a",
//   formattedAmount: "1000000",
//   chainId: 80002
// }

// or to get the nativeToken balance

const [nativeTokenBalanceFromSmartAccount] = await smartAccount.getBalances();

console.log(nativeTokenBalanceFromSmartAccount);
// {
//   amount: 1000000000000000n,
//   decimals: 18,
//   address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
//   formattedAmount: "1",
//   chainId: 80002
// }
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:157

***

### getCounterFactualAddress()

> **getCounterFactualAddress**(`params`?): `Promise`\<\`0x$\{string\}\`\>

Return the account's address. This value is valid even before deploying the contract.

#### Parameters

• **params?**: `CounterFactualAddressParam`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:204

***

### getDeploymentState()

> **getDeploymentState**(): `Promise`\<`DeploymentState`\>

#### Returns

`Promise`\<`DeploymentState`\>

#### Inherited from

`BaseSmartContractAccount.getDeploymentState`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:103

***

### getDisableModuleData()

> **getDisableModuleData**(`prevModule`, `moduleAddress`): `Promise`\<[`Transaction`](../type-aliases/Transaction.md)\>

#### Parameters

• **prevModule**: \`0x$\{string\}\`

• **moduleAddress**: \`0x$\{string\}\`

#### Returns

`Promise`\<[`Transaction`](../type-aliases/Transaction.md)\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:596

***

### getDummyPaymasterData()

> **getDummyPaymasterData**(): `string`

#### Returns

`string`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:236

***

### getDummySignature()

> **getDummySignature**(): \`0x$\{string\}\`

#### Returns

\`0x$\{string\}\`

#### Overrides

`BaseSmartContractAccount.getDummySignature`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:235

***

### getDummySignatures()

> **getDummySignatures**(`_params`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **\_params?**: `ModuleInfo`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:234

***

### getEnableModuleData()

> **getEnableModuleData**(`moduleAddress`): `Promise`\<[`Transaction`](../type-aliases/Transaction.md)\>

#### Parameters

• **moduleAddress**: \`0x$\{string\}\`

#### Returns

`Promise`\<[`Transaction`](../type-aliases/Transaction.md)\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:593

***

### getEntryPointAddress()

> **getEntryPointAddress**(): \`0x$\{string\}\`

#### Returns

\`0x$\{string\}\`

#### Inherited from

`BaseSmartContractAccount.getEntryPointAddress`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:101

***

### getFactoryAddress()

> **getFactoryAddress**(): \`0x$\{string\}\`

#### Returns

\`0x$\{string\}\`

#### Inherited from

`BaseSmartContractAccount.getFactoryAddress`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:100

***

### getFactoryData()

> **getFactoryData**(): `Promise`\<`undefined` \| \`0x$\{string\}\`\>

#### Returns

`Promise`\<`undefined` \| \`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:589

***

### getGasEstimate()

> **getGasEstimate**(`transactions`, `buildUseropDto`?): `Promise`\<`bigint`\>

Returns an upper estimate for the gas spent on a specific user operation

This method will fetch an approximate gas estimate for the user operation, given the current state of the network.
It is regularly an overestimate, and the actual gas spent will likely be lower.
It is unlikely to be an underestimate unless the network conditions rapidly change.

#### Parameters

• **transactions**: [`Transaction`](../type-aliases/Transaction.md)[]

Array of [Transaction](../type-aliases/Transaction.md) to be sent.

• **buildUseropDto?**: [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

[BuildUserOpOptions](../type-aliases/BuildUserOpOptions.md).

#### Returns

`Promise`\<`bigint`\>

Promise<bigint> - The estimated gas cost in wei.

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl, paymasterUrl }); // Retrieve bundler/paymaster url from dashboard
const encodedCall = encodeFunctionData({
  abi: parseAbi(["function safeMint(address to) public"]),
  functionName: "safeMint",
  args: ["0x..."],
});

const tx = {
  to: nftAddress,
  data: encodedCall
}

const amountInWei = await smartAccount.getGasEstimates([tx, tx], {
   paymasterServiceData: {
     mode: PaymasterMode.SPONSORED,
   },
});

console.log(amountInWei.toString());
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:108

***

### getImplementationAddress()

> `protected` **getImplementationAddress**(): `Promise`\<\`0x$\{string\}\`\>

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`BaseSmartContractAccount.getImplementationAddress`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:114

***

### getInitCode()

> **getInitCode**(): `Promise`\<\`0x$\{string\}\`\>

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`BaseSmartContractAccount.getInitCode`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:96

***

### getIsValidSignatureData()

> **getIsValidSignatureData**(`messageHash`, `signature`): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **messageHash**: \`0x$\{string\}\`

• **signature**: \`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:591

***

### getNonce()

> **getNonce**(`nonceKey`?): `Promise`\<`bigint`\>

#### Parameters

• **nonceKey?**: `number`

#### Returns

`Promise`\<`bigint`\>

#### Overrides

`BaseSmartContractAccount.getNonce`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:378

***

### getPaymasterUserOp()

> **getPaymasterUserOp**(`userOp`, `paymasterServiceData`): `Promise`\<`Partial`\<`UserOperationStruct`\>\>

#### Parameters

• **userOp**: `Partial`\<`UserOperationStruct`\>

• **paymasterServiceData**: `PaymasterUserOperationDto`

#### Returns

`Promise`\<`Partial`\<`UserOperationStruct`\>\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:240

***

### getSetupAndEnableModuleData()

> **getSetupAndEnableModuleData**(`moduleAddress`, `moduleSetupData`): `Promise`\<[`Transaction`](../type-aliases/Transaction.md)\>

#### Parameters

• **moduleAddress**: \`0x$\{string\}\`

• **moduleSetupData**: \`0x$\{string\}\`

#### Returns

`Promise`\<[`Transaction`](../type-aliases/Transaction.md)\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:594

***

### getSignatureWithModuleAddress()

> **getSignatureWithModuleAddress**(`moduleSignature`, `moduleAddress`?): \`0x$\{string\}\`

#### Parameters

• **moduleSignature**: \`0x$\{string\}\`

• **moduleAddress?**: \`0x$\{string\}\`

#### Returns

\`0x$\{string\}\`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:239

***

### getSigner()

> **getSigner**(): `SmartAccountSigner`\<`any`\>

#### Returns

`SmartAccountSigner`\<`any`\>

#### Inherited from

`BaseSmartContractAccount.getSigner`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:99

***

### getSupportedTokens()

> **getSupportedTokens**(): `Promise`\<`SupportedToken`[]\>

#### Returns

`Promise`\<`SupportedToken`[]\>

Promise<SupportedToken>

#### Description

This function will return an array of supported tokens from the erc20 paymaster associated with the Smart Account

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl, biconomyPaymasterApiKey }); // Retrieve bundler url from dashboard
const tokens = await smartAccount.getSupportedTokens();

// [
//   {
//     symbol: "USDC",
//     tokenAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
//     decimal: 6,
//     logoUrl: "https://assets.coingecko.com/coins/images/279/large/usd-coin.png?1595353707",
//     premiumPercentage: 0.1,
//   }
// ]
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:322

***

### getTokenFees()

> **getTokenFees**(`manyOrOneTransactions`, `buildUseropDto`): `Promise`\<[`FeeQuotesOrDataResponse`](../type-aliases/FeeQuotesOrDataResponse.md)\>

#### Parameters

• **manyOrOneTransactions**: [`Transaction`](../type-aliases/Transaction.md) \| [`Transaction`](../type-aliases/Transaction.md)[]

Array of [Transaction](../type-aliases/Transaction.md) to be batched and sent. Can also be a single [Transaction](../type-aliases/Transaction.md).

• **buildUseropDto**: [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

[BuildUserOpOptions](../type-aliases/BuildUserOpOptions.md).

#### Returns

`Promise`\<[`FeeQuotesOrDataResponse`](../type-aliases/FeeQuotesOrDataResponse.md)\>

Promise<FeeQuotesOrDataResponse>

#### Description

This function will retrieve fees from the paymaster in erc20 mode

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl }); // Retrieve bundler url from dashboard
const encodedCall = encodeFunctionData({
  abi: parseAbi(["function safeMint(address to) public"]),
  functionName: "safeMint",
  args: ["0x..."],
});

const transaction = {
  to: nftAddress,
  data: encodedCall
}

const feeQuotesResponse: FeeQuotesOrDataResponse = await smartAccount.getTokenFees(transaction, { paymasterServiceData: { mode: PaymasterMode.ERC20 } });

const userSeletedFeeQuote = feeQuotesResponse.feeQuotes?.[0];

const { wait } = await smartAccount.sendTransaction(transaction, {
   paymasterServiceData: {
     mode: PaymasterMode.ERC20,
     feeQuote: userSeletedFeeQuote,
     spender: feeQuotesResponse.tokenPaymasterAddress,
   },
});

const { success, receipt } = await wait();
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:290

***

### getUserOpHash()

> **getUserOpHash**(`userOp`): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **userOp**: `Partial`\<`UserOperationStruct`\>

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:376

***

### getV1AccountsUpgradedToV2()

> **getV1AccountsUpgradedToV2**(`params`): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **params**: `QueryParamsForAddressResolver`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:211

***

### isAccountDeployed()

> **isAccountDeployed**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`BaseSmartContractAccount.isAccountDeployed`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:102

***

### isActiveValidationModuleDefined()

> **isActiveValidationModuleDefined**(): `boolean`

#### Returns

`boolean`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:207

***

### isDefaultValidationModuleDefined()

> **isDefaultValidationModuleDefined**(): `boolean`

#### Returns

`boolean`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:208

***

### isModuleEnabled()

> **isModuleEnabled**(`moduleAddress`): `Promise`\<`boolean`\>

#### Parameters

• **moduleAddress**: \`0x$\{string\}\`

#### Returns

`Promise`\<`boolean`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:597

***

### parseFactoryAddressFromAccountInitCode()

> `protected` **parseFactoryAddressFromAccountInitCode**(): `Promise`\<[\`0x$\{string\}\`, \`0x$\{string\}\`]\>

https://eips.ethereum.org/EIPS/eip-4337#first-time-account-creation
The initCode field (if non-zero length) is parsed as a 20-byte address,
followed by calldata to pass to this address.
The factory address is the first 40 char after the 0x, and the callData is the rest.

#### Returns

`Promise`\<[\`0x$\{string\}\`, \`0x$\{string\}\`]\>

#### Inherited from

`BaseSmartContractAccount.parseFactoryAddressFromAccountInitCode`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:110

***

### sendSignedUserOp()

> **sendSignedUserOp**(`userOp`, `simulationType`?): `Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

#### Parameters

• **userOp**: `UserOperationStruct`

The signed user operation to send

• **simulationType?**: `SimulationType`

The type of simulation to perform ("validation" | "validation_and_execution")

#### Returns

`Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

#### Description

This function call will take 'signedUserOp' as input and send it to the bundler

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:375

***

### sendTransaction()

> **sendTransaction**(`manyOrOneTransactions`, `buildUseropDto`?): `Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

Sends a transaction (builds and sends a user op in sequence)

- Docs: https://docs.biconomy.io/Account/transactions/userpaid#send-transaction

#### Parameters

• **manyOrOneTransactions**: [`Transaction`](../type-aliases/Transaction.md) \| [`Transaction`](../type-aliases/Transaction.md)[]

Array of [Transaction](../type-aliases/Transaction.md) to be batched and sent. Can also be a single [Transaction](../type-aliases/Transaction.md).

• **buildUseropDto?**: [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

[BuildUserOpOptions](../type-aliases/BuildUserOpOptions.md).

#### Returns

`Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

Promise<[UserOpResponse](../type-aliases/UserOpResponse.md)> that you can use to track the user operation.

#### Examples

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl }); // Retrieve bundler url from dashboard
const encodedCall = encodeFunctionData({
  abi: parseAbi(["function safeMint(address to) public"]),
  functionName: "safeMint",
  args: ["0x..."],
});

const transaction = {
  to: nftAddress,
  data: encodedCall
}

const { waitForTxHash } = await smartAccount.sendTransaction(transaction);
const { transactionHash, userOperationReceipt } = await wait();
```

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl }); // Retrieve bundler url from dashboard
const encodedCall = encodeFunctionData({
  abi: parseAbi(["function safeMint(address to) public"]),
  functionName: "safeMint",
  args: ["0x..."],
});

const transaction = {
  to: nftAddress,
  data: encodedCall
}

const { waitForTxHash } = await smartAccount.sendTransaction(transaction, {
 gasOffset: {
     verificationGasLimitOffsetPct: 25, // 25% increase for the already estimated gas limit
     preVerificationGasOffsetPct: 10 // 10% increase for the already estimated gas limit
    }
});
const { transactionHash, userOperationReceipt } = await wait();
```

#### Remarks

This example shows how to increase the estimated gas values for a transaction using `gasOffset` parameter.

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:492

***

### sendUserOp()

> **sendUserOp**(`userOp`, `params`?): `Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

#### Parameters

• **userOp**: `Partial`\<`UserOperationStruct`\>

• **params?**: `SendUserOpParams`

#### Returns

`Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

Promise<UserOpResponse>
Sends a user operation

- Docs: https://docs.biconomy.io/Account/transactions/userpaid#send-useroperation

Promise<[UserOpResponse](../type-aliases/UserOpResponse.md)> that you can use to track the user operation.

#### Description

This function will take a user op as an input, sign it with the owner key, and send it to the bundler.

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl }); // Retrieve bundler url from dashboard
const encodedCall = encodeFunctionData({
  abi: parseAbi(["function safeMint(address to) public"]),
  functionName: "safeMint",
  args: ["0x..."],
});

const transaction = {
  to: nftAddress,
  data: encodedCall
}

const userOp = await smartAccount.buildUserOp([transaction]);

const { wait } = await smartAccount.sendUserOp(userOp);
const { success, receipt } = await wait();
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:367

***

### setActiveValidationModule()

> **setActiveValidationModule**(`validationModule`): [`BiconomySmartAccountV2`](BiconomySmartAccountV2.md)

#### Parameters

• **validationModule**: `BaseValidationModule`

#### Returns

[`BiconomySmartAccountV2`](BiconomySmartAccountV2.md)

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:209

***

### setDefaultValidationModule()

> **setDefaultValidationModule**(`validationModule`): [`BiconomySmartAccountV2`](BiconomySmartAccountV2.md)

#### Parameters

• **validationModule**: `BaseValidationModule`

#### Returns

[`BiconomySmartAccountV2`](BiconomySmartAccountV2.md)

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:210

***

### signMessage()

> **signMessage**(`message`): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **message**: `string` \| `Uint8Array`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Overrides

`BaseSmartContractAccount.signMessage`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:590

***

### signMessageWith6492()

> **signMessageWith6492**(`msg`): `Promise`\<\`0x$\{string\}\`\>

This method should wrap the result of `signMessage` as per
[EIP-6492](https://eips.ethereum.org/EIPS/eip-6492)

#### Parameters

• **msg**: `string` \| `Uint8Array`

the message to sign

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`BaseSmartContractAccount.signMessageWith6492`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:69

***

### signTypedData()

> **signTypedData**(`_params`): `Promise`\<\`0x$\{string\}\`\>

If your contract supports signing and verifying typed data,
you should implement this method.

#### Parameters

• **\_params**: `SignTypedDataParams`

Typed Data params to sign

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`BaseSmartContractAccount.signTypedData`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:62

***

### signTypedDataWith6492()

> **signTypedDataWith6492**(`params`): `Promise`\<\`0x$\{string\}\`\>

Similar to the signMessageWith6492 method above,
this method should wrap the result of `signTypedData` as per
[EIP-6492](https://eips.ethereum.org/EIPS/eip-6492)

#### Parameters

• **params**: `SignTypedDataParams`

Typed Data params to sign

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`BaseSmartContractAccount.signTypedDataWith6492`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:77

***

### signUserOp()

> **signUserOp**(`userOp`, `_params`?): `Promise`\<`UserOperationStruct`\>

#### Parameters

• **userOp**: `Partial`\<`UserOperationStruct`\>

• **\_params?**: `SendUserOpParams`

#### Returns

`Promise`\<`UserOperationStruct`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:238

***

### signUserOpHash()

> **signUserOpHash**(`userOpHash`, `params`?): `Promise`\<\`0x$\{string\}\`\>

#### Parameters

• **userOpHash**: `string`

• **params?**: `ModuleInfo`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:543

***

### signUserOperationHash()

> **signUserOperationHash**(`uoHash`): `Promise`\<\`0x$\{string\}\`\>

If your account handles 1271 signatures of personal_sign differently
than it does UserOperations, you can implement two different approaches to signing

#### Parameters

• **uoHash**: \`0x$\{string\}\`

The hash of the UserOperation to sign

#### Returns

`Promise`\<\`0x$\{string\}\`\>

the signature of the UserOperation

#### Inherited from

`BaseSmartContractAccount.signUserOperationHash`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BaseSmartContractAccount.d.ts:55

***

### transferOwnership()

> **transferOwnership**(`newOwner`, `moduleAddress`, `buildUseropDto`?): `Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

Transfers ownership of the smart account to a new owner.

#### Parameters

• **newOwner**: \`0x$\{string\}\`

The address of the new owner.

• **moduleAddress**: `TransferOwnershipCompatibleModule`

TransferOwnershipCompatibleModule The address of the validation module (ECDSA Ownership Module or Multichain Validation Module).

• **buildUseropDto?**: [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

[BuildUserOpOptions](../type-aliases/BuildUserOpOptions.md). Optional parameter

#### Returns

`Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

A Promise that resolves to a UserOpResponse or rejects with an Error.

#### Description

This function will transfer ownership of the smart account to a new owner. If you use session key manager module, after transferring the ownership
you will need to re-create a session for the smart account with the new owner (signer) and specify "accountAddress" in "createSmartAccountClient" function.

#### Example

```typescript

let walletClient = createWalletClient({
     account,
     chain: baseSepolia,
     transport: http()
   });

   let smartAccount = await createSmartAccountClient({
     signer: walletClient,
     paymasterUrl: "https://paymaster.biconomy.io/api/v1/...",
     bundlerUrl: `https://bundler.biconomy.io/api/v2/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
     chainId: 84532
   });
   const response = await smartAccount.transferOwnership(newOwner, DEFAULT_ECDSA_OWNERSHIP_MODULE, {paymasterServiceData: {mode: PaymasterMode.SPONSORED}});
   
   walletClient = createWalletClient({
     newOwnerAccount,
     chain: baseSepolia,
     transport: http()
   })
   
   smartAccount = await createSmartAccountClient({
     signer: walletClient,
     paymasterUrl: "https://paymaster.biconomy.io/api/v1/...",
     bundlerUrl: `https://bundler.biconomy.io/api/v2/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
     chainId: 84532,
     accountAddress: await smartAccount.getAccountAddress()
   })
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:420

***

### validateUserOp()

> **validateUserOp**(`userOp`, `requiredFields`): `boolean`

#### Parameters

• **userOp**: `Partial`\<`UserOperationStruct`\>

• **requiredFields**: keyof `UserOperationStruct`[]

#### Returns

`boolean`

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:237

***

### withdraw()

> **withdraw**(`withdrawalRequests`?, `defaultRecipient`?, `buildUseropDto`?): `Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

Transfers funds from Smart Account to recipient (usually EOA)

#### Parameters

• **withdrawalRequests?**: `null` \| [`WithdrawalRequest`](../interfaces/WithdrawalRequest.md)[]

Array of withdrawal requests [WithdrawalRequest](../interfaces/WithdrawalRequest.md). If withdrawal request is an empty array, it will transfer the balance of the native token. Using a paymaster will ensure no dust remains in the smart account.

• **defaultRecipient?**: `null` \| \`0x$\{string\}\`

• **buildUseropDto?**: [`BuildUserOpOptions`](../type-aliases/BuildUserOpOptions.md)

Optional. [BuildUserOpOptions](../type-aliases/BuildUserOpOptions.md)

#### Returns

`Promise`\<[`UserOpResponse`](../type-aliases/UserOpResponse.md)\>

Promise<UserOpResponse> - An object containing the status of the transaction.

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient, NATIVE_TOKEN_ALIAS } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonMumbai } from "viem/chains";

const token = "0x747A4168DB14F57871fa8cda8B5455D8C2a8e90a";
const signer = createWalletClient({
  account,
  chain: polygonMumbai,
  transport: http(),
});

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl, biconomyPaymasterApiKey });

const { wait } = await smartAccount.withdraw(
 [
   { address: token }, // omit the amount to withdraw the full balance
   { address: NATIVE_TOKEN_ALIAS, amount: BigInt(1) }
 ],
 account.address, // Default recipient used if no recipient is present in the withdrawal request
 {
   paymasterServiceData: { mode: PaymasterMode.SPONSORED },
 }
);

// OR to withdraw all of the native token, leaving no dust in the smart account

const { wait } = await smartAccount.withdraw([], account.address, {
 paymasterServiceData: { mode: PaymasterMode.SPONSORED },
});

const { success } = await wait();
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:200

***

### create()

> `static` **create**(`biconomySmartAccountConfig`): `Promise`\<[`BiconomySmartAccountV2`](BiconomySmartAccountV2.md)\>

Creates a new instance of BiconomySmartAccountV2

This method will create a BiconomySmartAccountV2 instance but will not deploy the Smart Account
Deployment of the Smart Account will be donewith the first user operation.

- Docs: https://docs.biconomy.io/Account/integration#integration-1

#### Parameters

• **biconomySmartAccountConfig**: `BiconomySmartAccountV2Config`

Configuration for initializing the BiconomySmartAccountV2 instance BiconomySmartAccountV2Config.

#### Returns

`Promise`\<[`BiconomySmartAccountV2`](BiconomySmartAccountV2.md)\>

A promise that resolves to a new instance of BiconomySmartAccountV2.

#### Throws

An error if something is wrong with the smart account instance creation.

#### Example

```ts
import { createClient } from "viem"
import { createSmartAccountClient, BiconomySmartAccountV2 } from "@biconomy/account"
import { createWalletClient, http } from "viem";
import { polygonAmoy } from "viem/chains";

const signer = createWalletClient({
  account,
  chain: polygonAmoy,
  transport: http(),
});

const bundlerUrl = "" // Retrieve bundler url from dashboard

const smartAccountFromStaticCreate = await BiconomySmartAccountV2.create({ signer, bundlerUrl });

// Is the same as...

const smartAccount = await createSmartAccountClient({ signer, bundlerUrl });
```

#### Source

../node\_modules/@biconomy/account/dist/\_types/account/BiconomySmartAccountV2.d.ts:61
