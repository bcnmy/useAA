import { useDeploySmartAccount } from "@/hooks";
import { Providers } from "./Providers";

const DeploySmartAccountComponent = () => {
  const { mutate, isPending, isError, error, isSuccess } =
    useDeploySmartAccount();

  const handleDeploy = () => {
    // TODO: investigate why calling mutate without args doesn't work
    mutate({});
  };

  return (
    <>
      <button onClick={handleDeploy} disabled={isPending}>
        {isPending ? "Deploying.." : "Deploy Smart Account"}
      </button>
      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Smart account deployed!</span>}
    </>
  );
};

export const DeploySmartAccount = () => {
  return (
    <Providers>
      <DeploySmartAccountComponent />
    </Providers>
  );
};
