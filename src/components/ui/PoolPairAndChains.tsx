import clsx from "clsx";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function PoolPairAndChains() {
  const width = useWindowWidth();

  return (
    <div className="flex justify-start items-center gap-4 mt-3">
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center">
          <Image
            alt="sui-circle-logo"
            src="/sui-circle-logo.webp"
            width={width <= 370 ? 32 : 40}
            height={width <= 370 ? 32 : 40}
            className={clsx("border-4 border-background rounded-full", {
              "size-8": width <= 370,
              "size-10": width > 370,
            })}
          />
          <Image
            alt="usdc-logo"
            src="/usdc-logo.png"
            width={width <= 370 ? 32 : 40}
            height={width <= 370 ? 32 : 40}
            className={clsx("-ml-4 border-4 border-background rounded-full", {
              "size-8": width <= 370,
              "size-10": width > 370,
            })}
          />
        </div>

        <span
          className={clsx("font-medium", {
            "text-[2.5rem]": width > 670,
            "text-[1.5rem]": width <= 370,
            "text-[2rem]": width > 370 && width <= 670,
          })}
        >
          SUI/USDC
        </span>
      </div>

      <div className="flex justify-center items-center gap-1.5">
        <Image
          alt="sui-circle-logo"
          src="/sui-circle-logo.webp"
          width={width <= 370 ? 16 : 20}
          height={width <= 370 ? 16 : 20}
          className={clsx({ "size-4": width <= 370 })}
        />
        <span className="text-sm text-neutral-200">chain</span>
      </div>
    </div>
  );
}
