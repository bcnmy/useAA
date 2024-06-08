import { useSession, useSmartAccount } from "@/hooks"
import { Providers } from "@/stories/components/Providers"
import { Options } from "@/utils"
import React from "react"
import { encodeFunctionData, parseAbi } from "viem"
import type { HookProps } from "../utils/types"

export type PreUseUseSessionProps = {
  chainId: number
}

export const nftAddress = "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e"
export const safeMint = parseAbi([
  "function safeMint(address owner) view returns (uint balance)"
])

const UseSessionComponent = ({ wait }: HookProps) => {
  const { mutate, isPending, isError, error, isSuccess, data } = useSession()
  const [txHash, setTxHash] = React.useState("")
  const { smartAccountAddress } = useSmartAccount()

  const handleUseSession = () => {
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

  React.useEffect(() => {
    const waitAction = async () => {
      if (data) {
        const {
          receipt: { transactionHash }
        } = await data.wait()
        setTxHash(transactionHash)
      }
    }
    if (wait) {
      waitAction()
    }
  }, [data, wait])

  return (
    <div>
      <button type="button" onClick={handleUseSession} disabled={isPending}>
        {isPending ? "Creating a Session..." : "Use a Session"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Success!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}
    </div>
  )
}

export const UseSession = (params: HookProps) => {
  return (
    <Providers>
      <UseSessionComponent {...params} />
    </Providers>
  )
}
