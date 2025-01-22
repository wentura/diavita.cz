import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { data } from "./data.js";
export default function Vazeliny() {
  const kategorie = data[0];
  //   const kategorie = "vazeliny/0";
  return (
    <div className="py-6 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        {/* <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl tracking-tight text-gray-800 lg:text-7xl montserrat-900">
            {kategorie.title}
          </h2>
        </div> */}
        <div className="flex flex-col justify-between gap-2 mb-12 md:flex-row md:mb-16">
          <p className="max-w-screen-lg mx-auto text-left p-text md:text-md">
            Od roku 1992 vyrábíme v Pardubicích kvalitní produkty pro zdraví a
            péči o pokožku. Naše sirupy a kosmetika jsou vyrobeny z pečlivě
            vybraných surovin, které využívají sílu bylin k podpoře zdraví a
            pohody celé rodiny. S Diavitou se můžete spolehnout na šetrnou péči
            a účinnou ochranu pokožky i zdraví.
          </p>
        </div>
        {/* <div className="flex flex-col justify-between gap-12 mb-8 md:flex-row md:mb-24">
          <div
            className="flex flex-col w-full gap-3 py-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(kategorie.longText),
            }}
          ></div>
        </div> */}

        <div className="grid items-center justify-center grid-cols-2 gap-x-2 gap-y-4 md:gap-x-12 md:gap-y-12 lg:grid-cols-3 justify-items-center">
          {kategorie.products.map((product) => {
            return (
              <Link
                key={product.title}
                href={`/produkty/${kategorie.id}/${product.id}`}
                className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden transition ease-in-out border rounded-lg shadow-lg border-neutral-200 group lg:mb-3 hover:scale-105 hover:duration-700 hover:shadow-2xl"
              >
                <img
                  src={product.image[0]}
                  loading="lazy"
                  alt={product.title}
                  width={500}
                  height={500}
                  className="max-h-96 w-auto"
                />

                <div className="pb-4 text-center ">
                  <h2 className="mx-4 text-lg md:text-2xl first-letter:capitalize montserrat-900">
                    {product.title2}
                  </h2>
                  {/* {product.title} */}
                </div>
                {!product.flag ? null : (
                  <div className="absolute top-0 w-full md:w-auto md:right-0 p-3 text-xs bg-red-400 md:rounded-bl-full text-center md:pl-8 md:bg-red-200 bg-opacity-40 ">
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
