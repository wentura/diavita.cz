import React from "react";
import { data } from "./data.js";
const colors = ["#BE1326", "#8BBF38", "#23893B", "#1E1B1B"];
export default function ProductGridComponent() {
  return (
    <div className="bg-green-50 py-12 sm:py-16 lg:py-32 drop-shadow-2xl">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Diavita
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, reiciendis quia. Atque non accusantium tempora.
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((category) => {
            return (
              <div key={category.shortTitle}>
                <a
                  href={`/${category.link}/${category.id}`}
                  className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                >
                  <img
                    src={category.catImage}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  {/* <div className="absolute left-0 bottom-2 flex gap-2">
                <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                  -50%
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                  New
                </span>
              </div> */}
                </a>

                <div className="flex flex-col items-center gap-2 px-2">
                  <a
                    href={category.url}
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    {category.title}
                  </a>
                  <p>{category.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
