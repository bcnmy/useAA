import { GasEstimate } from "@/stories/components/GasEstimate";
import type { TransactionsBuildUseropDtoHookProps } from "@/stories/utils/types";
import { PaymasterMode } from "@biconomy/account";

export default {
  title: "GasEstimate",
  component: GasEstimate,
  argTypes: {
    paymasterMode: {
      control: "radio",
      options: [PaymasterMode.SPONSORED, PaymasterMode.ERC20],
    },
    to: {
      type: "string",
    },
    value: {
      type: "number",
    },
  },
};

export const GasEstimateHook = (args: TransactionsBuildUseropDtoHookProps) => {
  return <GasEstimate {...args} />;
};

GasEstimateHook.args = {
  paymasterMode: PaymasterMode.SPONSORED,
  to: "0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC",
  value: 1,
};
