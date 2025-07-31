import clsx from "clsx";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function Email() {
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
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}
