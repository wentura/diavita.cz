import HeadignComponent from "@/components/headignComponent";
import HeroComponent from "@/components/hero";
import ProductGridComponent from "@/components/productGridComponent";
export default function Home() {
  return (
    <main className="">
      <HeroComponent />
      <ProductGridComponent />
      <HeadignComponent />
    </main>
  );
}
