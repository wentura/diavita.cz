import { isSupported, sanitize } from "isomorphic-dompurify";
import { data } from "/components/data.js";

export default function Page({ params }) {
  const kategorie = data[params.slug[1]];
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            {kategorie.title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <p
            className="py-4 max-w-full md:max-w-1/2 lg:max-w-2/3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(kategorie.text),
            }}
          ></p>
        </div>
        <div className="flex flex-col md:flex-row mb-8 md:mb-24 gap-12 justify-between">
          <div
            className="py-4 w-full md:w-2/3 flex flex-col gap-3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(kategorie.longText),
            }}
          ></div>
          <img
            src={kategorie.catImage}
            className="max-w-full md:max-w-1/2 lg:max-w-1/3 max-h-96 object-cover object-center"
          />
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          {kategorie.products.map((product) => {
            return (
              <div key={product.title}>
                <a
                  href={`/produkty/${kategorie.id}/${product.id}`}
                  className="group relative mb-2 block overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
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
                    className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                  >
                    {product.title}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
