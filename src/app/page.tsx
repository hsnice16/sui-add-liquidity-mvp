"use client";

import Image from "next/image";
import { PrimeReactProvider } from "primereact/api";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

import { NETWORK } from "@/data/config";
import { darkTheme } from "@/data/themes";

import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";

import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { networkConfig } = createNetworkConfig({
  [NETWORK]: { url: getFullnodeUrl(NETWORK) },
});

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig}>
        <WalletProvider theme={darkTheme}>
          <PrimeReactProvider>
            <div className="max-w-[1880px] mx-auto flex flex-col h-screen">
              <Navbar />

              <div className="relative w-full flex-1">
                <Main />

                <Image
                  width={1880}
                  height={287}
                  alt="footer-bg"
                  src="/footer-bg.webp"
                  className="absolute bottom-0 -z-10 mask-x-from-95% mask-x-to-100%"
                />
              </div>

              <Footer />
            </div>
          </PrimeReactProvider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
