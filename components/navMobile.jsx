"use client";
import Link from "next/link";
import React, { useState } from "react";
import { data } from "./data.js";
import Logo from "./logo";

export default function NavMobile({ klass }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`mobilniMenu ${klass}`}>
      <button className="flex justify-end p-4 lg:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        }  top-0 left-auto right-0 bg-white px-2 pt-2 pb-4 z-20 flex flex-col text-gray-900  w-full h-full fixed`}
      >
        <button className="flex justify-end p-4" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M 0 0 L 20 20 L 0 0 M 20 0 L 0 20 L 20 0"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col gap-y-2 w-full items-center text-xl my-2">
          <li className="flex px-8 py-4" key="home">
            <Link
              href="/"
              className=" text-gray-600 transition duration-100 hover:text-yellow-600 font-heading text-4xl font-extralight md:text-6xl lg:text-8xl font-heading"
              onClick={toggleMenu}
            >
              <Logo klass={200} />
            </Link>{" "}
          </li>
          {data.map((nav) => {
            return (
              <li className="flex py-2" key={nav.id}>
                <Link
                  key={nav.shortTitle}
                  href={`/${nav.link}/${nav.id}`}
                  className="text-md p-text flex transition duration-100 hover:text-lime-600"
                  onClick={toggleMenu}
                >
                  {nav.shortTitle}
                </Link>
              </li>
            );
          })}
          <li className="py-2 text-md p-text flex transition duration-100 hover:text-lime-600">
            O nás
          </li>
          <li className="py-2 text-md p-text flex transition duration-100 hover:text-lime-600">
            Kontakt
          </li>
        </ul>
      </nav>
    </div>
  );
}
