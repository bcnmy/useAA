import { useDeploySmartAccount } from "@/hooks"
import { Providers } from "@/stories/components/Providers"
import type { HookProps } from "@/stories/utils/types"
import React from "react"

const DeploySmartAccountComponent = (params: HookProps) => {
  const { wait } = params
  const { mutate, isPending, isError, error, isSuccess, data } =
    useDeploySmartAccount()
  const [txHash, setTxHash] = React.useState("")

  const handleDeploy = () => {
    // TODO: investigate why calling mutate without args doesn't work
    mutate({})
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
      <button type="button" onClick={handleDeploy} disabled={isPending}>
        {isPending ? "Deploying.." : "Deploy Smart Account"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Smart account deployed!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}
    </div>
  )
}

export const DeploySmartAccount = (params: HookProps) => {
  return (
    <Providers>
      <DeploySmartAccountComponent {...params} />
    </Providers>
  )
}
