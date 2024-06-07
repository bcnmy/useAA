import { CreateBatchSession } from "@/stories/components/CreateBatchSession"
import { CreateSession } from "./components/CreateSession"
import { UseBatchSession } from "./components/UseBatchSession"
import { UseSession } from "./components/UseSession"
import type { HookProps } from "./utils/types"

export default {
  title: "Sessions",
  component: CreateSession
}

export const CreateSessionHook = (params: HookProps) => {
  return <CreateSession {...params} />
}

CreateSessionHook.args = {
  wait: true
}

export const UseSessionHook = (params: HookProps) => {
  return <UseSession {...params} />
}

UseSessionHook.args = {
  wait: true
}

export const CreateBatchSessionHook = (params: HookProps) => {
  return <CreateBatchSession {...params} />
}

CreateBatchSessionHook.args = {
  wait: true
}

export const UseBatchSessionHook = (params: HookProps) => {
  return <UseBatchSession {...params} />
}

UseBatchSessionHook.args = {
  wait: true
}
