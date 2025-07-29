import clsx from "clsx";
import Image from "next/image";

type InputProps = {
  token: string;
  logoSrc: string;
  balance: number;
  value: string;
  handleChange: (changeForToken: string, value: string) => void;
  isError?: boolean;
};

export default function Input({
  token,
  logoSrc,
  balance,
  value,
  handleChange,
  isError,
}: InputProps) {
  return (
    <div className="bg-neutral-900 px-4 py-3 rounded-2xl flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          pattern="^\d*\.?\d*$"
          type="number"
          className={clsx("flex-1 outline-none text-[1.5rem]", {
            "text-red-400": isError,
          })}
          placeholder="0"
          value={value}
          onChange={(event) => handleChange(token, event.target.value)}
        />

        <div className="flex text-[1.15rem] gap-1 items-center">
          <Image
            alt="SUI"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="bg-neutral-1000 rounded-full object-cover block border-border-divider-blank border-solid border-[.25rem]"
            src={logoSrc}
            style={{ color: "transparent" }}
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
