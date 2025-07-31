import clsx from "clsx";

import Button from "@/components/ui/Button";
import useWindowWidth from "@/hooks/useWindowWidth";

import {
  ConnectModal,
  useCurrentAccount,
  useDisconnectWallet,
} from "@mysten/dapp-kit";
import { shortEllipsisStr } from "@/utils/strings";

export default function ConnectButton() {
  const width = useWindowWidth();
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();

  return currentAccount ? (
    <button
      onClick={() => disconnect()}
      className="cursor-pointer bg-neutral-950 px-4 py-2 rounded-full"
    >
      <div
        className={clsx("text-white font-medium", {
          "text-sm": width <= 370,
          "text-base": width > 370,
        })}
      >
        {shortEllipsisStr(currentAccount.address)}
      </div>
    </button>
  ) : (
    <ConnectModal
      trigger={
        <Button className={clsx({ "text-sm h-8!": width <= 370 })}>
          <span className="flex items-center gap-1">
            <span>Connect</span>
            <span className="hidden md:block">Wallet</span>
          </span>
        </Button>
      }
    />
  );
}
