import HeadignComponent from "@/components/headignComponent";
import HeroComponent from "@/components/hero";
import KonkurencniVyhodyComponent from "@/components/konkurencniVyhodyComponent";
import ProductGridComponent from "@/components/productGridComponent";
import WhereToBuyComponent from "@/components/whereToBuyComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroComponent />
      <ProductGridComponent />
      <HeadignComponent />
      {/* <KonkurencniVyhodyComponent /> */}
      {/* <WhereToBuyComponent /> */}
    </main>
  );
}
