import {
  type BiconomySmartAccountV2,
  type Hex,
  type SupportedSigner,
  createSmartAccountClient,
  type BiconomySmartAccountV2Config,
} from "@biconomy/account";
import { useQuery, type QueryClient } from "@tanstack/react-query";
import { type ReactNode, createContext, useMemo } from "react";
import { useWalletClient } from "wagmi";

export type { BiconomySmartAccountV2 } from "@biconomy/account";

export type BiconomyProviderProps = {
  /** The children of the provider */
  children: ReactNode;
  /** The Biconomy configuration */
  config: Partial<BiconomySmartAccountV2Config> & {
    bundlerUrl: string;
    biconomyPaymasterApiKey: string;
  };
  /** The Tanstack Query client instance */
  queryClient: QueryClient | undefined;
};

export type BiconomyContextPayload = {
  /** The BiconomySmartAccountV2 instance. This can be used to 'drop down' to the core SDK */
  smartAccountClient: BiconomySmartAccountV2 | null;
  /** The Tanstack Query client instance */
  queryClient: QueryClient | undefined;
  /** The address of the smart account for the user */
  smartAccountAddress: Hex;
  /** The URL of the Biconomy bundler. This can be retrieved from the Biconomy dashboard: https://dashboard.biconomy.io */
  bundlerUrl: string;
  /** The paymaster API key. This can be retrieved from the Biconomy dashboard: https://dashboard.biconomy.io */
  biconomyPaymasterApiKey: string;
  /** A boolean indicating whether the smart account is loading */
  smartAccountIsLoading: boolean;
};

/** @ignore */
export const BiconomyContext = createContext<BiconomyContextPayload>({
  smartAccountClient: null,
  queryClient: undefined,
  smartAccountAddress: "0x",
  bundlerUrl: "",
  biconomyPaymasterApiKey: "",
  smartAccountIsLoading: false,
});

/**

@description The `BiconomyProvider` component in TypeScript React sets up a context provider for managing BiconomySmartAccountV2 related state and functionality.

@example

```tsx
import { BiconomyProvider } from "@biconomy/use-aa";
import { createConfig, http, WagmiProvider } from "wagmi";
import { polygonAmoy } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { bundlerUrl, biconomyPaymasterApiKey } from "./config";

const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  transports: { [polygonAmoy.id]: http() },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document?.getElementById("root")!).render(
  <StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <BiconomyProvider
          config={{
            biconomyPaymasterApiKey,
            bundlerUrl,
          }}
          queryClient={queryClient}
        >
          <App />
        </BiconomyProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
*/
export const BiconomyProvider = (props: BiconomyProviderProps) => {
  const { children, config, queryClient } = props;
  const { bundlerUrl, biconomyPaymasterApiKey } = config;
  const { data: signer } = useWalletClient();

  const { data, isLoading: smartAccountIsLoading } = useQuery({
    queryKey: ["smart-account-address", signer?.account.address],
    queryFn: async () => {
      if (signer) {
        const smartAccount = await createSmartAccountClient({
          signer: signer as SupportedSigner,
          bundlerUrl,
          biconomyPaymasterApiKey,
        });
        const smartAccountAddress = await smartAccount.getAccountAddress();
        return {
          smartAccount,
          smartAccountAddress,
        };
      }
      return {};
    },
  });

  const smartAccountClient = data?.smartAccount ?? null;
  const smartAccountAddress = data?.smartAccountAddress ?? "0x";

  const value = useMemo(
    () => ({
      smartAccountClient,
      queryClient,
      smartAccountAddress,
      bundlerUrl,
      biconomyPaymasterApiKey,
      smartAccountIsLoading,
    }),
    [
      smartAccountClient,
      queryClient,
      smartAccountAddress,
      bundlerUrl,
      biconomyPaymasterApiKey,
      smartAccountIsLoading,
    ]
  );

  return (
    <BiconomyContext.Provider value={value}>
      {children}
    </BiconomyContext.Provider>
  );
};
