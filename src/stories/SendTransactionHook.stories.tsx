import {
  SendSponsoredTransaction,
  SendTransaction,
} from "@/stories/components/SendTransaction";

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
