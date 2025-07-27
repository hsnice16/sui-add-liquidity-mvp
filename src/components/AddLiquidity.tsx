import { useState } from "react";

import { PoolConfig } from "@skate-org/skate_amm_sui_sdk";

import { DepositTokens } from "./ui/DepositTokens";
import { SelectTokenPair } from "./ui/SelectTokenPair";
import { Steps } from "./ui/Steps";

type AddLiquidityProps = {
  handleGoBackClick: () => void;
  poolConfig: PoolConfig;
};

export default function AddLiquidity({
  handleGoBackClick,
  poolConfig,
}: AddLiquidityProps) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <div>
        <button
          className="cursor-pointer font-medium active:scale-95 origin-left transition-transform duration-300 leading-6 text-base flex gap-1.5 items-center px-1 py-3"
          onClick={handleGoBackClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          Go Back
        </button>
        <section className="mt-3">
          <span className="whitespace-nowrap block text-[2.5rem] leading-[3rem] ml-3">
            Add Liquidity
          </span>
        </section>
      </div>

      <div className="flex items-start gap-6 mt-6">
        <Steps activeStep={activeStep} setActiveStep={setActiveStep} />

        {activeStep === 1 ? (
          <SelectTokenPair
            poolConfig={poolConfig}
            handleContinueClick={() => setActiveStep(2)}
          />
        ) : null}

        {activeStep === 2 ? <DepositTokens /> : null}
      </div>
    </>
  );
}
