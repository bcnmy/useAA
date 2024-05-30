import { PaymasterMode } from "@biconomy/account";

export type HookArgs = {
  wait: boolean;
};

export type WithdrawHookArgs = {
  wait: boolean;
  paymasterMode: PaymasterMode;
};
