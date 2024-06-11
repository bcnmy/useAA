import { useTokenFees } from "@/hooks"
import { Providers } from "@/stories/components/Providers"
import type { TransactionsBuildUseropDtoHookProps } from "@/stories/utils/types"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const TokenFeesComponent = (params: TransactionsBuildUseropDtoHookProps) => {
  const { paymasterMode, to, value } = params
  const { isPending, isError, error, isSuccess } = useTokenFees({
    transactions: {
      to,
      value
    },
    options: {
      paymasterServiceData: { mode: paymasterMode }
    }
  })

  return (
    <div>
      <ConnectButton />
      <span>{isPending && "In progress.."}</span>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Success!</span>}
    </div>
  )
}

export const TokenFees = (params: TransactionsBuildUseropDtoHookProps) => {
  return (
    <Providers>
      <TokenFeesComponent {...params} />
    </Providers>
  )
}
