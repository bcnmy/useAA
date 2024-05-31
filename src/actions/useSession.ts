import { PostUseSessionArgs } from "@/hooks/useSession";
import { Hex, type UserOpResponse, createSessionSmartAccountClient, getSingleSessionTxParams } from "@biconomy/account";

export const useSession = async (
  { smartAccountAddress, chain, buildUseropDto, manyOrOneTx, biconomyPaymasterApiKey, bundlerUrl }: PostUseSessionArgs,
): Promise<UserOpResponse> => {

  const usersSmartAccountClient = await createSessionSmartAccountClient({
    accountAddress: smartAccountAddress as Hex,
    bundlerUrl,
    biconomyPaymasterApiKey,
    chainId: chain.id
  }, smartAccountAddress as Hex);

  const singleSessionParams = await getSingleSessionTxParams(
    smartAccountAddress,
    chain,
    null
  )

  return usersSmartAccountClient.sendTransaction(manyOrOneTx, {
    ...singleSessionParams,
    ...buildUseropDto
  })

};
