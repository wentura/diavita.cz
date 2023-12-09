import React from "react";

export default function NavComponent() {
  return (
    <nav className="hidden gap-12 lg:flex 2xl:ml-16">
      <a href="#" className="text-lg font-semibold text-indigo-500">
        Caje
      </a>
      <a
        href="#"
        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
      >
        VAzeliny
      </a>
      <a
        href="#"
        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
      >
        Sladidla
      </a>
      <a
        href="#"
        className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
      >
        Sirupy
      </a>
    </nav>
  );
}
