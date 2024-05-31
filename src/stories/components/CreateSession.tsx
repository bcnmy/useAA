import React from "react";
import { useCreateSession, useSmartAccount } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { parseAbi } from "viem";
import { PaymasterMode } from "@biconomy/account";

export type PreUseCreateSessionArgs = {
  chainId: number;
};

export const nftAddress = "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e"
export const safeMint = parseAbi([
  "function safeMint(address owner) view returns (uint balance)"
])

const CreateSessionComponent = () => {
  const { mutate, isPending, isError, error, isSuccess, data } =
    useCreateSession();
  const [txHash, setTxHash] = React.useState("");
  const { smartAccountAddress } = useSmartAccount();

  const handleCreateSession = () => {
    mutate({
      buildUseropDto: {
        paymasterServiceData: {
          mode: PaymasterMode.SPONSORED,
        }
      },
      policy: [
        {
          contractAddress: nftAddress,
          functionSelector: safeMint[0],
          rules: [
            {
              offset: 0,
              condition: 0,
              referenceValue: smartAccountAddress,
            },
          ],
          interval: {
            validUntil: 0,
            validAfter: 0,
          },
          valueLimit: 0n,
        },
      ]
    });
  };

  React.useEffect(() => {
    const waitAction = async () => {
      if (data) {
        const {
          receipt: { transactionHash },
        } = await data.wait();
        setTxHash(transactionHash);
      }
    };
  }, [data]);

  return (
    <div>
      <button onClick={handleCreateSession} disabled={isPending}>
        {isPending ? "Creating a Session..." : "Create a Session"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Smart account createsessioned!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}
    </div>
  );
};

export const CreateSession = () => {
  return (
    <Providers>
      <CreateSessionComponent />
    </Providers>
  );
};
