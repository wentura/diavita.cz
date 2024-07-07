import { data } from "/components/data.js";
export default function Produkty({ params }) {
  const k = params.slug[0];
  const p = params.slug[1];
  const kategorie = data[k];
  const product = data[k].products[p];
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      {/* technicky vypis, ktery zmizi - {k} / {p} */}
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="w-full text-2xl font-bold text-center capitalize p-text lg:text-7xl md:text-left">
            {!product.title2 ? null : product.title2} {product.title}
          </h2>
        </div>
        <div className="flex flex-col-reverse gap-2 mb-8 md:flex-row md:mb-24 md:gap-8 ">
          <div className="w-full md:w-1/2">
            <p
              className="pb-8 font-light"
              dangerouslySetInnerHTML={{
                __html: product.subTitle,
              }}
            ></p>
            {!product.flag ? null : <div className="py-2">{product.flag}</div>}
            <p
              className="py-2"
              dangerouslySetInnerHTML={{
                __html: product.shortDesc,
              }}
            ></p>
            <div className="block px-4 py-2 mx-auto my-12 font-bold text-center transition ease-in-out border-2 rounded-md shadow-lg md:hidden border-lime-700 md:px-8 md:py-4 w-72 md:w-96 bg-lime-50 hover:scale-105 hover:duration-700 hover:shadow-2xl">
              <a className="" href={product.url} target="_blank">
                koupit v NeraShop.cz
              </a>
            </div>
            <div
              className="py-4 "
              dangerouslySetInnerHTML={{
                __html: product.longDesc,
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
        <div className="hidden px-4 py-2 mx-auto font-bold text-center transition ease-in-out border-2 rounded-md shadow-lg md:block border-lime-700 md:px-8 md:py-4 w-72 md:w-96 bg-lime-50 hover:scale-105 hover:duration-700 hover:shadow-2xl">
          <a className="" href={product.url} target="_blank">
            koupit v NeraShop.cz
          </a>
        </div>
      </div>
    </div>
  );
}
