import {
  SendSponsoredTransaction,
  SendTransaction,
} from "@/stories/components/SendTransaction";
import { HookArgs } from "@/stories/utils/types";

export default {
  title: "Send Transaction",
  component: SendTransaction,
};

export const SendTransactionHook = (args: HookArgs) => {
  return <SendTransaction {...args} />;
};

SendTransactionHook.args = {
  wait: false,
};

export const SendSponsoredTransactionHook = () => {
  return <SendSponsoredTransaction />;
};
