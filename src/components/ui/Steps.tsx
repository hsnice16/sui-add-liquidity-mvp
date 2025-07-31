import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";

type StepsProps = {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
};

export function Steps({ activeStep, setActiveStep }: StepsProps) {
  const width = useWindowWidth();

  return (
    <div
      className={clsx(
        "border border-neutral-800 p-6 rounded-2xl hidden md:block",
        { "min-w-[360px]": width !== 768 }
      )}
    >
      <div
        className="cursor-pointer flex items-start gap-4 hover:opacity-90 transition-all duration-300"
        onClick={() => setActiveStep(1)}
      >
        <div
          className={clsx(
            "w-[32px] h-[32px] rounded-full flex justify-center items-center transition-all duration-300",
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

      <div className="cursor-pointer flex items-start gap-4 hover:opacity-90 transition-all duration-300">
        <div
          className={clsx(
            "w-[32px] h-[32px] rounded-full flex justify-center items-center transition-all duration-300",
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
