import { PostUseBatchSessionArgs } from "@/hooks/useBatchSession";
import { getNowNonce, mergeArray } from "@/utils";
import { Hex, type UserOpResponse, createSessionSmartAccountClient, getBatchSessionTxParams } from "@biconomy/account";

export const useBatchSession = async (
  params: PostUseBatchSessionArgs,
): Promise<UserOpResponse> => {

  const { smartAccountAddress, chain, manyOrOneTx, biconomyPaymasterApiKey, bundlerUrl, correspondingIndexes } = params;
  const usersSmartAccountClient = await createSessionSmartAccountClient({
    accountAddress: smartAccountAddress as Hex,
    bundlerUrl,
    biconomyPaymasterApiKey,
    chainId: chain.id
  }, smartAccountAddress as Hex, true);


  const batchSessionParams = await getBatchSessionTxParams(Array.isArray(manyOrOneTx) ? manyOrOneTx : [manyOrOneTx],
    correspondingIndexes,
    smartAccountAddress,
    chain
  )

  const buildUseropDto =
    mergeArray(params.buildUseropDto, [getNowNonce(), batchSessionParams])

  return usersSmartAccountClient.sendTransaction(manyOrOneTx, buildUseropDto);

};
