import {
  type BiconomySmartAccountV2,
  type Hex,
  type SupportedSigner,
  createSmartAccountClient
} from "@biconomy/account"
import type { QueryClient } from "@tanstack/react-query"
import {
  type ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState
} from "react"
import { useWalletClient } from "wagmi"

export type BiconomyProviderProps = {
  children: ReactNode
  config: { bundlerUrl: string; paymasterApiKey: string }
  queryClient: QueryClient | undefined
}

export type BiconomyContextProps = {
  smartAccountClient: BiconomySmartAccountV2 | null
  queryClient: QueryClient | undefined
  smartAccountAddress: Hex
  bundlerUrl: string
  paymasterApiKey: string
}

export const BiconomyContext = createContext<BiconomyContextProps>({
  smartAccountClient: null,
  queryClient: undefined,
  smartAccountAddress: "0x",
  bundlerUrl: "",
  paymasterApiKey: ""
})

export const BiconomyProvider = (props: BiconomyProviderProps) => {
  const { children, config, queryClient } = props
  const { bundlerUrl, paymasterApiKey } = config
  const [smartAccountClient, setSmartAccountClient] =
    useState<BiconomySmartAccountV2 | null>(null)
  const [smartAccountAddress, setSmartAccountAddress] = useState<Hex>("0x")
  const { data: signer } = useWalletClient()
  const switchAccount =
    smartAccountClient?.biconomySmartAccountConfig?.signer?.inner?.account
      ?.address !== signer?.account?.address

  useEffect(() => {
    const createSmartAccount = async () => {
      if (!smartAccountClient || switchAccount) {
        const smartAccount = await createSmartAccountClient({
          signer: signer as SupportedSigner,
          bundlerUrl,
          biconomyPaymasterApiKey: paymasterApiKey
        })
        setSmartAccountClient(smartAccount)
        setSmartAccountAddress(await smartAccount.getAccountAddress())
      }
    }

    createSmartAccount()
  }, [signer, bundlerUrl, paymasterApiKey, smartAccountClient, switchAccount])

  const value = useMemo(
    () => ({
      smartAccountClient,
      queryClient,
      smartAccountAddress,
      bundlerUrl,
      paymasterApiKey
    }),
    [
      smartAccountClient,
      queryClient,
      smartAccountAddress,
      bundlerUrl,
      paymasterApiKey
    ]
  )

  return (
    <BiconomyContext.Provider value={value}>
      {children}
    </BiconomyContext.Provider>
  )
}
