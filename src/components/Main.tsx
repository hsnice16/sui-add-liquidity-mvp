import SkateAmmSdk, {
  Environment,
  PoolType,
} from "@skate-org/skate_amm_sui_sdk";

import PoolPairAndChains from "./ui/PoolPairAndChains";
import FourDots from "./ui/FourDots";
import AddressWithCopy from "./ui/AddressWithCopy";

export default function Main() {
  const sdk = new SkateAmmSdk(Environment.Staging);
  const poolConfig = sdk.getPoolConfig(PoolType.SUI_USDC);

  return (
    <main className="px-4 pb-10 pt-4 max-w-[1280px] mx-auto w-full">
      <div>
        <PoolPairAndChains />
      </div>

      <div className="flex gap-10 mt-8">
        <div className="space-y-5 flex-1">
          <section>
            <ul className="grid grid-cols-2 gap-4">
              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">Chain ID</span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <span>{poolConfig.chainId}</span>
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">Description</span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <span>{poolConfig.description}</span>
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">Fee</span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <span>{poolConfig.fee}</span>
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">Src VM Type</span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <span>{poolConfig.srcVmType}</span>
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">
                    Kernel Factory
                  </span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <AddressWithCopy
                      address={poolConfig.kernelFactoryStr}
                      showShort
                      startCharsLen={10}
                      endCharsLen={16}
                    />
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">Kernel Pool</span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <AddressWithCopy
                      address={poolConfig.kernelPoolStr}
                      showShort
                      startCharsLen={10}
                      endCharsLen={16}
                    />
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">Token0</span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <AddressWithCopy
                      address={poolConfig.token0}
                      showShort
                      startCharsLen={10}
                      endCharsLen={18}
                    />
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">
                    Token0 Decimals
                  </span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <span>{poolConfig.token0Decimals}</span>
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">Token1</span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <AddressWithCopy
                      address={poolConfig.token1}
                      showShort
                      startCharsLen={10}
                      endCharsLen={18}
                    />
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">
                    Token1 Decimals
                  </span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <span>{poolConfig.token1Decimals}</span>
                  </span>
                </div>
              </li>

              <li className="p-2">
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-400 text-sm">Pool ID</span>
                  <span className="text-xl font-medium flex gap-2 items-center">
                    <AddressWithCopy address={poolConfig.poolId} />
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className="w-[25rem] space-y-5">
          <div className="flex h-auto gap-3 relative bottom-0 left-0 right-0 bg-transparent border-t-0 border-neutral-900 p-0">
            <button className="items-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-neutral-950 shadow hover:bg-primary/90 h-12 rounded-full text-base px-4 flex justify-between flex-1 active:scale-95 transition-transform duration-300">
              <FourDots left />
              <span className="text-center min-w-fit">Add Liquidity</span>
              <FourDots right />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
