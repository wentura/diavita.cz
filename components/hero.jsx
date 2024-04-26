import Logo from "./logo";
import SocialComponent from "./socialComponent";
import SubMenuButtons from "./subMenuButtons";

export default function HeroComponent() {
  return (
    <div className="bg-white  py-8 md:py-12 lg:py-16">
      <section className="mx-auto max-w-screen-2xl">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/2 lg:pb-24 lg:pt-48 items-center">
            <Logo klass="230" />
            <p className="max-w-md leading-relaxed p-text text-md lg:text-xl px-4 text-center">
              Tradiční český výrobce kosmetiky a potravinových doplňků
            </p>
          </div>

          <div className="mb-12 hidden sm:flex w-2/3 md:mb-16 lg:w-1/2 mx-auto">
            <div className="relative left-2 top-12 z-10 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-8 md:top-16 lg:ml-0">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709371071/diavita/1.webp"
                // src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709371071/diavita/ybpn681gqiledc4y0uhv-md_vzeoh5.webp"
                loading="lazy"
                alt="Diavita, kosmetika"
                className="h-full w-full object-cover object-center"
                height={300}
                width={400}
              />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709371071/diavita/2.webp"
                // src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1709371071/diavita/xw0zxabr25ittk7l5555-md_flsdyp.webp"
                loading="lazy"
                alt="Diavita, čaje"
                className="h-full w-full object-cover object-center"
                height={300}
                width={400}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* <SubMenuButtons /> */}
          {/* <SocialComponent /> */}
        </div>
      </section>
    </div>
  );
}
