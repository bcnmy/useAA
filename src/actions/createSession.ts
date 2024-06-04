import { PostUseCreateSessionArgs } from "@/hooks/useCreateSession";
import { BiconomySmartAccountV2, Policy, UserOpResponse, createSession as createSessionFromSDK, createSessionKeyEOA } from "@biconomy/account";

export const createSession = async (
  params: PostUseCreateSessionArgs,
  smartAccountClient: BiconomySmartAccountV2 | null
): Promise<UserOpResponse> => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!");
  }

  const { policy: policyWithoutSessionKey, chain, buildUseropDto } = params;

  const { sessionKeyAddress, sessionStorageClient } = await createSessionKeyEOA(smartAccountClient, chain);

  const policy: Policy[] = policyWithoutSessionKey.map(policyElement => ({
    ...policyElement,
    sessionKeyAddress
  }));


  return createSessionFromSDK(
    smartAccountClient,
    policy,
    sessionStorageClient,
    buildUseropDto
  )

};