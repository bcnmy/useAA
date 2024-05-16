import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useSmartAccount } from "./useSmartAccount"
import { providerHoc } from "../stories/components/Providers"
import { act } from "react"

describe("Smart account", () => {
  it("should log an account address", async () => {
    const { rerender, result } = renderHook(() => useSmartAccount(), {
      wrapper: providerHoc
    })

    await act(async () => {
      rerender()
    })

    const smartAccountClient = result.current.smartAccountClient
    const smartAccountAddress = await smartAccountClient?.getAccountAddress()

    console.log({ smartAccountAddress })
    expect(smartAccountAddress).toBeDefined()
  })
})
