import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import "@mysten/dapp-kit/dist/index.css";
import "primereact/resources/themes/saga-blue/theme.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Sui Add Liquidity MVP",
  description: "Sui Add Liquidity MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
