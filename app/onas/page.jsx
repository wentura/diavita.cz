export default function Onas() {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      {/* technicky vypis, ktery zmizi - {k} / {p} */}
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="w-full text-2xl tracking-tight text-center p-text lg:text-7xl md:text-left montserrat-900">
            Diavita
          </h2>
          <h4 className="w-full tracking-tight text-center text-md p-text lg:text-2xl md:text-left lg:montserrat-900">
            Přírodní péče pro zdraví a krásu vaší rodiny již od roku 1992.
          </h4>
        </div>
        <div className="mb-8 lg:w-2/3 lg:mx-auto p-text">
          Diavita je česká firma s více než 30letou tradicí, která přináší do
          vašich domovů kvalitní a spolehlivé produkty pro zdraví i každodenní
          péči. V naší nabídce naleznete široký sortiment bylinných sirupu a
          vazelín, které jsou pečlivě vyrobeny z kvalitních surovin a podle
          osvědčených receptur.
        </div>
        <div className="mb-8 lg:w-2/3 lg:mx-auto p-text">
          Bylinné sirupy s obsahem jitrocele obohacené o vitamín C,působí
          blahodárně na dýchací cesty a posílení imunity zejména v chladnějším
          období. Nabízíme variantu bez cukru.
        </div>{" "}
        <div className="mb-8 lg:w-2/3 lg:mx-auto p-text">
          Pro péči o pokožku nabízíme řadu vazelín Valinka – od čisté a bílé až
          po speciální konopnou či rakytníkovou variantu. Naše vazelíny
          poskytují intenzivní hydrataci, ochranu a regeneraci i pro tu
          nejnáročnější pokožku.
        </div>{" "}
        <div className="mb-8 lg:w-2/3 lg:mx-auto p-text">
          Diavita vám přináší produkty, které spojují přírodní sílu bylin s
          moderními přístupy, abyste mohli pečovat o své zdraví a krásu s
          důvěrou. Každý z našich produktů je výsledkem pečlivé práce, abyste se
          mohli spolehnout na jejich účinnost a kvalitu.
        </div>{" "}
        <div className="mb-8 lg:w-2/3 lg:mx-auto p-text">
          Naše výrobky jsou dostupné v síti lékáren a můžete si je také
          jednoduše objednat z pohodlí domova prostřednictvím{" "}
          <a href="https://www.nerashop.cz/znacka/diavita/" target="_blank">
            našeho e-shopu Nerashop.cz
          </a>
        </div>{" "}
      </div>
    </div>
  );
}
