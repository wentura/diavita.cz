import { isSupported, sanitize } from "isomorphic-dompurify";
import React from "react";
import { data } from "./data.js";
const colors = ["#BE1326", "#8BBF38", "#23893B", "#1E1B1B"];
export default function ProductGridComponent() {
  return (
    <div className="bg-green-50 py-8 md:py-12 lg:py-16 drop-shadow-lg">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Diavita
          </h2>
          <p className="mx-auto max-w-screen-md text-center p-text md:text-lg">
            Od roku 1992 pro Vás vyrábíme v Pardubicích s maximální péčí a
            kvalitou přípravky plné přírodní síly bylin, výborná sladidla a
            osvědčené kosmetické přípravky pro šetrnou péči a ochranu pokožky.
          </p>
          <p className="pt-4 mx-auto max-w-screen-md text-center p-text md:text-lg">
            Přípravky Diavita koupíte v lékárnách a na vybraných e-shopech.
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((category) => {
            return (
              <div
                key={category.shortTitle}
                className="rounded-lg bg-white shadow-lg"
              >
                <a
                  href={`/${category.link}/${category.id}`}
                  className="group relative m-8 block h-80 w-80 overflow-hidden  lg:mb-3 mx-auto"
                >
                  <img
                    src={category.catImage}
                    loading="lazy"
                    width={300}
                    height={300}
                    className="h-80 w-80  object-center "
                  />
                </a>

                <div className="flex flex-col items-center gap-2 px-8">
                  <a
                    href={category.url}
                    className="text-2xl md:text-xl font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    {category.title}
                  </a>
                  <p
                    className="pb-8 font-light p-text"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(category.text),
                    }}
                  ></p>
                  <p></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
