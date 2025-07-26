import {
  ConnectModal,
  useCurrentAccount,
  useDisconnectWallet,
} from "@mysten/dapp-kit";

import FourDots from "./FourDots";

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
      <div className="text-sm sm:text-base text-white font-medium">
        8yuvcg...b5wR
      </div>
    </button>
  ) : (
    <ConnectModal
      trigger={
        <button className="items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-neutral-950 shadow hover:bg-primary/90 h-10 py-2 rounded-full text-base px-4 flex justify-between">
          <FourDots left />

          <span className="text-center min-w-fit">
            <span className="flex items-center gap-x-1">
              <span>Connect</span>
              <span className="hidden sm:block">Wallet</span>
            </span>
          </span>

          <FourDots right />
        </button>
      }
    />
  );
}
