import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const MarcaBanner = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  const toggleCatalog = () => setShowCatalog(!showCatalog);

  const brands = [
    { name: "Evolution", src: "/banner/evolution_banner.png", link: "/evolution" },
    { name: "Auxiliar", src: "/banner/auxiliar_banner.png", link: "/auxiliar" },
    { name: "Protect", src: "/banner/protect_banner.png", link: "/protect" },
    { name: "Hi Tec", src: "/banner/hi-tec-banner.png", link: "/hitec" },
    { name: "AGM", src: "/banner/agm_banner.png", link: "/agm" },
    { name: "Estandar", src: "/banner/estandar_banner.png", link: "/lth" },
    { name: "LTH TAXI", src: "/banner/taxi_banner.png", link: "/taxi" },
    { name: "Moto", src: "/banner/moto-banner.png", link: "/moto" },
  ];

  return (
    <div className="bg-grey-lth w-full mt-8 lg:mt-8 py-7 lg:py-16 relative">
      <div className="block w-fit mx-auto">
        <button onClick={toggleCatalog} className="mx-auto block">
          <img
            className="mx-auto w-36 lg:w-72 cursor-pointer"
            alt="lth logo"
            src="/lth-logo-1.png"
          />
        </button>
      </div>

      {showCatalog && (
        <div className="mt-6 w-full px-4 lg:px-16">
          <h2 className="text-center text-lg lg:text-2xl font-extrabold mb-4 text-red-lth">
            Nuestro Catálogo:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-blue-lth">
            {brands.map((brand, index) => (
              <Link
                key={index}
                href={brand.link}
                className="flex flex-col items-center text-center space-y-2 transform transition-transform hover:scale-105 cursor-pointer"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <p className="text-sm lg:text-base font-medium">{brand.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Ocultar en versiones móviles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div.relative {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MarcaBanner;
