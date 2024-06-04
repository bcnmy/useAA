import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { parseEther } from "viem";
import { useSendGasTokenTransaction, useSendSponsoredTransaction, useSendTransaction } from "@/hooks";
import { Providers } from "@/stories/components/Providers";
import { HookArgs } from "@/stories/utils/types";

const SendTransactionComponent = (params: HookArgs) => {
  const [value, setValue] = React.useState("");
  const [address, setAddress] = React.useState("0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC");
  const { mutate, data } = useSendTransaction();
  const { wait } = params;
  const [txHash, setTxHash] = React.useState("");
  const handleSubmit = () => {
    const etherValue = parseEther(value);

    const tx = {
      to: address,
      value: etherValue,
    };

    mutate({ manyOrOneTransactions: tx });
  };

  useEffect(() => {
    const waitAction = async () => {
      if (data) {
        const {
          receipt: { transactionHash },
        } = await data.wait();
        setTxHash(transactionHash);
      }
    };
    if (wait) {
      waitAction();
    }
  }, [data, wait]);

  return (
    <div>
      <ConnectButton />
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
  );
};

const SendSponsoredTransactionComponent = () => {
  const [value, setValue] = React.useState("");
  const [address, setAddress] = React.useState("0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC");
  const { mutate, data } = useSendSponsoredTransaction();

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
    </>
  );
};

const SendGasTokenTransactionComponent = () => {
  const [value, setValue] = React.useState("");
  const [address, setAddress] = React.useState("0xe6dBb5C8696d2E0f90B875cbb6ef26E3bBa575AC");
  const { mutate, data } = useSendGasTokenTransaction();

  const handleSubmit = () => {
    const etherValue = parseEther(value);

    const tx = {
      to: address,
      value: etherValue,
    };

    mutate({
      manyOrOneTransactions: tx,
      preferredToken: "0x747A4168DB14F57871fa8cda8B5455D8C2a8e90a",
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
    </>
  );
};

export const SendGasTokenTransaction = () => {
  return (
    <Providers>
      <SendGasTokenTransactionComponent />
    </Providers>
  );
}

export const SendTransaction = (params: HookArgs) => {
  return (
    <Providers>
      <SendTransactionComponent {...params} />
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
