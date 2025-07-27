import { useMemo, useState } from "react";
import Image from "next/image";

import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";

import Button from "./Button";
import Input from "./Input";

export function DepositTokens() {
  const currentAccount = useCurrentAccount();
  const { data } = useSuiClientQuery("getAllBalances", {
    owner: currentAccount?.address ?? "",
  });

  const { suiBalance, usdcBalance } = useMemo(() => {
    if (data?.length) {
      const suiToken = data.filter((token) =>
        token.coinType.toLowerCase().endsWith("::sui")
      )?.[0];

      return {
        suiBalance: Number(suiToken?.totalBalance ?? 0) / 10 ** 9,
        usdcBalance: 0,
      };
    }

    return { suiBalance: 0, usdcBalance: 0 };
  }, [data]);

  const [suiValue, setSuiValue] = useState("");
  const [usdcValue, setUsdcValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const buttonText = useMemo(() => {
    if (!currentAccount) {
      return "Connect Wallet";
    }

    if (errorText) {
      return errorText;
    }

    return "Enter an amount";
  }, [currentAccount, errorText]);

  const handleChange = (changeForToken: string, value: string) => {
    setErrorText("");

    if (Number(value) > suiBalance || Number(value) > usdcBalance) {
      setErrorText("Insufficient Balance");
    }

    switch (changeForToken) {
      case "SUI": {
        setSuiValue(value);
        setUsdcValue(value);

        break;
      }
      case "USDC": {
        setUsdcValue(value);
        setSuiValue(value);

        break;
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="w-full border border-neutral-800 p-6 rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="flex">
            <Image
              alt="SUI"
              loading="lazy"
              width="44"
              height="44"
              decoding="async"
              data-nimg="1"
              className="bg-neutral-1000 rounded-full object-cover block border-border-divider-blank border-solid border-[.25rem]"
              src="/sui-circle-logo.webp"
              style={{ color: "transparent" }}
            />

            <Image
              alt="USDC"
              loading="lazy"
              width="44"
              height="44"
              decoding="async"
              data-nimg="1"
              className="bg-neutral-1000 rounded-full object-cover block border-border-divider-blank border-solid border-[.25rem] ml-[-0.75rem]"
              src="/usdc-logo.png"
              style={{ color: "transparent" }}
            />
          </div>
          <span className="text-[1.5rem]">SUI / USDC</span>
        </div>
      </div>

      <div className="w-full border border-neutral-800 p-6 rounded-2xl flex flex-col gap-6">
        <div>
          <p className="font-semibold text-[1.15rem]">Deposit tokens</p>
          <p className="text-neutral-400">
            Specify the token amounts for your liquidity contribution.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            token="SUI"
            logoSrc="/sui-circle-logo.webp"
            balance={suiBalance}
            value={suiValue}
            handleChange={handleChange}
            isError={!!errorText.length}
          />

          <Input
            token="USDC"
            logoSrc="/usdc-logo.png"
            balance={usdcBalance}
            value={usdcValue}
            handleChange={handleChange}
            isError={!!errorText.length}
          />
        </div>

        <div>
          <Button disabled className="w-full h-12">
            <span className="text-center min-w-fit">{buttonText}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
