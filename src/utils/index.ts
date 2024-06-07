import { PaymasterMode } from "@biconomy/account";
import type { BuildUserOpOptions } from "@biconomy/account";
export type { UserOpReceipt, UserOpStatus, UserOpResponse, BuildUserOpOptions, Transaction } from "@biconomy/account";

export type PartialBuildOptionKey = keyof BuildUserOpOptions
/** @ignore */
export const deepMerge = (
    target: BuildUserOpOptions = {},
    source: BuildUserOpOptions = {}
): BuildUserOpOptions => {
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            const typedKey = key as PartialBuildOptionKey
            const sourceAsObject = source as BuildUserOpOptions
            if (isObject(sourceAsObject?.[typedKey])) {
                if (!target[typedKey]) Object.assign(target, { [typedKey]: {} })
                const typedTarget = target[typedKey] as BuildUserOpOptions
                const typedSource = sourceAsObject?.[typedKey] as BuildUserOpOptions
                deepMerge(typedTarget, typedSource)
            } else {
                Object.assign(target, { [key]: sourceAsObject?.[typedKey] })
            }
        }
    } else if (isObject(target) && Array.isArray(source)) {
        for (const item of source) {
            deepMerge(target, item)
        }
    } else {
        throw new Error("deepMerge: source and target must be objects")
    }
    return target
}
/** @ignore */
const isObject = (item: any) => {
    return item && typeof item === "object" && !Array.isArray(item)
}
/** @ignore */
export const _mergeOptions = (
    target: BuildUserOpOptions = {},
    source: BuildUserOpOptions[] = []
): BuildUserOpOptions =>
    source.reduce(
        (acc: BuildUserOpOptions, item: BuildUserOpOptions) =>
            deepMerge(acc, item),
        target
    )
/** @ignore */
export const mergeOptions = (
    options: (BuildUserOpOptions | undefined)[] | BuildUserOpOptions
): BuildUserOpOptions =>
    Array.isArray(options)
        ? _mergeOptions({}, options.filter(Boolean) as BuildUserOpOptions[])
        : options ?? {}


/** @ignore */
export function bigIntReplacer(_key: string, value: any): any {
    return typeof value === "bigint" ? value.toString() : value
}

const GasTokenPayment: BuildUserOpOptions = {
    paymasterServiceData: {
        mode: PaymasterMode.ERC20,
        calculateGasLimits: true
    }
}
const Sponsored: BuildUserOpOptions = {
    paymasterServiceData: {
        mode: PaymasterMode.SPONSORED,
        calculateGasLimits: true
    }
}

export const Options = {
    getIncreasedVerification: (percentage: number): BuildUserOpOptions => ({
        gasOffset: {
            verificationGasLimitOffsetPct: percentage
        }
    }),
    getPreferredToken: (token: string): BuildUserOpOptions => ({
        paymasterServiceData: {
            mode: PaymasterMode.ERC20,
            preferredToken: token
        }
    }),
    getNowNonce: (): BuildUserOpOptions => ({
        nonceOptions: {
            nonceKey: Date.now()
        }
    }),
    GasTokenPayment,
    Sponsored,
} 