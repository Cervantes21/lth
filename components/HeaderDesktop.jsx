"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";

// Header principal para la vista de escritorio
export const HeaderDesktop = () => {
  const url = usePathname();
  const catalogRef = useRef();
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Manejar apertura y cierre del catálogo
  const handleCatalogOpen = () => {
    setCatalogOpen(!catalogOpen);
  };

  // Cerrar catálogo al hacer clic fuera
  const handleClickOutside = (event) => {
    if (catalogRef.current && !catalogRef.current.contains(event.target)) {
      setCatalogOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Manejar la posición sticky del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`hidden lg:block bg-blue-lth transition-opacity duration-300 ease-in-out ${
        isSticky ? "fixed top-0 left-0 w-full shadow-lg z-40 opacity-90" : "opacity-80"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-[80px] rounded-full my-2" />
        </Link>

        <nav className="flex gap-x-10 text-white font-medium text-lg">
          <div ref={catalogRef} className="relative">
            <button onClick={handleCatalogOpen} className="flex items-center">
              Catálogo
              <ChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  catalogOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {catalogOpen && (
              <ul className="absolute mt-2 border rounded shadow-lg bg-white text-blue-lth">
                <Link href="/agm" className="block p-2 hover:bg-gray-100">
                  AGM
                </Link>
                <Link href="/hitec" className="block p-2 hover:bg-gray-100">
                  HITEC
                </Link>
              </ul>
            )}
          </div>

          <Link href="/recomendaciones" className="hover:text-red-600">
            Recomendaciones
          </Link>
          <Link href="/garantias-y-ajustes" className="hover:text-red-600">
            Garantías
          </Link>
          <Link href="/centros" className="hover:text-red-600">
            Centros
          </Link>
          <Link href="/servicio" className="hover:text-red-600">
            Nosotros
          </Link>
        </nav>
      </div>
    </header>
  );
};
