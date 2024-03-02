import React from "react";
const logos = [
  {
    title: "Nerashop",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709372244/diavita/nerashop_ts-1_rjutwo.webp",
    icon: "icon",
    link: "https://www.nerashop.cz/znacka/diavita/",
  },
  {
    title: "Nerashop",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709372244/diavita/nerashop_ts-1_rjutwo.webp",
    icon: "icon",
    link: "https://www.nerashop.cz",
  },
  {
    title: "Nerashop",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709372244/diavita/nerashop_ts-1_rjutwo.webp",
    icon: "icon",
    link: "https://www.nerashop.cz",
  },
  {
    title: "Nerashop",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709372244/diavita/nerashop_ts-1_rjutwo.webp",
    icon: "icon",
    link: "https://www.nerashop.cz",
  },
  {
    title: "Nerashop",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709372244/diavita/nerashop_ts-1_rjutwo.webp",
    icon: "icon",
    link: "https://www.nerashop.cz",
  },
  {
    title: "Nerashop",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1709372244/diavita/nerashop_ts-1_rjutwo.webp",
    icon: "icon",
    link: "https://www.nerashop.cz",
  },
];
export default function WhereToBuyComponent() {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-16">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
            produkty DIAVITA najdete u...
          </h2>

          {/* <p className="max-w-md text-center text-gray-400 lg:text-right">
            Filler text is dummy text which has no meaning however looks very
            similar to real text.
          </p> */}
        </div>

        <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
          {logos.map((logo) => {
            return (
              <a
                href={logo.link}
                className="flex h-16 items-center justify-center rounded-lg bg-white p-4 text-gray-400 sm:h-32 border border-gray-100"
                key={logo.title}
              >
                <img src={logo.logo} alt={logo.text} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
