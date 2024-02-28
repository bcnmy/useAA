import {
	BiconomySmartAccountV2,
	SupportedSigner,
	createSmartAccountClient,
} from "@biconomy/account";
import React, { createContext, useContext, useEffect, useState } from "react";
import { WalletClient } from "viem";

export interface UseAAContextType {
	smartAccountClient: BiconomySmartAccountV2 | null;
}

export const UseAAContext = createContext<UseAAContextType>({
	smartAccountClient: null,
});

export interface UseAAContextProviderProps {
	children: React.ReactNode;
	bundlerUrl: string;
	walletClient: WalletClient;
	paymasterApiKey?: string;
}

export default function UseAAProvider({
	children,
	walletClient,
	bundlerUrl,
	paymasterApiKey,
}: UseAAContextProviderProps) {
	const [smartAccountClient, setSmartAccount] = useState<BiconomySmartAccountV2 | null>(null);

	useEffect(() => {
		(async () => {
			if (!smartAccountClient) {
				const smartAccount = await createSmartAccountClient({
					signer: walletClient as SupportedSigner,
					bundlerUrl,
					biconomyPaymasterApiKey: paymasterApiKey,
				});
				setSmartAccount(smartAccount);
			}
		})();
	}, [walletClient, bundlerUrl, paymasterApiKey]);

	return (
		<UseAAContext.Provider value={{ smartAccountClient }}>
			{children}
		</UseAAContext.Provider>
	);
}

export function useAA() {
	return useContext(UseAAContext);
}
