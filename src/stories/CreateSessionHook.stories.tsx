import { PaymasterMode } from "@biconomy/account";
import { CreateSession } from "@/stories/components/CreateSession";

export default {
  title: "CreateSession",
  component: CreateSession,
};

export const CreateSessionHook = () => {
  return <CreateSession />;
};

CreateSessionHook.args = {
  wait: false,
  paymasterMode: PaymasterMode.SPONSORED,
};
