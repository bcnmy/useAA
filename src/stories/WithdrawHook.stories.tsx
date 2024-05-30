import { PaymasterMode } from "@biconomy/account";
import { Withdraw } from "@/stories/components/Withdraw";
import { WithdrawHookArgs } from "@/stories/utils/types";

export default {
  title: "Withdraw",
  component: Withdraw,
  argTypes: {
    paymasterMode: {
      control: "radio",
      options: [PaymasterMode.SPONSORED, PaymasterMode.ERC20],
    },
  },
};

export const WithdrawHook = (args: WithdrawHookArgs) => {
  return <Withdraw {...args} />;
};

WithdrawHook.args = {
  wait: false,
  paymasterMode: PaymasterMode.SPONSORED,
};
