import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

type StepsProps = {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
};

export function Steps({ activeStep, setActiveStep }: StepsProps) {
  return (
    <div className="border border-neutral-800 p-6 rounded-2xl min-w-[22rem]">
      <div
        className="cursor-pointer flex gap-4 items-start hover:opacity-90 transition-all"
        onClick={() => setActiveStep(1)}
      >
        <div
          className={clsx(
            "w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all",
            {
              "bg-neutral-800": activeStep !== 1,
              "bg-white text-background": activeStep === 1,
            }
          )}
        >
          1
        </div>
        <div className="flex flex-col">
          <span className="text-neutral-400 text-sm">Step 1</span>
          <span>Select token pair and fees</span>
        </div>
      </div>

      <div className="h-[32px] w-[2px] bg-neutral-800 mb-2.5 ml-3.5 rounded" />

      <div className="cursor-pointer flex gap-4 items-start hover:opacity-90 transition-all">
        <div
          className={clsx(
            "w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all",
            {
              "bg-neutral-800": activeStep !== 2,
              "bg-white text-background": activeStep === 2,
            }
          )}
        >
          2
        </div>
        <div className="flex flex-col">
          <span className="text-neutral-400 text-sm">Step 2</span>
          <span>Enter deposit amounts</span>
        </div>
      </div>
    </div>
  );
}
