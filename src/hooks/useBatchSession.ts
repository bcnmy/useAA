import { useBatchSessionAction } from "@/actions"
import { useSmartAccount } from "@/hooks"
import type { MutationOptionsWithoutMutationFn } from "@/hooks"

import { type BuildUserOpOptions, Options, mergeOptions, type Transaction } from "@/utils"
import { getChain, type GetSessionParams } from "@biconomy/account"
import { useMutation } from "@tanstack/react-query"
import type { Hex } from "viem"
import { useChainId } from "wagmi"

export type UseBatchSessionProps = {
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions
  /** The transactions to be batched. */
  transactions: Transaction | Transaction[]
  // The index of the leaf in the session tree to be used for the session.
  correspondingIndexes?: GetSessionParams["leafIndex"]
  /** The smart account address to be used for the session. */
  smartAccountAddress?: Hex
}
export type PostUseBatchSessionProps = UseBatchSessionProps & {
  chain: ReturnType<typeof getChain>
  bundlerUrl: string
  biconomyPaymasterApiKey: string
}
/**

@description Uses a previously created batch session (see: https://bcnmy.github.io/useAA/functions/useCreateBatchSession.html) which batches transactions in the context of a users smart account.

Mutation function args: {@link UseBatchSessionProps}

@example

```tsx
import { useBatchSession, useUserOpWait, Options } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const UseBatchSession = ({ smartAccountAddress }) => {

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useBatchSession();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  const nftMintTx: Transaction = {
    to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
    data: encodeFunctionData({
      abi: parseAbi(["function safeMint(address _to)"]),
      functionName: "safeMint",
      args: [smartAccountAddress],
    }),
  };

  const txTwice = () =>
    mutate({
      transactions: [nftMintTx, nftMintTx],
      correspondingIndexes: [0, 1],
      options: Options.Sponsored
    });
    
  useEffect(() => {
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Use Session to Mint Twice"
        onClickFunc={txTwice}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};
```
*/
export const useBatchSession = (
  mutationArgs?: MutationOptionsWithoutMutationFn
) => {
  const { queryClient, bundlerUrl, biconomyPaymasterApiKey, smartAccountAddress: connectedSmartAccount } =
    useSmartAccount()
  const chainId = useChainId()

  const useBatchSessionMutation = useMutation(
    {
      mutationFn: (_params: UseBatchSessionProps) => {
        const options = mergeOptions([_params.options, Options.getNowNonce()])
        const chain = getChain(chainId)
        const params: PostUseBatchSessionProps = {
          bundlerUrl,
          biconomyPaymasterApiKey: biconomyPaymasterApiKey,
          smartAccountAddress: _params.smartAccountAddress ?? connectedSmartAccount,
          chain,
          ..._params,
          options
        }

        return useBatchSessionAction(params)
      },
      ...mutationArgs
    },
    queryClient
  )

  return useBatchSessionMutation
}
