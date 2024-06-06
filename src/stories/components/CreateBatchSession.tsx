import { useCreateBatchSession, useUserOpWait } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { Hex, parseAbi } from "viem";
import { Sponsored, bigIntReplacer } from "@/utils";
import { HookArgs } from "../utils/types";

export type PreUseCreateBatchSessionArgs = {
	chainId: number;
};

export const contractAddress: Hex =
	"0xC834b3804817883a6b7072e815C3faf8682bFA13";
const order = parseAbi(["function submitOrder(uint256 _orderNum)"]);
const cancel = parseAbi(["function submitCancel(uint256 _orderNum)"]);

const CreateBatchSessionComponent = (params: HookArgs) => {
	const {
		mutate,
		isPending,
		isError,
		error,
		isSuccess,
		data: userOpResponse,
	} = useCreateBatchSession();

	const { isSuccess: waitIsSuccess, data: waitData } = useUserOpWait({
		userOpResponse,
	});

	const policy = [
		{
			interval: {
				validUntil: 0,
				validAfter: 0,
			},
			contractAddress,
			functionSelector: cancel[0],
			rules: [
				{
					offset: 0,
					condition: 0,
					referenceValue: BigInt(1),
				},
			],
			valueLimit: 0n,
		},
		{
			interval: {
				validUntil: 0,
				validAfter: 0,
			},
			contractAddress,
			functionSelector: order[0],
			rules: [
				{
					offset: 0,
					condition: 0,
					referenceValue: BigInt(1),
				},
			],
			valueLimit: 0n,
		},
	];

	const handleCreateBatchSession = () =>
		mutate({
			options: Sponsored,
			policy,
		});

	return (
		<div>
			<button onClick={handleCreateBatchSession} disabled={isPending}>
				{isPending ? "Creating a batch Session..." : "Create a Batch Session"}
			</button>
			{isError && <span>{error.message}</span>}
			{isSuccess && <span>Smart account created a batch session!</span>}
			{waitIsSuccess && (
				<span>Transaction hash: {waitData?.receipt?.transactionHash}</span>
			)}

			<pre>{JSON.stringify(policy, bigIntReplacer, 2)}</pre>
		</div>
	);
};

export const CreateBatchSession = (params: HookArgs) => {
	return (
		<Providers>
			<CreateBatchSessionComponent {...params} />
		</Providers>
	);
};
