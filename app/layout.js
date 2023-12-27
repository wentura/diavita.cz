import Header from "@/components/header";
import HeadignComponent from "@/components/headignComponent";
import HeroComponent from "@/components/hero";
import KonkurencniVyhodyComponent from "@/components/konkurencniVyhodyComponent";
import ProductGridComponent from "@/components/productGridComponent";
import WhereToBuyComponent from "@/components/whereToBuyComponent";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diavita",
  description: "Tradiční český výrobce kosmetiky, bylinných sirupů a sladidel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {/* <HeroComponent /> */}
        {/* <ProductGridComponent /> */}

        {children}
        <WhereToBuyComponent />
      </body>
    </html>
  );
}
