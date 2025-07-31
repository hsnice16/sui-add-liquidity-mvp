import AddressWithCopy from "@/components/ui/AddressWithCopy";
import Button from "@/components/ui/Button";
import PoolPairAndChains from "@/components/ui/PoolPairAndChains";
import PoolDetail from "@/components/ui/PoolDetail";

import { getPoolConfig } from "@/utils/pool";

type PoolDetailsProps = {
  handleAddLiquidityClick: () => void;
};

export default function PoolDetails({
  handleAddLiquidityClick,
}: PoolDetailsProps) {
  const poolConfig = getPoolConfig();

  return (
    <>
      <PoolPairAndChains />
      <div className="flex gap-10 mt-8">
        <ul className="grid grid-cols-2 gap-4 flex-1">
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
                  address={poolConfig.kernelFactoryStr}
                  showShort
                  startCharsLen={10}
                  endCharsLen={16}
                />
              }
            />
          </li>

          <li className="p-2">
            <PoolDetail
              title="Kernel Pool"
              body={
                <AddressWithCopy
                  address={poolConfig.kernelPoolStr}
                  showShort
                  startCharsLen={10}
                  endCharsLen={16}
                />
              }
            />
          </li>

          <li className="p-2">
            <PoolDetail
              title="Token0"
              body={
                <AddressWithCopy
                  address={poolConfig.token0}
                  showShort
                  startCharsLen={10}
                  endCharsLen={18}
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
                  address={poolConfig.token1}
                  showShort
                  startCharsLen={10}
                  endCharsLen={18}
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
              body={<AddressWithCopy address={poolConfig.poolId} />}
            />
          </li>
        </ul>

        <Button
          onClick={handleAddLiquidityClick}
          className="h-12 w-full max-w-[400px]"
        >
          Add Liquidity
        </Button>
      </div>
    </>
  );
}
