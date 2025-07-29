import { NETWORK, POOL_TYPE, SKATE_SDK_ENV } from "@/data/config";
import { CoinStruct, getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import SkateAmmSdk from "@skate-org/skate_amm_sui_sdk";

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

export async function mint(
  token0Amount: string,
  token1Amount: string,
  coins0: CoinStruct[],
  coins1: CoinStruct[]
) {
  const sdk = new SkateAmmSdk(SKATE_SDK_ENV);

  const tx = await sdk.liquidity.mint({
    poolType: POOL_TYPE,
    coins0: [...coins0],
    coins1: [...coins1],
    amountToken0: token0Amount,
    amountToken1: token1Amount,
    tickLower: "-887272",
    tickUpper: "887272",
    amountToken0Min: "0",
    amountToken1Min: "0",
    actionBoxSeed: new Date().getTime().toString(),
  });

  return tx;
}
