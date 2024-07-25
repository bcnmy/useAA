import { Providers } from "@/stories/components/Providers";
import type { TransactionsBuildUseropDtoHookProps } from "@/stories/utils/types";
import { useGasEstimate } from "@/hooks/useGasEstimate";

const GasEstimateComponent = (params: TransactionsBuildUseropDtoHookProps) => {
  const { paymasterMode, to, value } = params;
  const { isPending, isError, error, isSuccess, data: gasInWei } = useGasEstimate({
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
      <span>{isPending && "In progress.."}</span>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <div><span>Success!</span>{gasInWei.toString()}</div>}
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
