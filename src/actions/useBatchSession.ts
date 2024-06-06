import { PostUseBatchSessionArgs } from "@/hooks/useBatchSession";
import { getNowNonce, mergeOptions } from "@/utils";
import { Hex, type UserOpResponse, createSessionSmartAccountClient, getBatchSessionTxParams } from "@biconomy/account";

export const useBatchSession = async (
  params: PostUseBatchSessionArgs,
): Promise<UserOpResponse> => {

  const { smartAccountAddress, chain, transactions, biconomyPaymasterApiKey, bundlerUrl, correspondingIndexes } = params;
  const usersSmartAccountClient = await createSessionSmartAccountClient({
    accountAddress: smartAccountAddress as Hex,
    bundlerUrl,
    biconomyPaymasterApiKey,
    chainId: chain.id
  }, smartAccountAddress as Hex, true);


  const batchSessionParams = await getBatchSessionTxParams(Array.isArray(transactions) ? transactions : [transactions],
    correspondingIndexes,
    smartAccountAddress,
    chain
  )

  const options =
    mergeOptions([params.options, getNowNonce(), batchSessionParams])

  return usersSmartAccountClient.sendTransaction(transactions, options);

};
