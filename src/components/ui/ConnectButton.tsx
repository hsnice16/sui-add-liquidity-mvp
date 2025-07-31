import Button from "@/components/ui/Button";
import {
  ConnectModal,
  useCurrentAccount,
  useDisconnectWallet,
} from "@mysten/dapp-kit";
import { shortEllipsisStr } from "@/utils/strings";

export default function ConnectButton() {
  const currentAccount = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();

  return currentAccount ? (
    <button
      className="cursor-pointer bg-neutral-950 px-4 py-2 rounded-full"
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
          <span className="flex items-center gap-1">
            <span>Connect</span>
            <span className="block">Wallet</span>
          </span>
        </Button>
      }
    />
  );
}
