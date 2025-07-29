import SkateAmmSdk from "@skate-org/skate_amm_sui_sdk";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { NETWORK, POOL_TYPE, SKATE_SDK_ENV } from "@/data/config";

export function getPoolConfig() {
  const sdk = new SkateAmmSdk(SKATE_SDK_ENV);
  const poolConfig = sdk.getPoolConfig(POOL_TYPE);

  return poolConfig;
}

export async function getPoolTokensBalance() {
  const rpcUrl = getFullnodeUrl(NETWORK);
  const client = new SuiClient({ url: rpcUrl });
  const sdk = new SkateAmmSdk(SKATE_SDK_ENV);
  const poolType = POOL_TYPE;

  const { balance0, balance1 } = await sdk.liquidity.getPoolBalances(
    client,
    poolType
  );

  return { token0_balance: balance0, token1_balance: balance1 };
}
