import clsx from "clsx";

type FourDotsProps = {
  left?: boolean;
  right?: boolean;
};

export default function FourDots({ left, right }: FourDotsProps) {
  return (
    <span
      className={clsx("grid grid-cols-2 gap-1.5", {
        "mr-2.5": left,
        "ml-2.5": right,
      })}
    >
      <span className="size-[3px] rounded-full bg-primary-foreground/40"></span>
      <span className="size-[3px] rounded-full bg-primary-foreground/40"></span>
      <span className="size-[3px] rounded-full bg-primary-foreground/40"></span>
      <span className="size-[3px] rounded-full bg-primary-foreground/40"></span>
    </span>
  );
}
