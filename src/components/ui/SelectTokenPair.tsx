import Image from "next/image";

import { PoolConfig } from "@skate-org/skate_amm_sui_sdk";

import Button from "./Button";

type SelectTokenPairProps = {
  poolConfig: PoolConfig;
  handleContinueClick: () => void;
};

export function SelectTokenPair({
  poolConfig,
  handleContinueClick,
}: SelectTokenPairProps) {
  return (
    <div className="border border-neutral-800 p-6 rounded-2xl flex-1 flex flex-col gap-8">
      <div className="flex flex-col">
        <p className="font-semibold">Select pair</p>
        <p className="text-neutral-400">
          Choose the tokens you want to provide liquidity for. You can select
          tokens on all supported networks.
        </p>

        <div className="flex gap-6 mt-4">
          <button className="flex-1 cursor-pointer bg-neutral-900 flex items-center gap-2 px-4 py-3 text-lg rounded-2xl">
            <Image
              alt="SUI"
              loading="lazy"
              width={28}
              height={28}
              decoding="async"
              data-nimg="1"
              className="bg-neutral-1000 rounded-full object-cover block border-border-divider-blank border-solid border-[.25rem]"
              src="/sui-circle-logo.webp"
              style={{ color: "transparent" }}
            />
            SUI
          </button>

          <button className="flex-1 cursor-pointer bg-neutral-900 flex items-center gap-2 px-4 py-3 text-lg rounded-2xl">
            <Image
              alt="USDC"
              loading="lazy"
              width={28}
              height={28}
              decoding="async"
              data-nimg="1"
              className="bg-neutral-1000 rounded-full object-cover block border-border-divider-blank border-solid border-[.25rem]"
              src="/usdc-logo.png"
              style={{ color: "transparent" }}
            />
            USDC
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-semibold">Fee tier</p>
        <p className="text-neutral-400">
          The amount earned providing liquidity. All pools have fixed{" "}
          {poolConfig.fee} fees.
        </p>
      </div>

      <div>
        <Button onClick={handleContinueClick} className="w-full h-12">
          <span className="text-center min-w-fit">Continue</span>
        </Button>
      </div>
    </div>
  );
}
