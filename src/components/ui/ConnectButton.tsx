import { shortEllipsisStr } from "@/utils/strings";
import {
  ConnectModal,
  useCurrentAccount,
  useDisconnectWallet,
} from "@mysten/dapp-kit";

import Button from "./Button";

export default function ConnectButton() {
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();

  return currentAccount ? (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="radix-:ro3:"
      data-state="closed"
      className="cursor-pointer bg-neutral-950 px-4 py-2 rounded-full focus:outline-none"
      onClick={() => disconnect()}
    >
      <div className="text-base text-white font-medium">
        {shortEllipsisStr(currentAccount.address)}
      </div>
    </button>
  ) : (
    <ConnectModal
      trigger={
        <Button>
          <span className="text-center min-w-fit">
            <span className="flex items-center gap-x-1">
              <span>Connect</span>
              <span className="block">Wallet</span>
            </span>
          </span>
        </Button>
      }
    />
  );
}
