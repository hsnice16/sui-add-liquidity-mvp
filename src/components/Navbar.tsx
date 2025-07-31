import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import Chains from "@/components/ui/Chains";
import useWindowWidth from "@/hooks/useWindowWidth";
import ConnectButton from "@/components/ui/ConnectButton";

export default function Navbar() {
  const width = useWindowWidth();

  return (
    <nav className="w-full py-6 px-4 flex justify-between items-center">
      <div className="flex items-center gap-4 md:gap-10">
        <a
          href="#"
          className="flex items-center gap-2 text-primary text-lg font-bold"
        >
          <Image
            width={28}
            height={28}
            alt="brand-logo"
            src="/brand-logo.png"
          />
          <span className={clsx({ block: width >= 525, hidden: width < 525 })}>
            Sui Add Liquidity MVP
          </span>
        </a>

        <Link
          className={clsx(
            "bg-primary-1000 text-primary py-1.5 px-3 rounded-full font-medium flex justify-center items-center",
            { "text-sm": width <= 370, "text-base": width > 370 }
          )}
          href="/"
        >
          Pools
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Chains />
        <ConnectButton />
      </div>
    </nav>
  );
}
