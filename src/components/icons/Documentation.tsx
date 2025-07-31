import clsx from "clsx";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function Documentation() {
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
      <path d="M12 7v14"></path>
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
    </svg>
  );
}
