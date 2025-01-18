import Link from "next/link.js";
import React from "react";
import { data } from "./data.js";
export default function ProductGridComponent() {
  return (
    <div className="py-0 md:py-2 lg:py-4 ">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="mb-10 md:mb-16">
          <p className="max-w-screen-lg mx-auto text-left p-text md:text-md">
            stránce:Od roku 1992 vyrábíme v Pardubicích kvalitní produkty pro
            zdraví a péči o pokožku. Naše sirupy a kosmetika jsou vyrobeny z
            pečlivě vybraných surovin, které využívají sílu bylin k podpoře
            zdraví a pohody celé rodiny. S Diavitou se můžete spolehnout na
            šetrnou péči a účinnou ochranu pokožky i zdraví.
          </p>
          <p className="max-w-screen-md pt-4 mx-auto text-center p-text md:text-lg">
            {/* Přípravky Diavita koupíte v lékárnách a na vybraných e-shopech. */}
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((category) => {
            return (
              <Link
                key={category.shortTitle}
                href={`/${category.link}/${category.id}`}
                className="relative flex flex-col items-center overflow-hidden transition ease-in-out border rounded-lg shadow-lg border-neutral-200 group lg:mb-3 bg-gradient-to-tr from-white to-green-50 hover:scale-105 hover:duration-700 hover:shadow-2xl"
              >
                <img
                  src={category.catImage}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="object-center mt-6 h-80 w-80"
                />
                <h2 className="pt-4 text-xl tracking-normal uppercase md:text-2xl montserrat-900">
                  {category.title}
                </h2>
                <p
                  className="px-5 pt-2 pb-8 text-sm p-text"
                  dangerouslySetInnerHTML={{
                    __html: category.text,
                  }}
                ></p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
