import {
  useSendGasTokenTransaction,
  useSendSponsoredTransaction,
  useSendTransaction
} from "@/hooks"
import { Providers } from "@/stories/components/Providers"
import type { HookProps } from "@/stories/utils/types"
import React, { useEffect } from "react"
import { parseEther } from "viem"

const SendTransactionComponent = (params: HookProps) => {
  const [value, setValue] = React.useState("")
  const [address, setAddress] = React.useState(
    "0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC"
  )
  const { mutate, data } = useSendTransaction()
  const { wait } = params
  const [txHash, setTxHash] = React.useState("")
  const handleSubmit = () => {
    const etherValue = parseEther(value)

    const tx = {
      to: address,
      value: etherValue
    }

    mutate({ transactions: tx })
  }

  useEffect(() => {
    const waitAction = async () => {
      if (data) {
        const {
          receipt: { transactionHash }
        } = await data.wait()
        setTxHash(transactionHash)
      }
    }
    if (wait) {
      waitAction()
    }
  }, [data, wait])

  return (
    <div>
      <input
        name="address"
        placeholder="0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC"
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        name="value"
        placeholder="0.05"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Send Transaction
      </button>
      {txHash && <span>{txHash}</span>}
    </div>
  )
}

const SendSponsoredTransactionComponent = ({ wait }: HookProps) => {
  const [value, setValue] = React.useState("")
  const [address, setAddress] = React.useState(
    "0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC"
  )
  const { mutate, isPending, isError, error, isSuccess, data } =
    useSendSponsoredTransaction()
  const [txHash, setTxHash] = React.useState("")

  const handleSubmit = () => {
    const etherValue = parseEther(value)

    const tx = {
      to: address,
      value: etherValue
    }

    mutate({ transactions: tx })
  }

  useEffect(() => {
    const waitAction = async () => {
      if (data) {
        const {
          receipt: { transactionHash }
        } = await data.wait()
        setTxHash(transactionHash)
      }
    }
    if (wait) {
      waitAction()
    }
  }, [data, wait])

  return (
    <>
      <input
        name="address"
        placeholder="0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC"
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        name="value"
        placeholder="0.05"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        {isPending ? "Sending Transaction..." : "Send Transaction"}
      </button>

      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Success!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}
    </>
  )
}

const SendGasTokenTransactionComponent = ({ wait }: HookProps) => {
  const [value, setValue] = React.useState("")
  const [address, setAddress] = React.useState(
    "0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC"
  )
  const [txHash, setTxHash] = React.useState("")
  const { mutate, isPending, isError, error, isSuccess, data } =
    useSendGasTokenTransaction()

  const handleSubmit = () => {
    const etherValue = parseEther(value)

    const tx = {
      to: address,
      value: etherValue
    }

    mutate({
      transactions: tx,
      preferredToken: "0x747A4168DB14F57871fa8cda8B5455D8C2a8e90a"
    })
  }

  React.useEffect(() => {
    const waitAction = async () => {
      if (data) {
        const {
          receipt: { transactionHash }
        } = await data.wait()
        setTxHash(transactionHash)
      }
    }
    if (wait) {
      waitAction()
    }
  }, [data, wait])

  return (
    <>
      <input
        name="address"
        placeholder="0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC"
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        name="value"
        placeholder="0.05"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        {isPending ? "Sending Transaction..." : "Send Transaction"}
      </button>

      {isError && <span>{error?.message}</span>}
      {isSuccess && <span>Success!</span>}
      {txHash && <span>Transaction hash: {txHash}</span>}
    </>
  )
}

export const SendGasTokenTransaction = (params: HookProps) => {
  return (
    <Providers>
      <SendGasTokenTransactionComponent {...params} />
    </Providers>
  )
}

export const SendTransaction = (params: HookProps) => {
  return (
    <Providers>
      <SendTransactionComponent {...params} />
    </Providers>
  )
}

export const SendSponsoredTransaction = (params: HookProps) => {
  return (
    <Providers>
      <SendSponsoredTransactionComponent {...params} />
    </Providers>
  )
}
