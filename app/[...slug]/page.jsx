import { isSupported, sanitize } from "isomorphic-dompurify";
import { data } from "/components/data.js";

export default function Page({ params }) {
  const kategorie = data[params.slug[1]];
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-5xl">
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
            className="py-4 w-full md:w-2/3 flex flex-col gap-3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(kategorie.longText),
            }}
          ></div>
          {/* <img
            src={kategorie.catImage}
            className="max-w-full md:max-w-1/2 lg:max-w-1/3 max-h-96 object-cover object-center"
          /> */}
        </div>

        <div className="grid gap-x-24 gap-y-24 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 items-center justify-items-center justify-center">
          {kategorie.products.map((product) => {
            return (
              <div
                key={product.title}
                className="relative flex flex-col justify-center items-center mx-8 "
              >
                <a
                  href={`/produkty/${kategorie.id}/${product.id}`}
                  className="group relative mb-2 block overflow-hidden lg:mb-3"
                >
                  <img
                    src={product.image[0]}
                    loading="lazy"
                    alt={product.title}
                    className="h-full max-h-96"
                  />
                </a>
                <div className="text-center">
                  <a
                    href={`/produkty/${kategorie.id}/${product.id}`}
                    className="hover:text-gray-800 font-bold mb-1 text-gray-500 transition duration-100 lg:text-xl"
                  >
                    {product.title}
                    <br />
                    {product.title2}
                  </a>
                </div>
                {!product.flag ? null : (
                  <div className="absolute top-2 right-1 bg-red-200 p-2 rounded-md opacity-75">
                    {product.flag}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
