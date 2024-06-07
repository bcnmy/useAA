[**@biconomy/use-aa**](../README.md) • **Docs**

***

[@biconomy/use-aa](../globals.md) / BiconomyProvider

# Function: BiconomyProvider()

> **BiconomyProvider**(`props`): `Element`

## Parameters

• **props**: [`BiconomyProviderProps`](../type-aliases/BiconomyProviderProps.md)

## Returns

`Element`

## Description

The `BiconomyProvider` component in TypeScript React sets up a context provider for managing BiconomySmartAccountV2 related state and functionality.

## Example

```tsx
import { BiconomyProvider } from "@biconomy/use-aa";
import { createConfig, http, WagmiProvider } from "wagmi";
import { polygonAmoy } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { bundlerUrl, paymasterApiKey } from "./config";

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
            paymasterApiKey,
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

## Source

[providers/BiconomyProvider.tsx:81](https://github.com/bcnmy/useAA/blob/main/src/providers/BiconomyProvider.tsx#L81)
