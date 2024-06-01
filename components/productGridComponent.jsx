import { isSupported, sanitize } from "isomorphic-dompurify";
import Link from "next/link.js";
import React from "react";
import { data } from "./data.js";
const colors = ["#BE1326", "#8BBF38", "#23893B", "#1E1B1B"];
export default function ProductGridComponent() {
  return (
    <div className="py-8 md:py-12 lg:py-16 ">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <p className="mx-auto max-w-screen-lg text-center p-text md:text-md">
            Od roku 1992 v Pardubicích s maximální péčí a kvalitou vyrábíme
            přípravky plné přírodní síly bylin,{" "}
            <br className="hidden lg:block" />
            výborná sladidla a osvědčené kosmetické přípravky pro šetrnou péči a
            ochranu pokožky.
          </p>
          <p className="pt-4 mx-auto max-w-screen-md text-center p-text md:text-lg">
            {/* Přípravky Diavita koupíte v lékárnách a na vybraných e-shopech. */}
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((category) => {
            return (
              <Link
                key={category.shortTitle}
                href={`/${category.link}/${category.id}`}
                className="group relative flex flex-col items-center overflow-hidden lg:mb-3
                 rounded-lg bg-gradient-to-tr from-white to-green-50 shadow-lg hover:scale-105 transition hover:duration-700 hover:shadow-2xl ease-in-out"
              >
                <img
                  src={category.catImage}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="h-80 w-80  object-center mt-6"
                />
                <h2 className="text-xl md:text-2xl pt-8">{category.title}</h2>
                <p
                  className="px-5 pt-3 pb-8 p-text"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(category.text),
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
