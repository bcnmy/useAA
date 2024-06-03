import { useMemo, useEffect, useState, createContext, ReactNode } from "react";
import { useWalletClient } from "wagmi";
import { QueryClient } from "@tanstack/react-query";
import {
  SupportedSigner,
  createSmartAccountClient,
  type BiconomySmartAccountV2,
} from "@biconomy/account";
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { polygonAmoy } from "viem/chains";

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
  const { data: signer } = useWalletClient();
  const switchAccount =
    smartAccountClient?.biconomySmartAccountConfig?.signer?.inner?.account
      ?.address !== signer?.account?.address;

  // TODO: Use this for unit tests:

  // const signer = createWalletClient({
  //   account: privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`),
  //   chain: polygonAmoy,
  //   transport: http(),
  // });

  useEffect(() => {
    const createSmartAccount = async () => {
      if (!smartAccountClient || switchAccount) {
        const smartAccount = await createSmartAccountClient({
          signer: signer as SupportedSigner,
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey,
        });
        setSmartAccountClient(smartAccount);
      }
    };

    createSmartAccount();
  }, [signer, bundlerUrl, paymasterApiKey, smartAccountClient, switchAccount]);

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
