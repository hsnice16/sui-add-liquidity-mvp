import Link from "next/link";
import Image from "next/image";

import ConnectButton from "./ui/ConnectButton";
import Chains from "./ui/Chains";

export default function Navbar() {
  return (
    <nav className="max-w-[1880px] mx-auto h-[var(--header-height)] px-4 sticky top-0 z-[14] flex justify-between items-center text-center pt-0">
      <div className="flex items-center gap-x-10">
        <a
          href="#"
          className="shrink-0 flex gap-2 items-center text-primary text-lg font-bold"
        >
          <Image
            alt="Brand Logo"
            loading="lazy"
            width={28}
            height={28}
            decoding="async"
            data-nimg="1"
            className="object-contain"
            src="/brand-logo.png"
            style={{ color: "transparent" }}
          />
          Sui Add Liquidity MVP
        </a>
        <div className="flex items-center gap-x-4">
          <Link
            className="text-base w-fit py-1.5 px-3 rounded-full font-medium flex gap-2 items-center justify-center bg-primary-1000 text-primary"
            href="/"
          >
            Pools
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-2">
          <Chains />
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
}
