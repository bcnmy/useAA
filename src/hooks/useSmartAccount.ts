import { useAA } from "../providers/UseAAProvider";

export const useSmartAccount = () => {
  const { smartAccountClient } = useAA();
  return smartAccountClient;
};
