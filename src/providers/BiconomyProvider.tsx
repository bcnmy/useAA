import { useMemo, useEffect, useState, createContext, ReactNode } from "react";
import { useWalletClient } from "wagmi";
import { QueryClient } from "@tanstack/react-query";
import {
  Hex,
  SupportedSigner,
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
  smartAccountAddress: Hex;
  bundlerUrl: string, 
  paymasterApiKey: string;
};

export const BiconomyContext = createContext<BiconomyContextProps>({
  smartAccountClient: null,
  queryClient: undefined,
  smartAccountAddress: "0x",
  bundlerUrl:"",
  paymasterApiKey: ""
});

export const BiconomyProvider = (props: BiconomyProviderProps) => {
  const { children, config, queryClient } = props;
  const { bundlerUrl, paymasterApiKey } = config;
  const [smartAccountClient, setSmartAccountClient] =
    useState<BiconomySmartAccountV2 | null>(null);
    const [smartAccountAddress, setSmartAccountAddress] = useState<Hex>("0x");
  const { data: signer } = useWalletClient();

  useEffect(() => {
    const createSmartAccount = async () => {
      if (!smartAccountClient) {
        const smartAccount = await createSmartAccountClient({
          signer: signer as SupportedSigner,
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey,
        });
        setSmartAccountClient(smartAccount);
        setSmartAccountAddress(await smartAccount.getAccountAddress());
      }
    };

    createSmartAccount();
  }, [signer, bundlerUrl, paymasterApiKey, smartAccountClient]);

  const value = useMemo(
    () => ({ smartAccountClient, queryClient, smartAccountAddress, bundlerUrl, paymasterApiKey }),
    [smartAccountClient, queryClient, smartAccountAddress, bundlerUrl, paymasterApiKey]
  );

  return (
    <BiconomyContext.Provider value={value}>
      {children}
    </BiconomyContext.Provider>
  );
};
