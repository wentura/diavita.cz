import React from "react";
import NavComponent from "./navComponent";
import SocialComponent from "./socialComponent";

export default function Header() {
  return (
    <header className="py-2 border-b">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-2 md:px-2">
        {/* logo - start */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            className="h-auto w-6 text-indigo-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          Diavita
        </a>
        {/* logo - end */}

        {/* nav - start */}
        <NavComponent />
        {/* nav - end */}

        {/* buttons - start */}

        {/* buttons - end */}
      </div>
    </header>
  );
}
