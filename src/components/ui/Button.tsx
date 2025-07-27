import clsx from "clsx";
import { ReactNode } from "react";

import FourDots from "./FourDots";

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
      className={clsx(
        "cursor-pointer items-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-neutral-950 shadow hover:bg-primary/90 h-10 rounded-full text-base py-2 px-4 flex justify-between flex-1 active:scale-95 transition-transform duration-300",
        className
      )}
      onClick={onClick}
    >
      <FourDots left />
      {children}
      <FourDots right />
    </button>
  );
}
