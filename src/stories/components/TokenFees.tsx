import { useTokenFees } from "@/hooks"
import { Providers } from "@/stories/components/Providers"
import type { TransactionsBuildUseropDtoHookProps } from "@/stories/utils/types"
import { bigIntReplacer } from "@/utils"

const TokenFeesComponent = (params: TransactionsBuildUseropDtoHookProps) => {
  const { paymasterMode, to, value } = params
  const { isPending, isError, error, isSuccess, data } = useTokenFees({
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
      <span>{isPending && "In progress.."}</span>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>{(data.feeQuotes??[]).map((fee, i) => (<div key={`key-${i+2}`}>{JSON.stringify(fee, bigIntReplacer, 2)}</div>))}</span>}
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
