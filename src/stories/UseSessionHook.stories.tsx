import { PaymasterMode } from "@biconomy/account";
import { UseSession } from "@/stories/components/UseSession";

export default {
  title: "UseSession",
  component: UseSession,
};

export const UseSessionHook = () => {
  return <UseSession />;
};

UseSessionHook.args = {
  wait: false,
  paymasterMode: PaymasterMode.SPONSORED,
};
