import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

import { FORM_STATE } from "@/types";
import Input from "@/components/ui/Input";
import useWindowWidth from "@/hooks/useWindowWidth";
import ArrowLeft from "@/components/icons/ArrowLeft";

type AdvanceProps = {
  formState: FORM_STATE;
  setFormState: Dispatch<SetStateAction<FORM_STATE>>;
};

export default function Advance({ formState, setFormState }: AdvanceProps) {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 border border-neutral-800 p-4 rounded-2xl transition-all duration-300">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full cursor-pointer flex justify-end items-center gap-0.5 text-[14px] text-neutral-200"
      >
        Advance
        <ArrowLeft
          className={clsx("mt-0.5 transition-all duration-300", {
            "rotate-270": open,
            "rotate-90": !open,
            "h-4! w-4!": width > 370,
            "h-3! w-3!": width <= 370,
          })}
        />
      </button>

      <div
        className={clsx(
          "w-full flex flex-col gap-2 transition-all duration-300",
          {
            "opacity-0 h-0 pointer-events-none": !open,
            "opacity-100 h-full pointer-events-auto": open,
          }
        )}
      >
        <p className="text-[14px]">Minimum Amount</p>
        <div
          className={clsx("flex gap-2", {
            "flex-row": width > 700,
            "flex-col": width <= 700,
          })}
        >
          <Input
            token="SUI"
            alt="sui-circle-logo"
            inputClassname="text-lg!"
            value={formState.suiMinAmount}
            logoSrc="/sui-circle-logo.webp"
            tokenClassname="block! text-sm!"
            logoTokenContainerClassname="gap-1!"
            logoClassname={clsx("size-4!", {
              "hidden!": width <= 365,
            })}
            handleChange={(value) =>
              setFormState((prev) => ({ ...prev, suiMinAmount: value }))
            }
          />

          <Input
            token="USDC"
            alt="usdc-logo"
            logoSrc="/usdc-logo.png"
            inputClassname="text-lg!"
            value={formState.usdcMinAmount}
            tokenClassname="block! text-sm!"
            logoTokenContainerClassname="gap-1!"
            logoClassname={clsx("size-4!", {
              "hidden!": width <= 365,
            })}
            handleChange={(value) =>
              setFormState((prev) => ({ ...prev, usdcMinAmount: value }))
            }
          />
        </div>

        <p className="text-[14px]">Tick</p>
        <div
          className={clsx("flex gap-2", {
            "flex-row": width > 700,
            "flex-col": width <= 700,
          })}
        >
          <Input
            token="LOWER"
            inputClassname="text-lg!"
            value={formState.tickLower}
            tokenClassname="block! text-sm!"
            handleChange={(value) =>
              setFormState((prev) => ({ ...prev, tickLower: value }))
            }
          />
          <Input
            token="UPPER"
            inputClassname="text-lg!"
            value={formState.tickUpper}
            tokenClassname="block! text-sm!"
            handleChange={(value) =>
              setFormState((prev) => ({ ...prev, tickUpper: value }))
            }
          />
        </div>
      </div>
    </div>
  );
}
