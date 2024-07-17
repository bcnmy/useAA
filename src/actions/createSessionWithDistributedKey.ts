import {
  type BiconomySmartAccountV2,
  type UserOpResponse,
  createSessionWithDistributedKey as createSessionWithDistributedKeyFromSDK,
} from "@biconomy-devx/account"
import type { PostUseCreateSessionWithDistributedKeyProps } from "@/hooks/useCreateSessionWithDistributedKey"


/** @ignore */
export const createSessionWithDistributedKey = async (
  params: PostUseCreateSessionWithDistributedKeyProps,
  smartAccountClient: BiconomySmartAccountV2 | null
): Promise<UserOpResponse> => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!")
  }

  const { policy, chain, options, browserWallet } = params

  return createSessionWithDistributedKeyFromSDK({
    smartAccountClient,
    policy,
    sessionStorageClient: undefined, // use default storage client
    buildUseropDto: options,
    chainId: chain.id,
    browserWallet
  })
}
