import type { PostUseCreateSessionProps } from "@/hooks/useCreateSession"
import {
  type BiconomySmartAccountV2,
  type Policy,
  type UserOpResponse,
  createSession as createSessionFromSDK,
  createSessionKeyEOA
} from "@biconomy/account"
/** @ignore */
export const createSession = async (
  params: PostUseCreateSessionProps,
  smartAccountClient: BiconomySmartAccountV2 | null
): Promise<UserOpResponse> => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!")
  }

  const { policy: policyLeaves, chain, options } = params

  const { sessionKeyAddress, sessionStorageClient } = await createSessionKeyEOA(
    smartAccountClient,
    chain
  )

  const policy: Policy[] = policyLeaves.map((policyElement) => ({
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
