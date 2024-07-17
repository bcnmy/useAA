import { Withdraw } from "@/stories/components/Withdraw"
import type { HookProps } from "@/stories/utils/types"
import { PaymasterMode } from "@biconomy-devx/account"

export default {
  title: "Withdraw",
  component: Withdraw
}

export const WithdrawHook = (args: HookProps) => {
  return <Withdraw {...args} />
}

WithdrawHook.args = {
  wait: true,
  paymasterMode: PaymasterMode.SPONSORED
}
