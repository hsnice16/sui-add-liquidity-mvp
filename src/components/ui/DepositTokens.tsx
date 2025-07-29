import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Toast } from "primereact/toast";

import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
  useSuiClientQuery,
} from "@mysten/dapp-kit";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { isSuiCoin } from "@skate-org/skate_amm_sui_sdk/dist/utils/transactionHelpers";
import { getPoolConfig, getPoolTokensBalance, mint } from "@/utils/pool";

import {
  formatBigBalance,
  formatSmallBalance,
  getCoinsForTx,
} from "@/utils/wallet";

import Button from "./Button";
import Input from "./Input";

export function DepositTokens() {
  const currentAccount = useCurrentAccount();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();

  const { data } = useSuiClientQuery("getAllBalances", {
    owner: currentAccount?.address ?? "",
  });

  const toast = useRef<Toast>(null);
  const poolConfig = useMemo(() => getPoolConfig(), []);
  const [forceRerender, setForceRerender] = useState(false);

  const [suiValue, setSuiValue] = useState("");
  const [usdcValue, setUsdcValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const [suiEqUSDC, setSuiEqUSDC] = useState("");
  const [usdcEqSui, setUsdcEqSui] = useState("");

  useEffect(() => {
    (async function () {
      const poolTokensBalance = await getPoolTokensBalance();

      const suiEqUSDC =
        Number(poolTokensBalance.token1_balance) /
        Number(poolTokensBalance.token0_balance);

      const usdcEqSui =
        Number(poolTokensBalance.token0_balance) /
        Number(poolTokensBalance.token1_balance);

      setSuiEqUSDC(suiEqUSDC.toFixed(poolConfig.token1Decimals));
      setUsdcEqSui(usdcEqSui.toFixed(poolConfig.token0Decimals));
    })();
  }, [poolConfig, forceRerender]);

  const { suiBalance, usdcBalance } = useMemo(() => {
    if (data?.length) {
      const suiToken = data.filter((token) => isSuiCoin(token.coinType))?.[0];

      const usdcToken = data.filter(
        (token) =>
          token.coinType.toLowerCase() === poolConfig.token1.toLowerCase()
      )?.[0];

      return {
        suiBalance: formatBigBalance(
          suiToken?.totalBalance ?? 0,
          poolConfig.token0Decimals
        ),
        usdcBalance: formatBigBalance(
          usdcToken?.totalBalance ?? 0,
          poolConfig.token1Decimals
        ),
      };
    }

    return { suiBalance: 0, usdcBalance: 0 };
  }, [
    data,
    poolConfig.token0Decimals,
    poolConfig.token1,
    poolConfig.token1Decimals,
  ]);

  const buttonText = useMemo(() => {
    if (!currentAccount) {
      return "Connect Wallet";
    }

    if (errorText) {
      return errorText;
    }

    if (suiValue && usdcValue) {
      return "Deposit";
    }

    return "Enter an amount";
  }, [currentAccount, errorText, suiValue, usdcValue]);

  const handleChange = (changeForToken: string, value: string) => {
    setErrorText("");

    if (Number(value) > suiBalance || Number(value) > usdcBalance) {
      setErrorText("Insufficient Balance");
    }

    switch (changeForToken) {
      case "SUI": {
        setSuiValue(value);
        setUsdcValue(
          String(
            // Converting back to number to truncate trailing zeroes
            +(Number(suiEqUSDC) * Number(value)).toFixed(
              poolConfig.token1Decimals
            )
          )
        );

        break;
      }
      case "USDC": {
        setUsdcValue(value);
        setSuiValue(
          String(
            +(Number(usdcEqSui) * Number(value)).toFixed(
              poolConfig.token0Decimals
            )
          )
        );

        break;
      }
    }
  };

  const handleDeposit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token0Value = formatSmallBalance(suiValue, poolConfig.token0Decimals);
    const coins0 = await getCoinsForTx(
      currentAccount?.address ?? "",
      token0Value,
      poolConfig.token0
    );

    const token1Value = formatSmallBalance(
      usdcValue,
      poolConfig.token1Decimals
    );
    const coins1 = await getCoinsForTx(
      currentAccount?.address ?? "",
      token1Value,
      poolConfig.token1
    );

    const tx = await mint(token0Value, token1Value, coins0, coins1);
    signAndExecuteTransaction(
      { transaction: tx },
      {
        onSuccess: (result) => {
          setSuiValue("");
          setUsdcValue("");
          setForceRerender((prev) => !prev);

          toast.current?.show({
            severity: "success",
            summary: "Success",
            detail: (
              <div className="flex">
                Check on explorer:
                <a
                  target="_blank"
                  href={`https://suiscan.xyz/mainnet/tx/${result.digest}`}
                  className="ml-1 underline flex items-center gap-0.5"
                >
                  suiscan.xyz <ArrowUpRightIcon size={14} className="mt-0.5" />
                </a>
              </div>
            ),
            life: 3000,
          });
        },
        onError: (error) => {
          toast.current?.show({
            severity: "error",
            summary: "Error",
            detail: error.message,
            life: 3000,
          });
        },
      }
    );
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      <Toast ref={toast} position="bottom-right" />
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

        <p className="text-sm mt-1 pl-1">
          <span className="text-neutral-400">Market price: </span>
          <span className="font-semibold">{suiEqUSDC} USDC = 1 SUI (-)</span>
        </p>
      </div>

      <form
        className="w-full border border-neutral-800 p-6 rounded-2xl flex flex-col gap-6"
        onSubmit={handleDeposit}
      >
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
          <Button disabled={buttonText !== "Deposit"} className="w-full h-12">
            <span className="text-center min-w-fit">{buttonText}</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
