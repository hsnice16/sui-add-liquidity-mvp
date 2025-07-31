import { useState } from "react";

import ArrowLeft from "@/components/icons/ArrowLeft";
import { DepositTokens } from "@/components/ui/DepositTokens";
import { SelectTokenPair } from "@/components/ui/SelectTokenPair";
import { Steps } from "@/components/ui/Steps";

type AddLiquidityProps = {
  handleGoBackClick: () => void;
};

export default function AddLiquidity({ handleGoBackClick }: AddLiquidityProps) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <button
        className="cursor-pointer font-medium text-base flex items-center gap-1.5 px-1 py-3 active:scale-95 transition-transform duration-300"
        onClick={handleGoBackClick}
      >
        <ArrowLeft />
        Go Back
      </button>
      <p className="text-[2.5rem] ml-3 mt-4">Add Liquidity</p>

      <div className="flex items-start gap-6 mt-6">
        <Steps activeStep={activeStep} setActiveStep={setActiveStep} />

        {activeStep === 1 ? (
          <SelectTokenPair handleContinueClick={() => setActiveStep(2)} />
        ) : null}

        {activeStep === 2 ? <DepositTokens /> : null}
      </div>
    </>
  );
}
