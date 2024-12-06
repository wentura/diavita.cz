import Link from "next/link.js";
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
            className="flex text-xs transition duration-100 md:text-sm p-text hover:text-lime-600"
          >
            {nav.shortTitle}
          </Link>
        );
      })}
      <Link
        className="flex text-xs transition duration-100 md:text-sm p-text hover:text-lime-600"
        href="/onas"
      >
        O nás
      </Link>
      <Link
        className="flex text-xs transition duration-100 md:text-sm p-text hover:text-lime-600"
        href="/kontakt"
      >
        Kontakt
      </Link>
      <a
        href="https://www.nerashop.cz/znacka/diavita/"
        className="hidden text-sm font-semibold transition duration-100 md:block p-text hover:text-lime-600"
      >
        NeraShop
      </a>
    </nav>
  );
}
