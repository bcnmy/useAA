import { DeploySmartAccount } from "@/stories/components/DeploySmartAccount"
import type { HookProps } from "@/stories/utils/types"

export default {
  title: "Deploy",
  component: DeploySmartAccount
}

export const DeployHook = (args: HookProps) => {
  return <DeploySmartAccount {...args} />
}

DeployHook.args = {
  wait: true
}
