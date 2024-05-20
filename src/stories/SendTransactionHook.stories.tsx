import {
  SendSponsoredTransaction,
  SendTransaction,
} from "@/stories/components/SendTransaction";
import { DeploySmartAccount } from "@/stories/components/DeploySmartAccount";
import { HookArgs } from "@/stories/utils/types";

export default {
  title: "React Hooks",
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

export const DeploySmartAccountHook = (args: HookArgs) => {
  return <DeploySmartAccount {...args} />;
};

DeploySmartAccountHook.args = {
  wait: false,
};
