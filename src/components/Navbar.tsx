import Link from "next/link";
import Image from "next/image";

import ConnectButton from "./ui/ConnectButton";
import Chains from "./ui/Chains";

export default function Navbar() {
  return (
    <nav className="h-[var(--header-height)] px-4 sticky top-0 z-[14] md:px-10 flex justify-between items-center text-center pt-0">
      <div className="absolute inset-0 pointer-events-none -z-[1] bg-background/90 backdrop-blur-md group-[&amp;:has(.mobile-nav)]/body:opacity-0 group-[&amp;:has(.mobile-nav)]/body:transition-opacity group-[&amp;:has(.mobile-nav)]/body:delay-200"></div>
      <div className="flex items-center gap-x-10">
        <a
          href="#"
          className="shrink-0 flex gap-2 items-center text-primary text-lg text-bold"
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
