import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiConfig, biConfig } from "@/stories/utils/config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { BiconomyProvider } from "@/providers";
import "@rainbow-me/rainbowkit/styles.css";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider>
					<BiconomyProvider config={biConfig} queryClient={queryClient}>
						{children}
					</BiconomyProvider>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
};

export const providerHoc = ({ children }: { children: ReactNode }) => {
	return <Providers>{children}</Providers>;
};
