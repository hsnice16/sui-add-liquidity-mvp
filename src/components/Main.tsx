"use client";

import { useState } from "react";

import PoolDetails from "@/components/PoolDetails";
import AddLiquidity from "@/components/AddLiquidity";

export default function Main() {
  const [showAddLiquidity, setShowAddLiquidity] = useState(false);

  return (
    <main className="p-4 max-w-[1280px] mx-auto">
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
