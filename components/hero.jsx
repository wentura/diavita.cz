import HeadignComponent from "./headignComponent";
export default function HeroComponent() {
  return (
    <div className="w-screen py-4 mx-auto md:py-6 lg:py-10 max-w-screen-2xl">
      <section className="mx-auto">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="flex flex-col items-center justify-center w-full mb-6 sm:mb-12 lg:w-1/2 lg:pb-10">
            <HeadignComponent />
          </div>
          <div className="hidden w-2/3 mx-auto mb-12 sm:flex md:mb-16 lg:w-1/2">
            <div className="overflow-hidden">
              <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1717243268/diavita/vazeliny/vazelina-litr2.png"
                loading="lazy"
                alt="Diavita, čaje"
                className="object-cover object-center w-full h-full"
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
