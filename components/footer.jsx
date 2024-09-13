import Link from "next/link";
import Logo from "./logo";
import Matomo from "./matomo";
import NavComponent from "./navComponent";
export default function Footer() {
  return (
    <footer className="py-12 mt-24 border-b">
      <div className="pt-4 pb-16 sm:pt-10 lg:pt-12">
        <div className="max-w-screen-xl px-4 mx-auto md:px-8">
          <div className="grid justify-center grid-cols-2 gap-12 pt-10 border-t md:grid-cols-2 lg:grid-cols-5 lg:pt-12">
            <div className="flex flex-col items-center col-span-full lg:col-span-3 md:items-start">
              <Link href="/">
                <Logo klass="120" />
              </Link>
              <p className="text-center p-text sm:pt-2 md:text-left">
                Tradiční český výrobce kosmetiky,
                <br />
                bylinných sirupů a sladidel
              </p>
            </div>
            {/* nav - start */}

            <div className="flex flex-col gap-4 md:gap-x-8 md:gap-y-2 2xl:ml-16">
              <div className="flex text-xs md:text-sm p-text ">
                NeraAgro, spol. s r.o.
              </div>

              <div className="flex text-xs md:text-sm p-text">
                ul. Práce 657
                <br />
                Neratovice
                <br />
                277 11
              </div>
              {/* <div className="flex text-xs md:text-sm p-text">27711</div> */}
              {/* <div className="flex text-xs transition duration-100 md:text-sm p-text hover:text-lime-600">
                  PSČ 27711,
                </div> */}
              <div className="flex text-xs transition duration-100 md:text-sm p-text hover:text-lime-600">
                <a href="https://www.nerashop.cz/" target="_blank">
                  www.nerashop.cz
                </a>
              </div>
              <div className="flex text-xs transition duration-100 md:text-sm p-text hover:text-lime-600">
                <a href="mailto:eliska.klickova@nerashop.cz">
                  eliska.klickova@nerashop.cz
                </a>
              </div>
            </div>
            <div>
              <NavComponent klass="flex-col items-end" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-screen-xl px-4 mx-auto md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
            <span className="justify-center text-sm text-center text-gray-400 md:text-left">
              {" "}
              Diavita & NeraShop.cz, 2024 &copy; <br />
              <a
                className="text-xs underline-offset-4 hover:underline"
                href="https://www.zbyneksvoboda.cz"
              >
                vytvořil Zbyněk Svoboda
              </a>
            </span>
            {/* social - start */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/nerashop.cz/"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/NeraShop.cz"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  width={34}
                  height={34}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path>
                </svg>
              </a>
            </div>
            {/* social - end */}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-screen-xl px-2 mx-auto md:px-2"></div>
      <div className="w-full pt-12 mx-auto text-center text-md"></div>
      <Matomo />
    </footer>
  );
}
