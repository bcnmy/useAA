import { TokenFees } from "@/stories/components/TokenFees"
import type { TokenFeesHookProps } from "@/stories/utils/types"
import { PaymasterMode } from "@biconomy/account"

export default {
  title: "TokenFees",
  component: TokenFees,
  argTypes: {
    paymasterMode: {
      control: "radio",
      options: [PaymasterMode.SPONSORED, PaymasterMode.ERC20]
    },
    to: {
      type: "string"
    },
    value: {
      type: "number"
    }
  }
}

export const TokenFeesHook = (args: TokenFeesHookProps) => {
  return <TokenFees {...args} />
}

TokenFeesHook.args = {
  paymasterMode: PaymasterMode.ERC20,
  to: "0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC",
  value: 1
}
