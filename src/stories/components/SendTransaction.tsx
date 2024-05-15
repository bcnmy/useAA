import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { parseEther } from "viem";
import { useSendTransaction } from "../../hooks";
import { Providers } from "./Providers";
import { useSendSponsoredTransaction } from "../../hooks";

const SendTransactionComponent = () => {
  const [value, setValue] = React.useState("");
  const [address, setAddress] = React.useState("");
  const { mutate } = useSendTransaction();

  const handleSubmit = () => {
    const etherValue = parseEther(value);

    const tx = {
      to: address,
      value: etherValue,
    };

    mutate({ manyOrOneTransactions: tx });
  };

  return (
    <>
      <ConnectButton />
      <input
        name="address"
        placeholder="0xA0Cf…251e"
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
    </>
  );
};

const SendSponsoredTransactionComponent = () => {
  const [value, setValue] = React.useState("");
  const [address, setAddress] = React.useState("");
  const { mutate } = useSendSponsoredTransaction();

  const handleSubmit = () => {
    const etherValue = parseEther(value);

    const tx = {
      to: address,
      value: etherValue,
    };

    mutate({
      manyOrOneTransactions: tx,
    });
  };

  return (
    <>
      <ConnectButton />
      <input
        name="address"
        placeholder="0xA0Cf…251e"
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
    </>
  );
};

export const SendTransaction = () => {
  return (
    <Providers>
      <SendTransactionComponent />
    </Providers>
  );
};

export const SendSponsoredTransaction = () => {
  return (
    <Providers>
      <SendSponsoredTransactionComponent />
    </Providers>
  );
};
