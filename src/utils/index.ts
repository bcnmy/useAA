import { type BuildUserOpOptions, PaymasterMode } from "@biconomy/account"

export type PartialOptions = Partial<BuildUserOpOptions> | undefined
export type PartialBuildOptionKey = keyof BuildUserOpOptions

export const deepMerge = (
    target: PartialOptions = {},
    source: PartialOptions = {}
): PartialOptions => {
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            const typedKey = key as PartialBuildOptionKey
            const sourceAsObject = source as PartialOptions
            if (isObject(sourceAsObject?.[typedKey])) {
                if (!target[typedKey]) Object.assign(target, { [typedKey]: {} })
                const typedTarget = target[typedKey] as PartialOptions
                const typedSource = sourceAsObject?.[typedKey] as PartialOptions
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

const isObject = (item: any) => {
    return item && typeof item === "object" && !Array.isArray(item)
}

export const _mergeOptions = (
    target: PartialOptions = {},
    source: PartialOptions[] = []
): PartialOptions =>
    source.reduce(
        (acc: PartialOptions, item: PartialOptions) =>
            deepMerge(acc, item),
        target
    )
export const mergeOptions = (
    options: PartialOptions[] | PartialOptions
): PartialOptions =>
    Array.isArray(options)
        ? _mergeOptions({}, options.filter(Boolean))
        : options ?? {}

export type TSponsored = typeof Sponsored
export const Sponsored: PartialOptions = {
    paymasterServiceData: {
        mode: PaymasterMode.SPONSORED,
        calculateGasLimits: true
    }
}

export type TGasTokenPayment = typeof GasTokenPayment
export const GasTokenPayment: PartialOptions = {
    paymasterServiceData: {
        mode: PaymasterMode.ERC20,
        calculateGasLimits: true
    }
}

export type TNowNonce = ReturnType<typeof getNowNonce>
export const getNowNonce: () => PartialOptions = () => ({
    nonceOptions: {
        nonceKey: Date.now()
    }
})

export type Option = TSponsored | TGasTokenPayment | TNowNonce

export function bigIntReplacer(_key: string, value: any): any {
    return typeof value === "bigint" ? value.toString() : value
}
