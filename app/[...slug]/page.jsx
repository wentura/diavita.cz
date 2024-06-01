import { isSupported, sanitize } from "isomorphic-dompurify";
import Link from "next/link";
import { data } from "/components/data.js";
export default function Page({ params }) {
  const kategorie = data[params.slug[1]];
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-7xl">
            {kategorie.title}
          </h2>
        </div>
        {/* <div className="flex flex-col md:flex-row gap-8">
          <p
            className="py-4 max-w-full md:max-w-1/2 lg:max-w-2/3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(kategorie.text),
            }}
          ></p>
        </div> */}
        <div className="flex flex-col md:flex-row mb-8 md:mb-24 gap-12 justify-between">
          <div
            className="py-4 w-full flex flex-col gap-3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(kategorie.longText),
            }}
          ></div>
          {/* <img
            src={kategorie.catImage}
            className="max-w-full md:max-w-1/2 lg:max-w-1/3 max-h-96 object-cover object-center"
          /> */}
        </div>

        <div className="grid gap-x-24 gap-y-24 sm:grid-cols-2 md:gap-x-12 lg:grid-cols-3 items-center justify-items-center justify-center">
          {kategorie.products.map((product) => {
            return (
              <Link
                key={product.title}
                href={`/produkty/${kategorie.id}/${product.id}`}
                className="group overflow-hidden lg:mb-3 relative flex flex-col justify-center items-center mx-4 rounded-lg w-full h-full shadow-lg hover:scale-105 transition hover:duration-700 hover:shadow-2xl ease-in-out my-12"
              >
                <img
                  src={product.image[0]}
                  loading="lazy"
                  alt={product.title}
                  width={200}
                  height={300}
                  className=""
                />

                <div className="text-center pt-8 pb-4">
                  <h2 className="text-bold text-2xl capitalize">
                    {product.title2}
                  </h2>
                  {product.title}
                </div>
                {!product.flag ? null : (
                  <div className="absolute top-0 right-0 bg-red-200 p-3 pl-8 bg-opacity-40 text-xs rounded-bl-full">
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
