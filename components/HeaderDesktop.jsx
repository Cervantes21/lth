"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";

export const HeaderDesktop = () => {
  const url = usePathname();
  const catalogRef = useRef();

  console.log(url);

  const [catalogOpen, setCatalogOpen] = useState(false);

  const handleCatalogOpen = () => {
    setCatalogOpen(!catalogOpen);
  };

  // Función para manejar el click fuera del catálogo
  const handleClickOutside = (event) => {
    if (catalogRef.current && !catalogRef.current.contains(event.target)) {
      setCatalogOpen(false);
    }
  };

  // Agregar el event listener cuando el componente se monta y limpiarlo cuando se desmonta
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="hidden lg:flex bg-blue-lth h-24">
      <div className="w-full max-w-[1300px] mx-auto flex flex-row justify-between items-center">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[80px] rounded-full my-2"
          />
        </Link>
        <nav className="flex gap-x-10 text-white font-medium text-lg transition-colors duration-300">
          <div ref={catalogRef} className="flex flex-col">
            <button
              onClick={handleCatalogOpen}
              className="hover:text-red-600 transition-colors duration-300 flex items-center"
            >
              Catalogo{" "}
              <ChevronDown
                size={19}
                className={`transition-transform duration-200 ${
                    catalogOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            <div
              className={`absolute ${
                catalogOpen ? "flex" : "hidden"
              } flex-col translate-y-[45px] -translate-x-3 bg-blue-lth p-4 gap-y-4 z-50 w-32`}
              onClick={() => setCatalogOpen(false)}
            >
              <Link
                className="hover:text-red-600 transition-colors duration-300"
                href="/lth"
              >
                LTH
              </Link>
              <Link
                className="hover:text-red-600 transition-colors duration-300"
                href="/hitec"
              >
                HI-TEC
              </Link>
              <Link
                className="hover:text-red-600 transition-colors duration-300"
                href="/agm"
              >
                AGM
              </Link>
            </div>
          </div>
          <Link
            className="hover:text-red-600 transition-colors duration-300"
            href="/recomendaciones"
          >
            Recomendaciones
          </Link>
          <Link
            className="hover:text-red-600 transition-colors duration-300"
            href="/garantias-y-ajustes"
          >
            Garantias
          </Link>
          <Link
            className="hover:text-red-600 transition-colors duration-300"
            href="/centros"
          >
            Centros
          </Link>
          <Link
            className="hover:text-red-600 transition-colors duration-300"
            href="/servicio"
          >
            Nosotros
          </Link>
        </nav>
      </div>
    </header>
  );
};
