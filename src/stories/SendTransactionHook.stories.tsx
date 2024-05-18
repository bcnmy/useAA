import {
  SendSponsoredTransaction,
  SendTransaction,
} from "@/stories/components/SendTransaction";
import { DeploySmartAccount } from "@/stories/components/DeploySmartAccount";

export default {
  title: "React Hooks",
  component: SendTransaction,
};

export const SendTransactionHook = () => {
  return <SendTransaction />;
};

export const SendSponsoredTransactionHook = () => {
  return <SendSponsoredTransaction />;
};

export const DeploySmartAccountHook = () => {
  return <DeploySmartAccount />;
};
