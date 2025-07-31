import { useEffect, useMemo, useState } from "react";
import DepositTokensPair from "@/components/ui/DepositTokensPair";
import { getPoolConfig, getPoolTokensBalance } from "@/utils/pool";

export default function DepositTokensHead() {
  const [suiEqUSDC, setSuiEqUSDC] = useState("");
  const poolConfig = useMemo(() => getPoolConfig(), []);

  useEffect(() => {
    (async function () {
      const poolTokensBalance = await getPoolTokensBalance();
      const suiEqUSDC =
        Number(poolTokensBalance.token1_balance) /
        Number(poolTokensBalance.token0_balance);

      setSuiEqUSDC(suiEqUSDC.toFixed(poolConfig.token1Decimals));
    })();
  }, [poolConfig]);

  return (
    <div className="w-full border border-neutral-800 p-6 rounded-2xl">
      <DepositTokensPair />
      <p className="text-sm mt-1 pl-1">
        <span className="text-neutral-400">Market price: </span>
        <span className="font-semibold">{suiEqUSDC} USDC = 1 SUI (-)</span>
      </p>
    </div>
  );
}
