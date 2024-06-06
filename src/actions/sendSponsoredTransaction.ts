import { BiconomySmartAccountV2 } from "@biconomy/account";
import { UseSendSponsoredTransactionArgs } from "@/types";

export const sendSponsoredTransaction = async (
  params: UseSendSponsoredTransactionArgs,
  smartAccountClient: BiconomySmartAccountV2 | null
) => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!");
  }

  const result = await smartAccountClient.sendTransaction(
    params.transactions,
    params.options
  );
  return result;
};
