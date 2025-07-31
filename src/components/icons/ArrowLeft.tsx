import clsx from "clsx";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function ArrowLeft() {
  const width = useWindowWidth();

  return (
    <svg
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx({ "h-4 w-4": width <= 370, "h-5 w-5": width > 370 })}
    >
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  );
}
