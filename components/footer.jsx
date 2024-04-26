import Logo from "./logo";
import Matomo from "./matomo";
import NavComponent from "./navComponent";
import SocialComponent from "./socialComponent";

export default function Footer() {
  return (
    <footer className="py-12 mt-24 border-b">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-2 md:px-2">
        {/* logo - start */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <Logo />
        </a>
        {/* logo - end */}

        {/* nav - start */}
        <NavComponent />
        {/* nav - end */}

        {/* buttons - start */}

        {/* buttons - end */}
      </div>
      <div className="mx-auto pt-4 w-full text-center">
        Diavita & NeraShop.cz, 2024 &copy;{" "}
        <a
          className="text-xs underline-offset-4 hover:underline"
          href="https://www.zbyneksvoboda.cz"
        >
          vytvořil Zbyněk Svoboda
        </a>
      </div>
      <Matomo />
    </footer>
  );
}
