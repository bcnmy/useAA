import type { PostUseCreateDistributedSessionProps } from "@/hooks/useCreateDistributedSession"
import {
  type BiconomySmartAccountV2,
  type UserOpResponse,
  createDistributedSession as createDistributedSessionFromSDK,
} from "@biconomy/account"
/** @ignore */
export const createDistributedSession = async (
  params: PostUseCreateDistributedSessionProps,
  smartAccountClient: BiconomySmartAccountV2 | null
): Promise<UserOpResponse> => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!")
  }

  const { policy: policyWithoutSessionKey, chain, options, browserWallet } = params

  return createDistributedSessionFromSDK(
    smartAccountClient,
    policyWithoutSessionKey,
    undefined, // use default storage client
    options,
    chain.id,
    browserWallet
  )
}
