import Link from "next/link";
import React from "react";
import Logo from "./logo";
import NavComponent from "./navComponent";
import NavMobile from "./navMobile";
export default function Header() {
  return (
    <header className="sticky top-0 z-10 py-2 bg-white">
      <div className="flex items-center justify-between max-w-screen-xl px-2 mx-auto md:px-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <Logo />
        </Link>
        <NavComponent klass="hidden md:flex" />
        <NavMobile klass="flex md:hidden" />
      </div>
    </header>
  );
}
