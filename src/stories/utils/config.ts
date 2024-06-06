import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { polygonAmoy } from "wagmi/chains"

export const biConfig = {
  bundlerUrl: process.env.BUNDLER_URL as string,
  paymasterApiKey: process.env.PAYMASTER_KEY as string
}

export const wagmiConfig = getDefaultConfig({
  appName: "biconomy-react-hooks",
  projectId: process.env.PROJECT_ID as string,
  chains: [polygonAmoy]
})
