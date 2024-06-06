import { PaymasterMode } from "@biconomy/account";
import { Withdraw } from "@/stories/components/Withdraw";
import { HookArgs } from "@/stories/utils/types";

export default {
  title: "Withdraw",
  component: Withdraw,
};

export const WithdrawHook = (args: HookArgs) => {
  return <Withdraw {...args} />;
};

WithdrawHook.args = {
  wait: true,
  paymasterMode: PaymasterMode.SPONSORED,
};
