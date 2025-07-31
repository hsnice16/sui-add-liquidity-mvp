import clsx from "clsx";
import { ReactNode } from "react";

import FourDots from "@/components/ui/FourDots";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
};

export default function Button({
  onClick,
  className,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "cursor-pointer h-10 py-2 px-4 flex justify-between items-center text-neutral-950 text-base font-medium bg-primary shadow transition-transform duration-300 hover:bg-primary/90 rounded-full active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
    >
      <FourDots left />
      {children}
      <FourDots right />
    </button>
  );
}
