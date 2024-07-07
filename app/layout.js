import Footer from "@/components/footer";
import Header from "@/components/header";
import WhereToBuyComponent from "@/components/whereToBuyComponent";
import "./globals.css";
export const metadata = {
  title: "Diavita",
  description: "Tradiční český výrobce vazelíny, bylinných sirupů a sladidel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen mx-auto font-sans text-lg">
        <Header />
        {children}
        <WhereToBuyComponent />
        <Footer />
      </body>
    </html>
  );
}
