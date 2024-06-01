import HeadignComponent from "./headignComponent";
import Logo from "./logo";
import SocialComponent from "./socialComponent";
import SubMenuButtons from "./subMenuButtons";
export default function HeroComponent() {
  return (
    <div className="py-4 md:py-6 lg:py-10 w-screen max-w-screen-2xl mx-auto">
      <section className="mx-auto">
        <div className="mb-8 flex flex-wrap justify-between">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:w-1/2 lg:pb-10 items-center">
            <HeadignComponent />
            {/* 
            <Logo klass="275" />
            <p className="max-w-md leading-relaxed p-text text-md lg:text-md px-4 text-center">
              Tradiční český výrobce kosmetiky a<br />
              potravinových doplňků
            </p>*/}
          </div>
          <div className="mb-12 hidden sm:flex w-2/3 md:mb-16 lg:w-1/2 mx-auto">
            <div className="overflow-hidden">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1717243268/diavita/vazeliny/vazelina-litr2.png"
                loading="lazy"
                alt="Diavita, čaje"
                className="h-full w-full object-cover object-center"
                height={300}
                width={400}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row"></div>
      </section>
    </div>
  );
}
