import React from "react";
import { useSession, useSmartAccount } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { encodeFunctionData, parseAbi } from "viem";
import { Sponsored } from "@/utils";
import { HookArgs } from "../utils/types";

export type PreUseUseSessionArgs = {
  chainId: number;
};

export const nftAddress = "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e"
export const safeMint = parseAbi([
  "function safeMint(address owner) view returns (uint balance)"
])

const UseSessionComponent = ({ wait }: HookArgs) => {
  const { mutate, isPending, isError, error, isSuccess, data } = useSession();
  const [txHash, setTxHash] = React.useState("");
  const { smartAccountAddress } = useSmartAccount();

  const handleUseSession = () => {

    const manyOrOneTx = {
      to: nftAddress,
      data: encodeFunctionData({
        abi: safeMint,
        functionName: "safeMint",
        args: [smartAccountAddress]
      })
    }

    mutate({
      buildUseropDto: Sponsored,
      manyOrOneTx,
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
    if (wait) {
      waitAction();
    }
  }, [data, wait]);

  return (
    <div>
      <button onClick={handleUseSession} disabled={isPending}>
        {isPending ? "Creating a Session..." : "Use a Session"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Success!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}
    </div>
  );
};

export const UseSession = (params: HookArgs) => {
  return (
    <Providers>
      <UseSessionComponent {...params} />
    </Providers>
  );
};
