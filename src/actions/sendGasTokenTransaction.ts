import { BiconomySmartAccountV2 } from "@biconomy/account";
import { GasTokenPayment, mergeOptions } from "@/utils";
import { UseSendGasTokenTransactionArgs } from "@/hooks/useSendGasTokenTransaction";

export const sendGasTokenTransaction = async (
  params: UseSendGasTokenTransactionArgs,
  smartAccountClient: BiconomySmartAccountV2 | null
) => {

  if (!smartAccountClient) {
    throw new Error("No smart account found!");
  }

  const options =
    mergeOptions([params.options, GasTokenPayment])

  const result = await smartAccountClient.sendTransaction(
    params.transactions,
    options
  );
  return result;
};
