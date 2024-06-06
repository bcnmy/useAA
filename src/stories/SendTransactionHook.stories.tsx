import {
  SendGasTokenTransaction,
  SendSponsoredTransaction,
  SendTransaction
} from "@/stories/components/SendTransaction"
import type { HookArgs } from "@/stories/utils/types"

export default {
  title: "Send Transaction",
  component: SendTransaction
}

export const SendTransactionHook = (args: HookArgs) => {
  return <SendTransaction {...args} />
}

SendTransactionHook.args = {
  wait: true
}

export const SendSponsoredTransactionHook = (params: HookArgs) => {
  return <SendSponsoredTransaction {...params} />
}

export const SendGasTokenTransactionHook = (params: HookArgs) => {
  return <SendGasTokenTransaction {...params} />
}
