import React from "react";
import Logo from "./logo";
import NavComponent from "./navComponent";
import NavMobile from "./navMobile";
import SocialComponent from "./socialComponent";
export default function Header() {
  return (
    <header className="py-2 sticky top-0 bg-white z-10">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-2 md:px-2  max-w-screen-xl">
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <Logo />
        </a>
        <NavComponent klass="hidden md:flex" />
        <NavMobile klass="flex md:hidden" />
      </div>
    </header>
  );
}
