import { Withdraw } from "@/stories/components/Withdraw"
import type { HookArgs } from "@/stories/utils/types"
import { PaymasterMode } from "@biconomy/account"

export default {
  title: "Withdraw",
  component: Withdraw
}

export const WithdrawHook = (args: HookArgs) => {
  return <Withdraw {...args} />
}

WithdrawHook.args = {
  wait: true,
  paymasterMode: PaymasterMode.SPONSORED
}
