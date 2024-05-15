import { useMemo, useEffect, useState, createContext, ReactNode } from "react";
import { useWalletClient } from "wagmi";
import { QueryClient } from "@tanstack/react-query";
import {
  type SupportedSigner,
  createSmartAccountClient,
  type BiconomySmartAccountV2,
} from "@biconomy/account";

type BiconomyProviderProps = {
  children: ReactNode;
  config: { bundlerUrl: string; paymasterApiKey: string };
  queryClient: QueryClient | undefined;
};

type BiconomyContextProps = {
  smartAccountClient: BiconomySmartAccountV2 | null;
  queryClient: QueryClient | undefined;
};

export const BiconomyContext = createContext<BiconomyContextProps>({
  smartAccountClient: null,
  queryClient: undefined,
});

export const BiconomyProvider = (props: BiconomyProviderProps) => {
  const { children, config, queryClient } = props;
  const { bundlerUrl, paymasterApiKey } = config;
  const [smartAccountClient, setSmartAccountClient] =
    useState<BiconomySmartAccountV2 | null>(null);
  const { data: walletClient } = useWalletClient();

  useEffect(() => {
    const createSmartAccount = async () => {
      if (!smartAccountClient) {
        const smartAccount = await createSmartAccountClient({
          signer: walletClient as SupportedSigner,
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey,
        });
        setSmartAccountClient(smartAccount);
      }
    };

    createSmartAccount();
  }, [walletClient, bundlerUrl, paymasterApiKey]);

  const value = useMemo(
    () => ({ smartAccountClient, queryClient }),
    [smartAccountClient, queryClient]
  );

  return (
    <BiconomyContext.Provider value={value}>
      {children}
    </BiconomyContext.Provider>
  );
};
