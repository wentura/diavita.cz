import React from "react";
import { data } from "./data.js";
export default function SubMenuButtons() {
  return (
    <div className="flex flex-row h-12 w-96 rounded-lg gap-4 justify-center items-center text-center">
      {data.map((nav) => {
        return (
          <a
            key={nav.shortTitle}
            href={`/kategorie/${nav.link}/${nav.id}`}
            className="w-1/4 text-gray-500 underline underline-offset-4 decoration-green-500"
          >
            {nav.shortTitle}
          </a>
        );
      })}
    </div>
  );
}
