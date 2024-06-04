import { BiconomySmartAccountV2, PaymasterMode } from "@biconomy/account";
import { GasTokenPayment, deepMerge, getNowNonce, mergeArray } from "@/utils";
import { UseSendGasTokenTransactionArgs } from "@/hooks/useSendGasTokenTransaction";

export const sendGasTokenTransaction = async (
  params: UseSendGasTokenTransactionArgs,
  smartAccountClient: BiconomySmartAccountV2 | null
) => {

  if (!smartAccountClient) {
    throw new Error("No smart account found!");
  }

  const buildUseropDto =
    mergeArray(params.buildUseropDto, [GasTokenPayment])

  const result = await smartAccountClient.sendTransaction(
    params.manyOrOneTransactions,
    buildUseropDto
  );
  return result;
};