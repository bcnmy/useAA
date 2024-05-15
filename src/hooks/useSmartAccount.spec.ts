import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { providerWrapper as wrapper } from "../../tests/providerWrapper";
import { useSmartAccount } from "./useSmartAccount";

describe("Smart account", () => {
  it("should log an account address", async () => {
    const { rerender, result } = renderHook(() => useSmartAccount(), {
      wrapper,
    });

    await act(async () => {
      rerender();
    });

    const smartAccountClient = result.current.smartAccountClient;
    const smartAccountAddress = await smartAccountClient?.getAccountAddress();

    console.log({ smartAccountAddress });
    expect(smartAccountAddress).toBeDefined();
  });
});
