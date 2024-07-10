import { useCreateDistributedSession, useSmartAccount, useUserOpWait } from "@/hooks"
import { Providers } from "@/stories/components/Providers"
import { Options, bigIntReplacer } from "@/utils"
import { type Hex, parseAbi } from "viem"
import type { HookProps } from "../utils/types"
import { PolicyHelpers, RuleHelpers, type PolicyLeaf } from "@biconomy/account"
import { ErrorGuard } from "./ErrorGuard"

export type PreUseCreateDistributedSessionProps = {
  chainId: number
}

export const nftAddress: Hex = "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e"
export const safeMint = parseAbi([
  "function safeMint(address owner) view returns (uint balance)"
])

const CreateDistributedSessionComponent = () => {
  const { mutate, isPending, isError, error, isSuccess, data: userOpResponse } =
    useCreateDistributedSession()
  const { smartAccountAddress } = useSmartAccount()

  const {
    isLoading: waitIsLoading,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  const isLoading = isPending || waitIsLoading

  const policy: PolicyLeaf[] = [
    {
      contractAddress: nftAddress,
      functionSelector: safeMint[0],
      rules: [
        {
          offset: RuleHelpers.OffsetByIndex(0),
          condition: RuleHelpers.Condition("EQUAL"),
          referenceValue: smartAccountAddress,
        }
      ],
      interval: PolicyHelpers.Indefinitely,
      valueLimit: PolicyHelpers.NoValueLimit
    }
  ]

  const handleCreateDistributedSession = () => mutate({ options: Options.Sponsored, policy })

  return (
    <ErrorGuard errors={[error, waitError]}>
      <button type="button" onClick={handleCreateDistributedSession} disabled={isLoading}>
        {isLoading ? "Creating a Session..." : "Create a Session"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Smart account created a session!</span>}
      {waitData?.receipt?.transactionHash && <span>Transaction hash: {waitData?.receipt?.transactionHash}</span>}
      <pre>{JSON.stringify(policy, bigIntReplacer, 2)}</pre>
    </ErrorGuard>
  )
}

export const CreateDistributedSession = (params: HookProps) => {
  return (
    <Providers>
      <CreateDistributedSessionComponent />
    </Providers>
  )
}
