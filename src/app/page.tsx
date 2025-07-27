"use client";

import Image from "next/image";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import { darkTheme } from "@/data/themes";

import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";

import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl("testnet") },
});

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider theme={darkTheme}>
          <Navbar />

          <div className="flex-1 relative min-h-[calc(100vh-var(--header-height))] flex flex-col">
            <div className="relative flex flex-col justify-between gap-10 flex-1">
              <Main />

              <Image
                alt="Footer Background"
                loading="lazy"
                width="1960"
                height="287"
                decoding="async"
                data-nimg="1"
                className="mx-auto translate-y-0.5 absolute bottom-0 -z-elevated inset-x-0 [@media(min-width:118rem)]:[mask-image:linear-gradient(90deg,_transparent,_#fff_10%,_#fff_90%,_transparent_100%)]"
                src="/footer-bg.webp"
                style={{ color: "transparent" }}
              />
            </div>

            <Footer />
          </div>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
