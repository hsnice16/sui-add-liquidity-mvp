import { Toast } from "primereact/toast";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Advance from "@/components/ui/Advance";
import DepositTokensHead from "@/components/ui/DepositTokensHead";

import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
} from "@mysten/dapp-kit";

import { getPoolConfig, mint } from "@/utils/pool";
import { INITIAL_FORM_STATE } from "@/data/constants";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { FORM_STATE } from "@/types";
import { getCoinsForTx, formatSmallBalance } from "@/utils/wallet";
import useTokensWalletBalance from "@/hooks/useTokensWalletBalance";

export function DepositTokens() {
  const currentAccount = useCurrentAccount();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();

  const toast = useRef<Toast>(null);
  const poolConfig = useMemo(() => getPoolConfig(), []);
  const { suiBalance, usdcBalance } = useTokensWalletBalance();
  const [error, setError] = useState<Record<string, string>>({});
  const [formState, setFormState] = useState<FORM_STATE>(INITIAL_FORM_STATE);

  /**
   * SUI & USDC Input Check
   */
  useEffect(() => {
    if (Number(formState.suiValue) <= suiBalance) {
      setError((prev) => ({ ...prev, "sui-input": "" }));
    } else {
      setError((prev) => ({
        ...prev,
        "sui-input": "Insufficient SUI Balance",
      }));
    }

    if (Number(formState.usdcValue) <= usdcBalance) {
      setError((prev) => ({ ...prev, "usdc-input": "" }));
    } else {
      setError((prev) => ({
        ...prev,
        "usdc-input": "Insufficient USDC Balance",
      }));
    }
  }, [formState.suiValue, formState.usdcValue, suiBalance, usdcBalance]);

  /**
   * Advance Input Check
   */
  useEffect(() => {
    if (!formState.tickLower) {
      setError((prev) => ({
        ...prev,
        "tick-lower-input": "(Adv) Enter Tick Lower Amount",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        "tick-lower-input": "",
      }));
    }

    if (!formState.tickUpper) {
      setError((prev) => ({
        ...prev,
        "tick-upper-input": "(Adv) Enter Tick Upper Amount",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        "tick-upper-input": "",
      }));
    }

    if (!formState.suiMinAmount) {
      setError((prev) => ({
        ...prev,
        "sui-min-amount-input": "(Adv) Enter SUI Min Amount",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        "sui-min-amount-input": "",
      }));
    }

    if (!formState.usdcMinAmount) {
      setError((prev) => ({
        ...prev,
        "usdc-min-amount-input": "(Adv) Enter USDC Min Amount",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        "usdc-min-amount-input": "",
      }));
    }
  }, [
    formState.tickLower,
    formState.tickUpper,
    formState.suiMinAmount,
    formState.usdcMinAmount,
  ]);

  const buttonText = useMemo(() => {
    if (!currentAccount) {
      return "Connect Wallet";
    }

    const errorText =
      error["sui-input"] ||
      error["usdc-input"] ||
      error["tick-lower-input"] ||
      error["tick-upper-input"] ||
      error["sui-min-amount-input"] ||
      error["usdc-min-amount-input"];

    if (errorText) {
      return errorText;
    }

    if (Number(formState.suiValue) && Number(formState.usdcValue)) {
      return "Deposit";
    }

    return "Enter an amount";
  }, [currentAccount, error, formState.suiValue, formState.usdcValue]);

  const handleDeposit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token0Value = formatSmallBalance(
      formState.suiValue,
      poolConfig.token0Decimals
    );
    const coins0 = await getCoinsForTx(
      currentAccount?.address ?? "",
      token0Value,
      poolConfig.token0
    );

    const token1Value = formatSmallBalance(
      formState.usdcValue,
      poolConfig.token1Decimals
    );
    const coins1 = await getCoinsForTx(
      currentAccount?.address ?? "",
      token1Value,
      poolConfig.token1
    );

    const tx = await mint(
      token0Value,
      token1Value,
      coins0,
      coins1,
      formState.tickLower,
      formState.tickUpper,
      formState.suiMinAmount,
      formState.usdcMinAmount
    );

    signAndExecuteTransaction(
      { transaction: tx },
      {
        onSuccess: (result) => {
          setFormState(INITIAL_FORM_STATE);

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
            balance={suiBalance}
            alt="sui-circle-logo"
            value={formState.suiValue}
            isError={!!error["sui-input"]}
            logoSrc="/sui-circle-logo.webp"
            handleChange={(value) =>
              setFormState((prev) => ({ ...prev, suiValue: value }))
            }
          />

          <Input
            token="USDC"
            alt="usdc-logo"
            balance={usdcBalance}
            logoSrc="/usdc-logo.png"
            value={formState.usdcValue}
            isError={!!error["usdc-input"]}
            handleChange={(value) =>
              setFormState((prev) => ({ ...prev, usdcValue: value }))
            }
          />
        </div>

        <Advance formState={formState} setFormState={setFormState} />
        <Button disabled={buttonText !== "Deposit"} className="w-full h-12">
          {buttonText}
        </Button>
      </form>
    </div>
  );
}
