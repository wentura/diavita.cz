import React from "react";
import { data } from "./data.js";
export default function NavComponent() {
  return (
    <nav className="gap-8 2xl:ml-16 flex">
      {data.map((nav) => {
        return (
          <a
            key={nav.shortTitle}
            href={`/kategorie/${nav.link}/${nav.id}`}
            className="text-md font-semibold text-indigo-500 hidden lg:flex"
          >
            {nav.shortTitle}
          </a>
        );
      })}

      <a
        href="#"
        className="text-md font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
      >
        Kontakt
      </a>
      <a
        href="#"
        className="text-md font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
      >
        NeraShop
      </a>
    </nav>
  );
}
