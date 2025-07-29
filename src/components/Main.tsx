"use client";

import { useState } from "react";

import PoolDetails from "./PoolDetails";
import AddLiquidity from "./AddLiquidity";

export default function Main() {
  const [showAddLiquidity, setShowAddLiquidity] = useState(false);

  return (
    <main className="px-4 pb-10 pt-4 max-w-[1280px] mx-auto w-full">
      {showAddLiquidity ? (
        <AddLiquidity handleGoBackClick={() => setShowAddLiquidity(false)} />
      ) : (
        <PoolDetails
          handleAddLiquidityClick={() => setShowAddLiquidity(true)}
        />
      )}
    </main>
  );
}
