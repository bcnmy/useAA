import type { PostUseCreateSessionProps } from "@/hooks/useCreateSession"
import {
  type BiconomySmartAccountV2,
  type CreateSessionDataParams,
  type UserOpResponse,
  createABISessionDatum,
  createBatchSession as createBatchSessionFromSDK,
  createSessionKeyEOA
} from "@biconomy/account"
/** @ignore */
export const createBatchSession = async (
  params: PostUseCreateSessionProps,
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

  const leaves: CreateSessionDataParams[] = policyWithoutSessionKey.map(
    (policyElement) =>
      createABISessionDatum({
        ...policyElement,
        sessionKeyAddress
      })
  )

  return createBatchSessionFromSDK(
    smartAccountClient,
    sessionStorageClient,
    leaves,
    options
  )
}
