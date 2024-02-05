import Logo from "./logo";
import SocialComponent from "./socialComponent";
import SubMenuButtons from "./subMenuButtons";

export default function HeroComponent() {
  return (
    <div className="bg-white  py-12 md:py-16 lg:py-44">
      <section className="mx-auto max-w-screen-2xl">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48 items-center">
            <Logo klass="230" />
            <p className="max-w-md leading-relaxed text-gray-500 text-md lg:text-xl px-4">
              Tradiční český výrobce kosmetiky a potravinových doplňků
            </p>
          </div>

          <div className="mb-12 hidden sm:flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img
                src="https://dummyimage.com/500x500/c3c3c3.jpg?text=IMG%201"
                loading="lazy"
                // alt="Photo by Kaung Htet"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src="https://dummyimage.com/500x500/dcdcdc.jpg?text=IMG%202"
                loading="lazy"
                // alt="Photo by Manny Moreno"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <SubMenuButtons />
          <SocialComponent />
        </div>
      </section>
    </div>
  );
}
