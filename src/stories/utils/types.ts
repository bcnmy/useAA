import type { PaymasterMode } from "@biconomy/account"

export type HookProps = {
  wait: boolean
}

export type TransactionsBuildUseropDtoHookProps = {
  paymasterMode: PaymasterMode
  to: string
  value: number
};
