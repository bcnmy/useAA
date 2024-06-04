import { BiconomySmartAccountV2 } from "@biconomy/account";
import { UseSendSponsoredTransactionArgs } from "@/types";
import { Sponsored, mergeArray } from "@/utils";

export const sendSponsoredTransaction = async (
  params: UseSendSponsoredTransactionArgs,
  smartAccountClient: BiconomySmartAccountV2 | null
) => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!");
  }

  const buildUseropDto =
    mergeArray(params.buildUseropDto, [Sponsored])

  const result = await smartAccountClient.sendTransaction(
    params.manyOrOneTransactions,
    buildUseropDto
  );
  return result;
};
