import { useMemo } from "react";

import { getPoolConfig } from "@/utils/pool";
import { formatBigBalance } from "@/utils/wallet";
import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";
import { isSuiCoin } from "@skate-org/skate_amm_sui_sdk/dist/utils/transactionHelpers";

export default function useTokensWalletBalance() {
  const currentAccount = useCurrentAccount();
  const poolConfig = useMemo(() => getPoolConfig(), []);

  const { data } = useSuiClientQuery("getAllBalances", {
    owner: currentAccount?.address ?? "",
  });

  const { suiBalance, usdcBalance } = useMemo(() => {
    if (data?.length) {
      const suiToken = data.filter((token) => isSuiCoin(token.coinType))?.[0];

      const usdcToken = data.filter(
        (token) =>
          token.coinType.toLowerCase() === poolConfig.token1.toLowerCase()
      )?.[0];

      return {
        suiBalance: formatBigBalance(
          suiToken?.totalBalance ?? 0,
          poolConfig.token0Decimals
        ),
        usdcBalance: formatBigBalance(
          usdcToken?.totalBalance ?? 0,
          poolConfig.token1Decimals
        ),
      };
    }

    return { suiBalance: 0, usdcBalance: 0 };
  }, [
    data,
    poolConfig.token1,
    poolConfig.token0Decimals,
    poolConfig.token1Decimals,
  ]);

  return {
    suiBalance,
    usdcBalance,
  };
}
