import { data } from "/components/data.js";

export default function Produkty({ params }) {
  const k = params.slug[0];
  const p = params.slug[1];
  const kategorie = data[k];
  const product = data[k].products[p];
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      {/* technicky vypis, ktery zmizi - {k} / {p} */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold p-text lg:text-7xl w-full text-center capitalize md:text-left">
            {!product.title2 ? null : product.title2} {product.title}
          </h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row mb-8 md:mb-24 gap-2 md:gap-8 ">
          <div className="w-full md:w-1/2">
            <p
              className="pb-8 font-light"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.subTitle),
              }}
            ></p>
            {!product.flag ? null : <div className="py-2">{product.flag}</div>}
            <p
              className="py-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.shortDesc),
              }}
            ></p>
            <div className="block md:hidden my-12 border-2 border-lime-700 px-4 md:px-8 py-2 md:py-4 rounded-md mx-auto text-center w-72 md:w-96 bg-lime-50 font-bold shadow-lg hover:scale-105 transition hover:duration-700 hover:shadow-2xl ease-in-out">
              <a className="" href={product.url} target="_blank">
                koupit v NeraShop.cz
              </a>
            </div>
            <div
              className="py-4 "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.longDesc),
              }}
            ></div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={product.image[0]}
              alt={product.title}
              className="max-h-96 md:max-h-[600px] object-cover object-center pt-4 mx-auto"
            />
          </div>
        </div>
        <div className="hidden md:block border-2 border-lime-700 px-4 md:px-8 py-2 md:py-4 rounded-md mx-auto text-center w-72 md:w-96 bg-lime-50 font-bold shadow-lg hover:scale-105 transition hover:duration-700 hover:shadow-2xl ease-in-out">
          <a className="" href={product.url} target="_blank">
            koupit v NeraShop.cz
          </a>
        </div>
      </div>
    </div>
  );
}
