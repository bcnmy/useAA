import { UserOpReceipt, UserOpResponse } from "@biconomy/account";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useSmartAccount } from "@/hooks";
import { UseQueryParameters } from "wagmi/query";

type UseUserOpPayload = {
    userOpResponse: UserOpResponse | undefined;
};

export const useUserOpWait = (
    args: UseQueryParameters & UseUserOpPayload,
) => {
    const { smartAccountClient, queryClient } = useSmartAccount();
    return useQuery(
        {
            queryKey: ["userOpResponse", args?.userOpResponse?.userOpHash],
            queryFn: async () => {
                if (!smartAccountClient) {
                    throw new Error("No smart account found");
                }
                if (!args?.userOpResponse?.userOpHash) {
                    throw new Error("UserOp not yet submitted");
                }
                return await args.userOpResponse.wait();
            },
            enabled: !!args?.userOpResponse?.userOpHash,
            ...args
        } as UseQueryOptions<UserOpReceipt, Error, UserOpReceipt, QueryKey>,
        queryClient,
    );
};
