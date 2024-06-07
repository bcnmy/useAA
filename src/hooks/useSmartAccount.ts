import { BiconomyContext } from "@/providers/BiconomyProvider"
import { useContext } from "react"

/**
 * @description This function will retreive a smart account and associated information from the BiconomyProvider for custom use.
*/
export const useSmartAccount = () => {
  const context = useContext(BiconomyContext)

  if (context === undefined) {
    throw new Error("Hooks must be used within a SmartAccountProvider")
  }

  return context
}
