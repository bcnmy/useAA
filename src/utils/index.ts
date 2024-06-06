import { BuildUserOpOptions, PaymasterMode } from "@biconomy/account";

export type PartialBuildOptions = Partial<BuildUserOpOptions> | undefined;
export type PartialBuildOptionKey = keyof BuildUserOpOptions;

export const deepMerge = (target: PartialBuildOptions = {}, source: PartialBuildOptions = {}): PartialBuildOptions => {
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            const typedKey = key as PartialBuildOptionKey;
            const sourceAsObject = source as PartialBuildOptions;
            if (isObject(sourceAsObject?.[typedKey])) {
                if (!target[typedKey]) Object.assign(target, { [typedKey]: {} });
                const typedTarget = target[typedKey] as PartialBuildOptions;
                const typedSource = sourceAsObject?.[typedKey] as PartialBuildOptions;
                deepMerge(typedTarget, typedSource);
            } else {
                Object.assign(target, { [key]: sourceAsObject?.[typedKey] });
            }
        }
    }
    else if (isObject(target) && Array.isArray(source)) {
        source.forEach((item) => deepMerge(target, item));
    }
    else {
        throw new Error('deepMerge: source and target must be objects');
    }
    return target;
}

const isObject = (item: any) => {
    return item && typeof item === 'object' && !Array.isArray(item);
}

export const _mergeOptions = (target: PartialBuildOptions = {}, source: PartialBuildOptions[] = []): PartialBuildOptions => source.reduce((acc: PartialBuildOptions, item: PartialBuildOptions) => deepMerge(acc, item), target);
export const mergeOptions = (options: PartialBuildOptions): PartialBuildOptions => Array.isArray(options) ? _mergeOptions({}, options.filter(Boolean)) : options ?? {};

export type TSponsored = typeof Sponsored;
export const Sponsored: PartialBuildOptions = {
    paymasterServiceData: {
        mode: PaymasterMode.SPONSORED,
        calculateGasLimits: true
    },
}

export type TGasTokenPayment = typeof GasTokenPayment;
export const GasTokenPayment: PartialBuildOptions = {
    paymasterServiceData: {
        mode: PaymasterMode.ERC20,
        calculateGasLimits: true,
    },
}

export type TNowNonce = ReturnType<typeof getNowNonce>;
export const getNowNonce: () => PartialBuildOptions =
    () => ({
        nonceOptions: {
            nonceKey: Date.now()
        }
    })

export type Option = TSponsored | TGasTokenPayment | TNowNonce

export function bigIntReplacer(_key: string, value: any): any {
    return typeof value === 'bigint' ? value.toString() : value;
}

