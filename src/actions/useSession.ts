import { PostUseSessionArgs } from "@/hooks/useSession";
import { getNowNonce, mergeArray } from "@/utils";
import { Hex, type UserOpResponse, createSessionSmartAccountClient, getSingleSessionTxParams } from "@biconomy/account";

export const useSession = async (
  params: PostUseSessionArgs,
): Promise<UserOpResponse> => {

  const { smartAccountAddress, chain, manyOrOneTx, biconomyPaymasterApiKey, bundlerUrl } = params;
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

  const buildUseropDto =
    mergeArray(params.buildUseropDto, [getNowNonce(), singleSessionParams])

  return usersSmartAccountClient.sendTransaction(manyOrOneTx, buildUseropDto);

};
