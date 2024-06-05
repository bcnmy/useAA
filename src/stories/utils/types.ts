import { PaymasterMode } from "@biconomy/account";

export type HookArgs = {
  wait: boolean;
};

export type TokenFeesHookArgs = {
  paymasterMode: PaymasterMode;
  to: string;
  value: number;
};
