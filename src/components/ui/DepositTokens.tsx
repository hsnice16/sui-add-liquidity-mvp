import { Toast } from "primereact/toast";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import DepositTokensHead from "@/components/ui/DepositTokensHead";

import {
  useCurrentAccount,
  useSuiClientQuery,
  useSignAndExecuteTransaction,
} from "@mysten/dapp-kit";

import { getPoolConfig, mint } from "@/utils/pool";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { isSuiCoin } from "@skate-org/skate_amm_sui_sdk/dist/utils/transactionHelpers";

import {
  getCoinsForTx,
  formatBigBalance,
  formatSmallBalance,
} from "@/utils/wallet";

export function DepositTokens() {
  const currentAccount = useCurrentAccount();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();

  const { data } = useSuiClientQuery("getAllBalances", {
    owner: currentAccount?.address ?? "",
  });

  const toast = useRef<Toast>(null);
  const poolConfig = useMemo(() => getPoolConfig(), []);

  const [suiValue, setSuiValue] = useState("");
  const [usdcValue, setUsdcValue] = useState("");
  const [error, setError] = useState<Record<string, string>>({});

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
    poolConfig.token1,
    poolConfig.token0Decimals,
    poolConfig.token1Decimals,
  ]);

  useEffect(() => {
    if (Number(suiValue) <= suiBalance) {
      setError((prev) => ({ ...prev, "sui-input": "" }));
    } else {
      setError((prev) => ({
        ...prev,
        "sui-input": "Insufficient SUI Balance",
      }));
    }

    if (Number(usdcValue) <= usdcBalance) {
      setError((prev) => ({ ...prev, "usdc-input": "" }));
    } else {
      setError((prev) => ({
        ...prev,
        "usdc-input": "Insufficient USDC Balance",
      }));
    }
  }, [suiBalance, suiValue, usdcBalance, usdcValue]);

  const buttonText = useMemo(() => {
    if (!currentAccount) {
      return "Connect Wallet";
    }

    if (error["sui-input"] || error["usdc-input"]) {
      return error["sui-input"] || error["usdc-input"];
    }

    if (suiValue && usdcValue) {
      return "Deposit";
    }

    return "Enter an amount";
  }, [currentAccount, error, suiValue, usdcValue]);

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

          toast.current?.show({
            life: 3000,
            summary: "Success",
            severity: "success",
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
          });
        },
        onError: (error) => {
          toast.current?.show({
            life: 3000,
            summary: "Error",
            severity: "error",
            detail: error.message,
          });
        },
      }
    );
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      <Toast ref={toast} position="bottom-right" />
      <DepositTokensHead />

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
            value={suiValue}
            balance={suiBalance}
            alt="sui-circle-logo"
            isError={!!error["sui-input"]}
            logoSrc="/sui-circle-logo.webp"
            handleChange={(value) => setSuiValue(value)}
          />

          <Input
            token="USDC"
            alt="usdc-logo"
            value={usdcValue}
            balance={usdcBalance}
            logoSrc="/usdc-logo.png"
            isError={!!error["usdc-input"]}
            handleChange={(value) => setUsdcValue(value)}
          />
        </div>

        <Button disabled={buttonText !== "Deposit"} className="w-full h-12">
          {buttonText}
        </Button>
      </form>
    </div>
  );
}
