import Image from "next/image";

export default function PoolPairAndChains() {
  return (
    <div className="flex justify-start items-center gap-4 mt-3">
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center">
          <Image
            width={40}
            height={40}
            alt="sui-circle-logo"
            src="/sui-circle-logo.webp"
            className="size-10 border-4 border-background rounded-full"
          />
          <Image
            width={40}
            height={40}
            alt="usdc-logo"
            src="/usdc-logo.png"
            className="size-10 -ml-4 border-4 border-background rounded-full"
          />
        </div>

        <span className="font-medium text-[2.5rem]">SUI/USDC</span>
      </div>

      <div className="flex justify-center items-center gap-1.5">
        <Image
          width={20}
          height={20}
          alt="sui-circle-logo"
          src="/sui-circle-logo.webp"
        />
        <span className="text-sm text-neutral-200">chain</span>
      </div>
    </div>
  );
}
