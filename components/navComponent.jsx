import React from "react";
import { data } from "./data.js";
export default function NavComponent() {
  return (
    <nav className="gap-4 md:gap-8 2xl:ml-16 flex">
      {data.map((nav) => {
        return (
          <a
            key={nav.shortTitle}
            href={`/${nav.link}/${nav.id}`}
            className="text-sm font-semibold text-gray-600 flex  transition duration-100 hover:text-lime-600"
          >
            {nav.shortTitle}
          </a>
        );
      })}

      {/* <a
        href="#"
        className="text-md font-semibold text-gray-600 transition duration-100 hover:text-lime-600"
      >
        Kontakt
      </a> */}
      <a
        href="https://www.nerashop.cz/znacka/diavita/"
        className="text-sm font-semibold text-gray-600 transition duration-100 hover:text-lime-600"
      >
        NeraShop
      </a>
    </nav>
  );
}
