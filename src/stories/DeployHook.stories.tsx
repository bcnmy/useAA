import { DeploySmartAccount } from "@/stories/components/DeploySmartAccount";
import { HookArgs } from "@/stories/utils/types";

export default {
  title: "Deploy",
  component: DeploySmartAccount,
};

export const DeployHook = (args: HookArgs) => {
  return <DeploySmartAccount {...args} />;
};

DeployHook.args = {
  wait: true,
};
