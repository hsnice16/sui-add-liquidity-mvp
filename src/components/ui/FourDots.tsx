import clsx from "clsx";
import useWindowWidth from "@/hooks/useWindowWidth";

type FourDotsProps = {
  left?: boolean;
  right?: boolean;
};

export default function FourDots({ left, right }: FourDotsProps) {
  const width = useWindowWidth();

  return (
    <span
      className={clsx("grid grid-cols-2", {
        "mr-2.5": left,
        "ml-2.5": right,
        "gap-1.5": width > 370,
        "gap-0.5": width <= 370,
      })}
    >
      <span className="size-[3px] rounded-full bg-primary-foreground/40"></span>
      <span className="size-[3px] rounded-full bg-primary-foreground/40"></span>
      <span className="size-[3px] rounded-full bg-primary-foreground/40"></span>
      <span className="size-[3px] rounded-full bg-primary-foreground/40"></span>
    </span>
  );
}
