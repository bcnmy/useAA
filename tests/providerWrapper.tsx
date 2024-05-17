import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UseAAProvider from "@/providers/UseAAProvider";
import { ReactNode } from "react";
import { http, createConfig, WagmiProvider } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { createWalletClient } from "viem";
import { config } from "dotenv";
import { privateKeyToAccount } from "viem/accounts";
config();

const BUNDLER_URL = process.env.BUNDLER_URL as string;
const PAYMASTER_KEY = process.env.PAYMASTER_KEY as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

export const wagmiConfig = createConfig({
  chains: [polygonMumbai],
  transports: {
    [polygonMumbai.id]: http(),
  },
});

const queryClient = new QueryClient();

export const providerWrapper = ({ children }: { children: ReactNode }) => {
  const walletClient = createWalletClient({
    account: privateKeyToAccount(`0x${PRIVATE_KEY}`),
    chain: polygonMumbai,
    transport: http(),
  });

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <UseAAProvider
          walletClient={walletClient}
          bundlerUrl={BUNDLER_URL}
          paymasterApiKey={PAYMASTER_KEY}
        >
          {children}
        </UseAAProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
