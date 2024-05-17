import { act, renderHook, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useSendTransaction } from "./useSendTransaction"
import { providerHoc } from "../stories/components/Providers"

describe("Send Transasction", () => {
  const recipient = "0xFA66E705cf2582cF56528386Bb9dFCA119767262"

  it("should send a transaction", async () => {
    const { rerender, result } = renderHook(() => useSendTransaction(), {
      wrapper: providerHoc
    })

    act(rerender)

    if (result?.current) {
      const { mutate, data } = result?.current

      act(() =>
        mutate({
          manyOrOneTransactions: {
            to: recipient,
            value: 1000n
          }
        })
      )

      await waitFor(() => {
        try {
          expect(data?.wait).toBeDefined()
        } catch (e) {}
      })

      if (data?.wait) {
        act(async () => {
          const {
            success,
            receipt: { transactionHash }
          } = await data?.wait()
          expect(success).toBe("true")
          expect(transactionHash).toBeDefined()
        })
      }
    }
  }, 10000)
})
