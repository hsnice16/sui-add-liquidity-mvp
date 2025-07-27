import Image from "next/image";

export default function PoolPairAndChains() {
  return (
    <section className="flex gap-3 items-center mt-3 flex-wrap">
      <div
        role="group"
        className="relative flex items-center w-max font-medium"
      >
        <div className="flex">
          <Image
            alt="SUI"
            loading="lazy"
            width="60"
            height="60"
            decoding="async"
            data-nimg="1"
            className="bg-neutral-1000 rounded-full object-cover block border-border-divider-blank border-solid size-10 border-[.25rem]"
            src="/sui-circle-logo.webp"
            style={{ color: "transparent" }}
          />
          <Image
            alt="USDC"
            loading="lazy"
            width="60"
            height="60"
            decoding="async"
            data-nimg="1"
            className="bg-neutral-1000 rounded-full object-cover block border-border-divider-blank border-solid size-10 border-[.25rem] ml-[-0.75rem]"
            src="/usdc-logo.png"
            style={{ color: "transparent" }}
          />
        </div>
        <span className="whitespace-nowrap block text-[2.5rem] leading-[3rem] ml-3">
          SUI/USDC
        </span>
      </div>

      <div role="group" className="relative flex items-center w-max">
        <div className="flex">
          <Image
            alt="sui-logo"
            loading="lazy"
            width="36"
            height="36"
            decoding="async"
            data-nimg="1"
            className="bg-neutral-1000 rounded-full object-cover block border-border-divider-blank border-solid size-6 border-[.1875rem]"
            src="/sui-circle-logo.webp"
            style={{ color: "transparent" }}
          />
        </div>
        <span className="whitespace-nowrap block text-sm ml-1.5 text-neutral-200">
          chain
        </span>
      </div>
    </section>
  );
}
