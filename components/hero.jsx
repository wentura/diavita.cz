import HeadignComponent from "./headignComponent";
export default function HeroComponent() {
  return (
    <div className="w-screen py-0 mx-auto md:py-4 lg:py-8 max-w-screen-2xl">
      <section className="mx-auto">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="items-center justify-center hidden w-full mb-6 lg:flex-col lg:flex lg:mb-12 lg:w-1/3 lg:pb-10">
            <HeadignComponent />
          </div>
          <div className="w-full mx-auto mb-2 lg:w-2/3 kolaz md:min-h-screen-xl">
            <div className="flex justify-center mx-auto lg:hidden">
              <HeadignComponent />

              {/* <img
                src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1726218285/diavita/nove/vazeliny/kolaz.webp"
                loading="lazy"
                alt="Diavita, čaje"
                className="object-cover object-center w-full h-full"
                height={600}
                width={800}
              /> */}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row"></div> */}
      </section>
    </div>
  );
}
