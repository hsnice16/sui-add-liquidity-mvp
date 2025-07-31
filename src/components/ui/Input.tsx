import clsx from "clsx";
import Image from "next/image";

type InputProps = {
  token: string;
  logoSrc: string;
  balance: number;
  value: string;
  alt: string;
  handleChange: (changeForToken: string, value: string) => void;
  isError?: boolean;
};

export default function Input({
  token,
  logoSrc,
  balance,
  value,
  alt,
  handleChange,
  isError,
}: InputProps) {
  return (
    <div className="bg-neutral-900 px-4 py-3 rounded-2xl flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          value={value}
          type="number"
          placeholder="0"
          pattern="^\d*\.?\d*$"
          onChange={(event) => handleChange(token, event.target.value)}
          className={clsx("flex-1 outline-none text-[1.5rem]", {
            "text-red-400": isError,
          })}
        />

        <div className="flex text-[1.15rem] gap-2 items-center">
          <Image
            alt={alt}
            width={24}
            height={24}
            src={logoSrc}
            className="size-6"
          />

          <span className="font-semibold">{token}</span>
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
