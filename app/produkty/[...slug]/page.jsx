import { data } from "/components/data.js";

export default function Produkty({ params }) {
  const k = params.slug[0];
  const p = params.slug[1];
  const kategorie = data[k];
  const product = data[k].products[p];
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      technicky vypis, ktery zmizi - {k} / {p}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl underline underline-offset-8">
            {product.title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row mb-8 md:mb-24 gap-8 ">
          <div className="w-full md:w-1/2">
            <p
              className="text-md py-4 "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.shortDesc),
              }}
            ></p>
            <p
              className="text-md py-4 "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.longDesc),
              }}
            ></p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={product.image[1]}
              className="max-h-96 md:max-h-[600px] object-cover object-center pt-4 mx-auto"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
