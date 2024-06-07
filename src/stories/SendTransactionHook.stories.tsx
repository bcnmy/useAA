import {
  SendGasTokenTransaction,
  SendSponsoredTransaction,
  SendTransaction
} from "@/stories/components/SendTransaction"
import type { HookProps } from "@/stories/utils/types"

export default {
  title: "Send Transaction",
  component: SendTransaction
}

export const SendTransactionHook = (args: HookProps) => {
  return <SendTransaction {...args} />
}

SendTransactionHook.args = {
  wait: true
}

export const SendSponsoredTransactionHook = (params: HookProps) => {
  return <SendSponsoredTransaction {...params} />
}

export const SendGasTokenTransactionHook = (params: HookProps) => {
  return <SendGasTokenTransaction {...params} />
}
