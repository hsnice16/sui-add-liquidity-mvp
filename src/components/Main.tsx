"use client";

import { useState } from "react";

import SkateAmmSdk, {
  Environment,
  PoolType,
} from "@skate-org/skate_amm_sui_sdk";

import PoolDetails from "./PoolDetails";
import AddLiquidity from "./AddLiquidity";

const sdk = new SkateAmmSdk(Environment.Staging);
const poolConfig = sdk.getPoolConfig(PoolType.SUI_USDC);

export default function Main() {
  const [showAddLiquidity, setShowAddLiquidity] = useState(false);

  return (
    <main className="px-4 pb-10 pt-4 max-w-[1280px] mx-auto w-full">
      {showAddLiquidity ? (
        <AddLiquidity
          handleGoBackClick={() => setShowAddLiquidity(false)}
          poolConfig={poolConfig}
        />
      ) : (
        <PoolDetails
          poolConfig={poolConfig}
          handleAddLiquidityClick={() => setShowAddLiquidity(true)}
        />
      )}
    </main>
  );
}
