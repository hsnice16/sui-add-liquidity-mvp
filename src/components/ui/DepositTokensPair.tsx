import clsx from "clsx";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function DepositTokensPair() {
  const width = useWindowWidth();

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        <Image
          alt="sui-circle-logo"
          src="/sui-circle-logo.webp"
          width={width <= 445 ? 32 : 40}
          height={width <= 445 ? 32 : 40}
          className={clsx("border-4 border-background rounded-full", {
            "size-8": width <= 445,
            "size-10": width > 445,
          })}
        />

        <Image
          alt="usdc-logo"
          src="/usdc-logo.png"
          width={width <= 445 ? 32 : 40}
          height={width <= 445 ? 32 : 40}
          className={clsx("-ml-4 border-4 border-background rounded-full", {
            "size-8": width <= 445,
            "size-10": width > 445,
          })}
        />
      </div>

      <span
        className={clsx({
          "text-[1.5rem]": width > 445,
          "text-[1.15rem]": width <= 445,
        })}
      >
        SUI / USDC
      </span>
    </div>
  );
}
