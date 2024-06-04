import { CreateBatchSession } from "@/stories/components/CreateBatchSession";
import { UseSession } from "./components/UseSession";
import { UseBatchSession } from "./components/UseBatchSession";
import { CreateSession } from "./components/CreateSession";
import { HookArgs } from "./utils/types";

export default {
  title: "Sessions",
  component: CreateSession,
};

export const CreateSessionHook = (params: HookArgs) => {
  return <CreateSession {...params}/>;
};

CreateSessionHook.args = {
  wait: true,
};

export const UseSessionHook = (params: HookArgs) => {
  return <UseSession {...params}/>;
};

UseSessionHook.args = {
  wait: true,
};

export const CreateBatchSessionHook = (params: HookArgs) => {
  return <CreateBatchSession {...params}/>;
};

CreateBatchSessionHook.args = {
  wait: true,
};

export const UseBatchSessionHook = (params: HookArgs) => {
  return <UseBatchSession {...params}/>;
};

UseBatchSessionHook.args = {
  wait: true,
};

