import Link from "next/link.js";
import React from "react";
import { data } from "./data.js";
export default function NavComponent({ klass }) {
  return (
    <nav
      className={`gap-4 md:gap-x-8 md:gap-y-2 2xl:ml-16 flex ${klass} items-end md:items-start`}
    >
      {data.map((nav) => {
        return (
          <Link
            key={nav.shortTitle}
            href={`/${nav.link}/${nav.id}`}
            className="text-xs md:text-sm p-text flex transition duration-100 hover:text-lime-600"
          >
            {nav.shortTitle}
          </Link>
        );
      })}

      {/* <a
        href="#"
        className="text-md font-semibold text-gray-600 transition duration-100 hover:text-lime-600"
      >
        Kontakt
      </a> */}
      <span className="text-xs md:text-sm p-text flex transition duration-100 hover:text-lime-600">
        O nás
      </span>
      <span className="text-xs md:text-sm p-text flex transition duration-100 hover:text-lime-600">
        Kontakt
      </span>
      <a
        href="https://www.nerashop.cz/znacka/diavita/"
        className="hidden md:block text-sm font-semibold p-text transition duration-100 hover:text-lime-600"
      >
        NeraShop
      </a>
    </nav>
  );
}
