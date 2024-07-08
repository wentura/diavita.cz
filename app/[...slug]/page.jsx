import DOMPurify from "isomorphic-dompurify";

import Link from "next/link";
import { data } from "/components/data.js";
export default function Page({ params }) {
  const kategorie = data[params.slug[1]];
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-7xl">
            {kategorie.title}
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-12 mb-8 md:flex-row md:mb-24">
          <div
            className="flex flex-col w-full gap-3 py-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(kategorie.longText),
            }}
          ></div>
        </div>

        <div className="grid items-center justify-center gap-x-24 gap-y-24 sm:grid-cols-2 md:gap-x-12 lg:grid-cols-3 justify-items-center">
          {kategorie.products.map((product) => {
            return (
              <Link
                key={product.title}
                href={`/produkty/${kategorie.id}/${product.id}`}
                className="relative flex flex-col items-center justify-center w-full h-full mx-4 my-12 overflow-hidden transition ease-in-out rounded-lg shadow-lg group lg:mb-3 hover:scale-105 hover:duration-700 hover:shadow-2xl"
              >
                <img
                  src={product.image[0]}
                  loading="lazy"
                  alt={product.title}
                  width={200}
                  height={300}
                  className=""
                />

                <div className="pt-8 pb-4 text-center">
                  <h2 className="text-2xl capitalize text-bold">
                    {product.title2}
                  </h2>
                  {product.title}
                </div>
                {!product.flag ? null : (
                  <div className="absolute top-0 right-0 p-3 pl-8 text-xs bg-red-200 rounded-bl-full bg-opacity-40">
                    {product.flag}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
