import { NETWORK } from "@/data/config";
import { CoinStruct, getFullnodeUrl, SuiClient } from "@mysten/sui/client";

export async function getCoinsForTx(
  user: string,
  amount: string,
  token: string,
  prevCoins: CoinStruct[] = [],
  cursor?: string
) {
  const rpcUrl = getFullnodeUrl(NETWORK);
  const client = new SuiClient({ url: rpcUrl });
  const data = await client.getCoins({
    coinType: token,
    owner: user,
    cursor,
    limit: 10,
  });

  const coins = prevCoins;
  let totalCoinsBalance = prevCoins.reduce(
    (sum, coin) => sum + Number(coin.balance),
    0
  );

  for (const coin of data.data) {
    totalCoinsBalance += Number(coin.balance);
    coins.push(coin);

    if (totalCoinsBalance >= Number(amount)) {
      return coins;
    }
  }

  if (data.hasNextPage) {
    return getCoinsForTx(
      user,
      amount,
      token,
      coins,
      data.nextCursor ?? undefined
    );
  }

  return coins;
}

export function formatBigBalance(balance: number | string, decimals: number) {
  const bigDecimals = 10 ** decimals;
  const formattedBal = Number(balance) / bigDecimals;
  return formattedBal;
}

export function formatSmallBalance(balance: number | string, decimals: number) {
  return String(Number(balance) * 10 ** decimals);
}
