import React from "react";
const logos = [
  {
    title: "Nerashop",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710171399/diavita/nerashop_dpdtnf.png",
    icon: "icon",
    link: "https://www.nerashop.cz/znacka/diavita/",
  },
  {
    title: "Alphega",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710170616/diavita/alphega_jtuvun.png",
    icon: "icon",
    link: "https://www.alphega.cz/vysledky-hledani?search=valinka&s=0",
  },
  {
    title: "Benu",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710170616/diavita/benu_tz4faw.png",
    icon: "icon",
    link: "https://www.benu.cz/vyhledavani?q=valinka",
  },
  {
    title: "Dr. Max",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710170616/diavita/dr_max_dan2so.png",
    icon: "icon",
    link: "https://www.drmax.cz/vyhledavani?q=valinka",
  },
  {
    title: "Giga lékárna",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710170688/diavita/giga_lekarna_xgi1d8.png",
    icon: "icon",
    link: "https://www.gigalekarna.cz/vyhledavani/?phrase=valinka",
  },
  {
    title: "Lékárna",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710170616/diavita/lekarna_cz_lsabtw.png",
    icon: "icon",
    link: "https://www.lekarna.cz/valinka/?fromSearch=true",
  },
  {
    title: "Moje lékárna",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710170616/diavita/moje_lekarna_c3xamn.png",
    icon: "icon",
    link: "https://www.mojelekarna.cz/vyhledavani?s=valinka",
  },
  {
    title: "Pilulka",
    logo: "https://res.cloudinary.com/dam7wdzvx/image/upload/v1710170616/diavita/pilulka_rqn7ro.png",
    icon: "icon",
    link: "https://www.pilulka.cz/hledej?q=valinka",
  },
];
export default function WhereToBuyComponent() {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-16 mt-12 md:mt-24">
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

        <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-4 lg:gap-6">
          {logos.map((logo) => {
            return (
              <a
                href={logo.link}
                className="flex h-16 items-center justify-center rounded-lg bg-white p-4 text-gray-400 sm:h-32 hover:scale-110 transition duration-300"
                key={logo.title}
              >
                <img src={logo.logo} alt={logo.text} className="max-h-12" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
