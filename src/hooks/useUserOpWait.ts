import { useSmartAccount } from "@/hooks"
import type { UserOpReceipt, UserOpResponse } from "@biconomy-devx/account"
import {
  type QueryKey,
  type UseQueryOptions,
  useQuery
} from "@tanstack/react-query"
import type { UseQueryParameters } from "wagmi/query"

export type UseUserOpProps = UserOpResponse | undefined
/**

@description This function will wait for the userOp to be mined and return the receipt

Query params: {@link UseUserOpProps}

@example

```tsx

import { useSendTransaction, useUserOpWait, useSmartAccount } from "@biconomy/useAA"
import { polygonAmoy } from "viem/chains"
import { encodeFunctionData, parseAbi } from "wagmi"

export const SendTx = () => {

  const { smartAccountAddress } = useSmartAccount();

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useSendTransaction();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  useEffect(() => {
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);


  const mintNftTx = () => mutate({
    transactions: {
      to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
      data: encodeFunctionData({
        abi: parseAbi(["function safeMint(address _to)"]),
        functionName: "safeMint",
        args: [smartAccountAddress],
      }),
    }
  });

  return (
    <ErrorGuard errors={[error, waitError]}>
      <Button
        title="Mint NFT"
        onClickFunc={mintNftTx}
        isLoading={isPending || waitIsLoading}
      />
    </ErrorGuard>
  );
};

```
*/
export const useUserOpWait = (
  userOpResponse: UseUserOpProps,
  queryParams?: UseQueryParameters
) => {
  const { smartAccountClient, queryClient } = useSmartAccount()
  return useQuery(
    {
      queryKey: ["userOpResponse", userOpResponse?.userOpHash],
      queryFn: async () => {
        if (!smartAccountClient) {
          throw new Error("No smart account found")
        }
        if (!userOpResponse?.userOpHash) {
          throw new Error("UserOp not yet submitted")
        }
        return await userOpResponse.wait()
      },
      enabled: !!userOpResponse?.userOpHash,
      ...queryParams
    } as UseQueryOptions<UserOpReceipt, Error, UserOpReceipt, QueryKey>,
    queryClient
  )
}
