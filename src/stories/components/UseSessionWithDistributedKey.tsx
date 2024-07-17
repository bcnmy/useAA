import { useSessionWithDistributedKey, useSmartAccount, useUserOpWait } from "@/hooks"
import { Providers } from "@/stories/components/Providers"
import { Options } from "@/utils"
import React from "react"
import { encodeFunctionData, parseAbi } from "viem"
import type { HookProps } from "../utils/types"
import { ErrorGuard } from "./ErrorGuard"

export type PreUseUseSessionWithDistributedKeyProps = {
  chainId: number
}

export const nftAddress = "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e"
export const safeMint = parseAbi([
  "function safeMint(address owner) view returns (uint balance)"
])

const UseSessionWithDistributedKeyComponent = ({ wait }: HookProps) => {
  const { mutate, isPending, isError, error, isSuccess, data: userOpResponse } = useSessionWithDistributedKey()
  const { smartAccountAddress } = useSmartAccount()

  const {
    isLoading: waitIsLoading,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  const isLoading = isPending || waitIsLoading

  const handleUseSessionWithDistributedKey = () => {
    const transactions = {
      to: nftAddress,
      data: encodeFunctionData({
        abi: safeMint,
        functionName: "safeMint",
        args: [smartAccountAddress]
      })
    }

    mutate({
      options: Options.Sponsored,
      transactions
    })
  }

  return (
    <ErrorGuard errors={[error, waitError]}>
      <button type="button" onClick={handleUseSessionWithDistributedKey} disabled={isLoading}>
        {isLoading ? "Using a Distributed Session..." : "Use a Distributed Session"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Success!</span>}
      {waitData?.receipt?.transactionHash && <span>Transaction hash: {waitData?.receipt?.transactionHash}</span>}
    </ErrorGuard>
  )
}

export const UseSessionWithDistributedKey = (params: HookProps) => {
  return (
    <Providers>
      <UseSessionWithDistributedKeyComponent {...params} />
    </Providers>
  )
}
