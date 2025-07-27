import { PoolConfig } from "@skate-org/skate_amm_sui_sdk";

import AddressWithCopy from "./ui/AddressWithCopy";
import Button from "./ui/Button";
import PoolPairAndChains from "./ui/PoolPairAndChains";

type PoolDetailsProps = {
  poolConfig: PoolConfig;
  handleAddLiquidityClick: () => void;
};

export default function PoolDetails({
  poolConfig,
  handleAddLiquidityClick,
}: PoolDetailsProps) {
  return (
    <>
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
            <Button onClick={handleAddLiquidityClick} className="h-12">
              <span className="text-center min-w-fit">Add Liquidity</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
