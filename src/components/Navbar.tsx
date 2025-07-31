import Image from "next/image";
import Link from "next/link";

import Chains from "@/components/ui/Chains";
import ConnectButton from "@/components/ui/ConnectButton";

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4 flex justify-between items-center">
      <div className="flex items-center gap-10">
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
          Sui Add Liquidity MVP
        </a>

        <Link
          className="bg-primary-1000 text-primary text-base py-1.5 px-3 rounded-full font-medium flex justify-center items-center"
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
