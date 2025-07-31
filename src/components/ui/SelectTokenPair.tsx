import Image from "next/image";
import Button from "@/components/ui/Button";
import { getPoolConfig } from "@/utils/pool";

type SelectTokenPairProps = {
  handleContinueClick: () => void;
};

export function SelectTokenPair({ handleContinueClick }: SelectTokenPairProps) {
  const poolConfig = getPoolConfig();

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
              width={18}
              height={18}
              className="size-4.5"
              alt="sui-circle-logo"
              src="/sui-circle-logo.webp"
            />
            SUI
          </button>

          <button className="flex-1 cursor-pointer bg-neutral-900 flex items-center gap-2 px-4 py-3 text-lg rounded-2xl">
            <Image
              width={18}
              height={18}
              alt="usdc-logo"
              className="size-4.5"
              src="/usdc-logo.png"
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

      <Button onClick={handleContinueClick} className="w-full h-12">
        Continue
      </Button>
    </div>
  );
}
