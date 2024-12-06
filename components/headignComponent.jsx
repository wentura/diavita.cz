import React from "react";
import Logo from "./logo";

export default function HeadignComponent() {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="flex justify-center">
          <Logo klass={275} />
        </div>
        <p className="hidden max-w-screen-md mx-auto text-center p-text md:text-lg lg:flex">
          Tradiční český výrobce sirupů a kosmetiky
        </p>
      </div>
    </div>
  );
}
