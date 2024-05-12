export const biConfig = {
  bundlerUrl: process.env.BUNDLER_URL as string,
  paymasterApiKey: process.env.PAYMASTER_API_KEY as string,
};

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
  polygonMumbai,
  lineaTestnet,
  polygonAmoy,
} from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "biconomy-react-hooks",
  projectId: process.env.PROJECT_ID as string,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
    polygonMumbai,
    lineaTestnet,
    polygonAmoy,
  ],
});
