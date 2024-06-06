import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSendWithdrawals } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { HookArgs } from "@/stories/utils/types";
import { Sponsored } from "@/utils";

const WithdrawComponent = (params: HookArgs) => {
  const { wait } = params;
  const { mutate, isPending, isError, error, isSuccess, data } =
    useSendWithdrawals();
  const [txHash, setTxHash] = React.useState("");

  const withdrawalRequest = {
    options: Sponsored,
  };

  const handleWithdraw = () => {
    mutate(withdrawalRequest);
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
      <ConnectButton />
      <button onClick={handleWithdraw} disabled={isPending}>
        {isPending ? "Withdrawing.." : "Withdraw"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Successful withdrawal!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}
    </div>
  );
};

export const Withdraw = (params: HookArgs) => {
  return (
    <Providers>
      <WithdrawComponent {...params} />
    </Providers>
  );
};
