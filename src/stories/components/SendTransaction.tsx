import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { parseEther } from "viem";
import { useSendGasTokenTransaction, useSendTransaction } from "@/hooks";
import { Providers } from "@/stories/components/Providers";

const SendTransactionComponent = () => {
  const [value, setValue] = React.useState("");
  const [address, setAddress] = React.useState("");
  const { mutate, data } = useSendTransaction(); //TODO: Add a boolean 'wait' flag to the useSendTransaction options which bakes in the useEffect logic

  const handleSubmit = () => {
    const etherValue = parseEther(value);

    const tx = {
      to: address,
      value: etherValue,
    };

    mutate({ manyOrOneTransactions: tx });
  };

  useEffect(() => {
    (async () => {
      if (data) {
        const {
          success,
          receipt: { transactionHash },
        } = await data.wait();
        console.log({ success, transactionHash });
      }
    })();
  }, [data]);

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
  const { mutate, data } = useSendGasTokenTransaction();

  const handleSubmit = () => {
    const etherValue = parseEther(value);

    const tx = {
      to: address,
      value: etherValue,
    };

    mutate({
      manyOrOneTransactions: tx,
      buildUseropDto: {
        paymasterServiceData: {
          calculateGasLimits: true,
        },
      },
    });
  };

  useEffect(() => {
    (async () => {
      if (data) {
        const {
          success,
          receipt: { transactionHash },
        } = await data.wait();
        console.log({ success, transactionHash });
      }
    })();
  }, [data]);

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
