import type { PaymasterMode } from "@biconomy-devx/account"

export type HookProps = {
  wait: boolean
}

export type TransactionsBuildUseropDtoHookProps = {
  paymasterMode: PaymasterMode
  to: string
  value: number
};
