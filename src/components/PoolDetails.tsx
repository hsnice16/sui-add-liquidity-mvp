import clsx from "clsx";

import Button from "@/components/ui/Button";
import PoolDetail from "@/components/ui/PoolDetail";
import AddressWithCopy from "@/components/ui/AddressWithCopy";
import PoolPairAndChains from "@/components/ui/PoolPairAndChains";

import { getPoolConfig } from "@/utils/pool";
import useWindowWidth from "@/hooks/useWindowWidth";
import useDifferentAddrLen from "@/hooks/useDifferentAddrLen";

type PoolDetailsProps = {
  handleAddLiquidityClick: () => void;
};

export default function PoolDetails({
  handleAddLiquidityClick,
}: PoolDetailsProps) {
  const width = useWindowWidth();
  const poolConfig = getPoolConfig();

  const {
    kernelAddrEndCharsLen,
    kernelAddrStartCharsLen,
    tokenAddrEndCharsLen,
    tokenAddrStartCharsLen,
    poolIdAddrEndCharsLen,
    poolIdAddrStartCharsLen,
  } = useDifferentAddrLen(poolConfig.poolId);

  return (
    <>
      <PoolPairAndChains />
      <div
        className={clsx("flex flex-col md:flex-row mt-8", {
          "gap-4": width <= 370,
          "gap-10": width > 370,
        })}
      >
        <ul
          className={clsx("grid flex-1", {
            "grid-cols-2 gap-4": width > 370,
            "grid-cols-1 gap-0.5": width <= 370,
          })}
        >
          <li className="p-2">
            <PoolDetail title="Chain ID" body={poolConfig.chainId} />
          </li>
          <li className="p-2">
            <PoolDetail title="Description" body={poolConfig.description} />
          </li>
          <li className="p-2">
            <PoolDetail title="Fee" body={poolConfig.fee} />
          </li>
          <li className="p-2">
            <PoolDetail title="Src VM Type" body={poolConfig.srcVmType} />
          </li>
          <li className="p-2">
            <PoolDetail
              title="Kernel Factory"
              body={
                <AddressWithCopy
                  showShort
                  address={poolConfig.kernelFactoryStr}
                  endCharsLen={kernelAddrEndCharsLen}
                  startCharsLen={kernelAddrStartCharsLen}
                />
              }
            />
          </li>
          <li className="p-2">
            <PoolDetail
              title="Kernel Pool"
              body={
                <AddressWithCopy
                  showShort
                  address={poolConfig.kernelPoolStr}
                  endCharsLen={kernelAddrEndCharsLen}
                  startCharsLen={kernelAddrStartCharsLen}
                />
              }
            />
          </li>
          <li className="p-2">
            <PoolDetail
              title="Token0"
              body={
                <AddressWithCopy
                  showShort
                  address={poolConfig.token0}
                  endCharsLen={tokenAddrEndCharsLen}
                  startCharsLen={tokenAddrStartCharsLen}
                />
              }
            />
          </li>
          <li className="p-2">
            <PoolDetail
              title="Token0 Decimals"
              body={poolConfig.token0Decimals}
            />
          </li>
          <li className="p-2">
            <PoolDetail
              title="Token1"
              body={
                <AddressWithCopy
                  showShort
                  address={poolConfig.token1}
                  endCharsLen={tokenAddrEndCharsLen}
                  startCharsLen={tokenAddrStartCharsLen}
                />
              }
            />
          </li>
          <li className="p-2">
            <PoolDetail
              title="Token1 Decimals"
              body={poolConfig.token1Decimals}
            />
          </li>
          <li className="p-2">
            <PoolDetail
              title="Pool ID"
              body={
                <AddressWithCopy
                  showShort
                  address={poolConfig.poolId}
                  endCharsLen={poolIdAddrEndCharsLen}
                  startCharsLen={poolIdAddrStartCharsLen}
                />
              }
            />
          </li>
        </ul>

        <Button
          onClick={handleAddLiquidityClick}
          className={clsx(
            "w-full max-w-full md:max-w-[300px] lg:max-w-[400px]",
            {
              "h-12": width > 370,
              "text-sm h-10": width <= 370,
            }
          )}
        >
          Add Liquidity
        </Button>
      </div>
    </>
  );
}
