import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTokenFees } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { TokenFeesHookArgs } from "@/stories/utils/types";

const TokenFeesComponent = (params: TokenFeesHookArgs) => {
  const { paymasterMode, to, value } = params;
  const { isPending, isError, error, isSuccess, data } = useTokenFees({
    manyOrOneTransactions: {
      to,
      value,
    },
    buildUseropDto: {
      paymasterServiceData: { mode: paymasterMode },
    },
  });

  return (
    <div>
      <ConnectButton />
      <span>{isPending && "In progress.."}</span>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Success!</span>}
    </div>
  );
};

export const TokenFees = (params: TokenFeesHookArgs) => {
  return (
    <Providers>
      <TokenFeesComponent {...params} />
    </Providers>
  );
};
