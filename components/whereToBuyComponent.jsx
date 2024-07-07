import Link from "next/link";
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
    <div className="py-8 mt-12 bg-white md:py-12 lg:py-16 md:mt-24">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex flex-col items-center mb-4 md:mb-8 lg:flex-row lg:justify-between">
          <h2 className="mb-2 text-2xl font-bold text-center text-gray-800 lg:mb-0 lg:text-3xl">
            produkty DIAVITA najdete u...
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-4 lg:gap-6">
          {logos.map((logo) => {
            return (
              <Link
                href={logo.link}
                className="flex items-center justify-center h-16 p-4 text-gray-400 transition duration-300 bg-white rounded-lg sm:h-32 hover:scale-110"
                key={logo.title}
              >
                <img src={logo.logo} alt={logo.text} className="max-h-12" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
