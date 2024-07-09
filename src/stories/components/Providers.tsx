import { BiconomyProvider } from "@/providers"
import { biConfig, wagmiConfig } from "@/stories/utils/config"
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import "@rainbow-me/rainbowkit/styles.css"
import type { ReactNode } from "react"

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
         <ConnectButton />
          <BiconomyProvider config={biConfig} queryClient={queryClient}>
            {children}
          </BiconomyProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export const providerHoc = ({ children }: { children: ReactNode }) => {
  return <Providers>{children}</Providers>
}
