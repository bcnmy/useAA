import type { PostUseCreateSessionArgs } from "@/hooks/useCreateSession"
import {
  type BiconomySmartAccountV2,
  type Policy,
  type UserOpResponse,
  createSession as createSessionFromSDK,
  createSessionKeyEOA
} from "@biconomy/account"

export const createSession = async (
  params: PostUseCreateSessionArgs,
  smartAccountClient: BiconomySmartAccountV2 | null
): Promise<UserOpResponse> => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!")
  }

  const { policy: policyWithoutSessionKey, chain, options } = params

  const { sessionKeyAddress, sessionStorageClient } = await createSessionKeyEOA(
    smartAccountClient,
    chain
  )

  const policy: Policy[] = policyWithoutSessionKey.map((policyElement) => ({
    ...policyElement,
    sessionKeyAddress
  }))

  return createSessionFromSDK(
    smartAccountClient,
    policy,
    sessionStorageClient,
    options
  )
}
