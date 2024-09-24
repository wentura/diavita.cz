// "use client";
// import DOMPurify from "dompurify";
import CarouselGallery from "@/components/carouselGallery";
import DOMPurify from "isomorphic-dompurify";
import { data } from "/components/data.js";
export default function Produkty({ params }) {
  const k = params.slug[0];
  const p = params.slug[1];
  const kategorie = data[k];
  const product = data[k].products[p];
  // const resSubTitle = { __html: DOMPurify.sanitize(product.subTitle) };
  // const resShortDesc = { __html: DOMPurify.sanitize(product.shortDesc) };
  // const resLongDesc = { __html: DOMPurify.sanitize(product.longDesc) };

  console.log("image", product.image.length);

  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      {/* technicky vypis, ktery zmizi - {k} / {p} */}
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="w-full text-2xl tracking-tight text-center p-text lg:text-7xl md:text-left montserrat-900">
            {!product.title2 ? null : product.title2}
            {/* { product.title } */}
          </h2>
        </div>
        <div className="flex flex-col-reverse gap-2 mb-8 md:flex-row md:mb-24 md:gap-8">
          <div className="w-full md:w-1/2">
            <div
              className="pb-8 font-light"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.subTitle),
                // resSubTitle,
              }}
            ></div>
            {!product.flag ? null : <div className="py-2">{product.flag}</div>}
            <div
              className="py-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.shortDesc),
                // resShortDesc,
              }}
            ></div>
            <div className="block px-4 py-2 mx-auto my-12 font-bold text-center transition ease-in-out border-2 rounded-md shadow-lg w-72 bg-lime-50 border-lime-700 md:hidden md:px-8 md:py-4 md:w-96 hover:scale-105 hover:duration-700 hover:shadow-2xl">
              <a className="" href={product.url} target="_blank">
                koupit v NeraShop.cz
              </a>
            </div>
            <div
              className="py-4"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.longDesc),
                // resLongDesc,
              }}
            ></div>
          </div>
          <div className="w-full md:w-1/2">
            <CarouselGallery productId={product.id} kategorieId={k} />

            {/*             
            <img
              src={product.image[0]}
              alt={product.title}
              className="max-h-96 md:max-h-[600px] object-cover object-center pt-4 mx-auto"
            /> */}
          </div>
        </div>
        <div className="hidden px-4 py-2 mx-auto font-bold text-center transition ease-in-out border-2 rounded-md shadow-lg w-72 bg-lime-50 border-lime-700 md:block md:px-8 md:py-4 md:w-96 hover:scale-105 hover:duration-700 hover:shadow-2xl">
          <a className="" href={product.url} target="_blank">
            koupit v NeraShop.cz
          </a>
        </div>
      </div>
    </div>
  );
}
