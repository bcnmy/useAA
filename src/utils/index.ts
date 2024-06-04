import { BuildUserOpOptions, PaymasterMode } from "@biconomy/account";

export const deepMerge = (target: any = {}, source: any = {}) => {
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                deepMerge(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    else {
        throw new Error('deepMerge only accepts objects as arguments');
    }
    return target;
}

const isObject = (item: any) => {
    return item && typeof item === 'object' && !Array.isArray(item);
}

export const mergeArray = (target: any = {}, source: any[] = []) => source.reduce((acc: any, item: any) => deepMerge(acc, item), target);

export type TSponsored = typeof Sponsored;
export const Sponsored: Partial<BuildUserOpOptions> = {
    paymasterServiceData: {
        mode: PaymasterMode.SPONSORED,
        calculateGasLimits: true
    },
}

export type TGasTokenPayment = typeof GasTokenPayment;
export const GasTokenPayment: Partial<BuildUserOpOptions> = {
    paymasterServiceData: {
        mode: PaymasterMode.ERC20,
        calculateGasLimits: true,
    },
}

export type TNowNonce = ReturnType<typeof getNowNonce>;
export const getNowNonce: () => Partial<BuildUserOpOptions> =
    () => ({
        nonceOptions: {
            nonceKey: Date.now()
        }
    })

export type Option = TSponsored | TGasTokenPayment | TNowNonce

export function bigIntReplacer(_key: string, value: any): any {
    return typeof value === 'bigint' ? value.toString() : value;
}

