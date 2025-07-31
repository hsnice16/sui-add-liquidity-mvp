import { clsx } from "clsx";

import X from "@/components/icons/X";
import Email from "@/components/icons/Email";
import Discord from "@/components/icons/Discord";
import Telegram from "@/components/icons/Telegram";
import Documentation from "@/components/icons/Documentation";

import useWindowWidth from "@/hooks/useWindowWidth";

export default function Footer() {
  const width = useWindowWidth();

  return (
    <footer
      className={clsx(
        "w-full py-6 px-4 border-t border-neutral-900 flex justify-between items-center",
        {
          "flex-row": width > 550,
          "flex-col gap-4": width <= 550,
        }
      )}
    >
      <div
        className={clsx("flex items-center gap-1", {
          "text-sm": width <= 370,
          "text-base": width > 370,
        })}
      >
        <p>Sui Add Liquidity MVP</p>
        <span className="text-neutral-600">•</span>
        <p>Copyright 2025</p>
      </div>

      <div
        className={clsx("flex items-center", {
          "gap-6": width > 370,
          "gap-4": width <= 370,
        })}
      >
        <a href="#">
          <Documentation />
        </a>
        <a href="#">
          <Email />
        </a>
        <a href="#">
          <Discord />
        </a>
        <a href="#">
          <Telegram />
        </a>
        <a href="#">
          <X />
        </a>
      </div>
    </footer>
  );
}
