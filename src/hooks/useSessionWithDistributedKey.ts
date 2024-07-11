import { useSessionWithDistributedKeyAction } from "@/actions"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"
import {
  type BuildUserOpOptions,
  type GetSessionParams,
  type Transaction,
  getChain
} from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import type { Hex } from "viem"
import { useChainId } from "wagmi"

export type UseSessionWithDistributedKeyProps = {
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
  transactions: Transaction | Transaction[]
  /** The smart account address to be used for the session. */
  smartAccountAddress?: Hex
  // The index of the leaf in the session tree to be used for the session.
  correspondingIndex?: GetSessionParams["leafIndex"]
}
export type PostUseSessionWithDistributedKeyProps = UseSessionWithDistributedKeyProps & {
  chain: ReturnType<typeof getChain>
  bundlerUrl: string
  biconomyPaymasterApiKey: string
}
/**

@description Uses a previously created session (see: https://bcnmy.github.io/useAA/functions/useCreateSession.html) which sends transactions in the context of a users smart account.

Mutation function args: {@link UseSessionWithDistributedKeyProps}

@example

```tsx
import { useSessionWithDistributedKey, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const UseSessionWithDistributedKey = ({ smartAccountAddress }) => {

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useSessionWithDistributedKey();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  const mintTx = () =>
    mutate({
      transactions: {
        to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
        data: encodeFunctionData({
          abi: parseAbi(["function safeMint(address _to)"]),
          functionName: "safeMint",
          args: [smartAccountAddress],
        }),
      },
      options: Options.Sponsored,
      smartAccountAddress
    });
    
  useEffect(() => {
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Use Session to Mint"
        onClickFunc={mintTx}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};
```
*/
export const useSessionWithDistributedKey = (mutationProps?: MutationOptionsWithoutMutationFn) => {
  const { queryClient, bundlerUrl, biconomyPaymasterApiKey, smartAccountAddress: connectedSmartAccount } =
    useSmartAccount()
  const chainId = useChainId()

  const useSessionWithDistributedKeyMutation = useMutation(
    {
      mutationFn: (_params: UseSessionWithDistributedKeyProps) => {
        const chain = getChain(chainId)
        const params: PostUseSessionWithDistributedKeyProps = {
          bundlerUrl,
          biconomyPaymasterApiKey,
          smartAccountAddress: _params.smartAccountAddress ?? connectedSmartAccount,
          chain,
          ..._params
        }

        return useSessionWithDistributedKeyAction(params)
      },
      ...mutationProps
    },
    queryClient
  )

  return useSessionWithDistributedKeyMutation
}
