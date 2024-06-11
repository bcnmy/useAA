import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Providers } from "@/stories/components/Providers";
import { TransactionsBuildUseropDtoHookProps } from "@/stories/utils/types";
import { useGasEstimate } from "@/hooks/useGasEstimate";

const GasEstimateComponent = (params: TransactionsBuildUseropDtoHookProps) => {
  const { paymasterMode, to, value } = params;
  const { isPending, isError, error, isSuccess } = useGasEstimate({
    transactions: [
      {
        to,
        value,
      },
    ],
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

export const GasEstimate = (params: TransactionsBuildUseropDtoHookProps) => {
  return (
    <Providers>
      <GasEstimateComponent {...params} />
    </Providers>
  );
};
