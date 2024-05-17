import { BiconomySmartAccountV2, PaymasterMode } from "@biconomy/account";
import { UseSendSponsoredTransactionArgs } from "@/types";

export const sendSponsoredTransaction = async (
  params: UseSendSponsoredTransactionArgs,
  mode: PaymasterMode.SPONSORED | PaymasterMode.ERC20,
  smartAccountClient: BiconomySmartAccountV2 | null
) => {
  if (!smartAccountClient) {
    throw new Error("No smart account found!");
  }

  const { manyOrOneTransactions, buildUseropDto } = params;

  const result = await smartAccountClient.sendTransaction(
    manyOrOneTransactions,
    {
      ...buildUseropDto,
      paymasterServiceData: {
        ...(buildUseropDto?.paymasterServiceData || {}),
        mode,
      },
    }
  );
  return result;
};
