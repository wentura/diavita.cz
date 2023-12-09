import React from "react";

export default function HeadignComponent() {
  return (
    <div className="bg-white pt-16 sm:pt-24 lg:pt-36">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
          Introducing
        </p> */}

        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Diavita
        </h2>

        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Tradiční český výrobce kosmetiky, bylinných sirupů a sladidel
        </p>
      </div>
    </div>
  );
}
