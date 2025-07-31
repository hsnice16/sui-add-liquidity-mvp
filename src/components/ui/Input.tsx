import clsx from "clsx";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";

type InputProps = {
  alt: string;
  value: string;
  token: string;
  logoSrc: string;
  balance: number;
  isError?: boolean;
  handleChange: (value: string) => void;
};

export default function Input({
  alt,
  value,
  token,
  isError,
  logoSrc,
  balance,
  handleChange,
}: InputProps) {
  const width = useWindowWidth();

  return (
    <div className="bg-neutral-900 px-4 py-3 rounded-2xl flex flex-col gap-2">
      <div className="flex gap-2 md:gap-1 lg:gap-2">
        <input
          value={value}
          type="number"
          placeholder="0"
          pattern="^\d*\.?\d*$"
          onChange={(event) => handleChange(event.target.value)}
          className={clsx("flex-1 outline-none", {
            "text-red-400": isError,
            "text-[1.5rem]": width > 445,
            "text-[1.15rem]": width <= 445,
          })}
        />

        <div
          className={clsx("flex items-center", {
            "gap-1 text-base": width <= 445,
            "gap-2 md:gap-1 lg:gap-2 text-[1.15rem] md:text-[0.8rem] lg:text-[1.15rem]":
              width > 445,
          })}
        >
          <Image
            alt={alt}
            width={24}
            height={24}
            src={logoSrc}
            className={clsx({
              "size-4": width <= 445,
              hidden: width >= 768 && width < 790,
              "size-6 md:size-4 lg:size-6": width > 445,
            })}
          />

          <span
            className={clsx("font-semibold", {
              block: width > 390,
              hidden: width <= 390,
            })}
          >
            {token}
          </span>
        </div>
      </div>

      <p
        className={clsx("text-right text-neutral-400 text-sm", {
          "text-red-400": isError,
        })}
      >
        {balance} {token}
      </p>
    </div>
  );
}
