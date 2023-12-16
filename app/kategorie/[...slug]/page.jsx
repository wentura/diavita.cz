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
        <p className="text-sm py-4">{kategorie.longText}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          {kategorie.products.map((product) => {
            return (
              <div key={product.title}>
                <a
                  href={product.url}
                  className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                >
                  <img
                    src={product.image}
                    loading="lazy"
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>

                <div className="text-center">
                  <a
                    href={product.url}
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
