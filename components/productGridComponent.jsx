import Link from "next/link.js";
import React from "react";
import { data } from "./data.js";
export default function ProductGridComponent() {
  return (
    <div className="py-8 md:py-12 lg:py-16 ">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="mb-10 md:mb-16">
          <p className="max-w-screen-lg mx-auto text-center p-text md:text-md">
            Od roku 1992 v Pardubicích s maximální péčí a kvalitou vyrábíme
            přípravky plné přírodní síly bylin,{" "}
            <br className="hidden lg:block" />
            výborná sladidla a osvědčené kosmetické přípravky pro šetrnou péči a
            ochranu pokožky.
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
                className="relative flex flex-col items-center overflow-hidden transition ease-in-out rounded-lg shadow-lg group lg:mb-3 bg-gradient-to-tr from-white to-green-50 hover:scale-105 hover:duration-700 hover:shadow-2xl"
              >
                <img
                  src={category.catImage}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="object-center mt-6 h-80 w-80"
                />
                <h2 className="pt-8 text-xl md:text-2xl">{category.title}</h2>
                <p
                  className="px-5 pt-3 pb-8 p-text"
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
