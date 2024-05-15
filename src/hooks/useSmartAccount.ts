import { useContext } from "react";
import { BiconomyContext } from "../providers/BiconomyProvider";

export const useSmartAccount = () => {
  const context = useContext(BiconomyContext);

  if (context === undefined) {
    throw new Error("Hooks must be used within a SmartAccountProvider");
  }

  return context;
};
