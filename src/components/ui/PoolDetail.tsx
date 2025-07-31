import clsx from "clsx";
import { ReactNode } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";

type PoolDetailProps = {
  title: string;
  body: ReactNode;
};

export default function PoolDetail({ title, body }: PoolDetailProps) {
  const width = useWindowWidth();

  return (
    <div className="flex flex-col justify-center items-start gap-1">
      <span className="text-sm text-neutral-400">{title}</span>
      <span
        className={clsx("font-medium", {
          "text-xl": width > 370,
          "text-sm": width <= 370,
        })}
      >
        {body}
      </span>
    </div>
  );
}
