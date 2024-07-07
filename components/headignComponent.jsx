import React from "react";
import Logo from "./logo";

export default function HeadignComponent() {
  return (
    <div className="py-8 bg-white md:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="flex justify-center">
          <Logo klass={275} />
        </div>
        <p className="max-w-screen-md mx-auto text-center p-text md:text-lg">
          Tradiční český výrobce kosmetiky, bylinných sirupů a sladidel
        </p>
      </div>
    </div>
  );
}
