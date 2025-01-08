"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeaderDesktop = () => {
  const [isSticky, setIsSticky] = useState(false);

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
      className={`hidden lg:block bg-gradient-to-r from-[#000839] via-[#061684] to-[#000839] transition-opacity duration-300 ease-in-out ${
        isSticky
          ? "fixed top-0 left-0 w-full shadow-lg z-40"
          : "absolute top-0 left-0 w-full z-40"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-[70px]"
          />
        </Link>
        <nav className="flex space-x-8 text-white font-medium text-lg">
          <Link href="/search/default" className="flex border-4 border-blue-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 p-2 items-center gap-x-2 transition-colors duration-300">
            <DotLottieReact
              src="/animations/buscar.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            BUSCA TU BATERÍA
          </Link>
          <Link href="/catalogo" className="flex border-4 border-blue-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 p-2 items-center gap-x-2 transition-colors duration-300">
            <DotLottieReact
              src="/animations/catalogo.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            CATÁLOGO
          </Link>
          <Link href="/centros" className="flex border-4 border-blue-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 p-2 items-center gap-x-2 transition-colors duration-300">
            <DotLottieReact
              src="/animations/marcador-de-posicion.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            UBICA TU SUCURSAL
          </Link>
          <Link href="/recomendaciones" className="flex border-4 border-blue-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 p-2 items-center gap-x-2 transition-colors duration-300">
            <DotLottieReact
              src="/animations/garantia.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            EXPERIENCIA LTH
          </Link>
          <Link href="/garantias-y-ajustes" className="flex border-4 border-blue-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 p-2 items-center gap-x-2 transition-colors duration-300">
            <DotLottieReact
              src="/animations/mesa-de-ayuda.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            SOPORTE
          </Link>
          <Link href="/nosotros" className="flex border-4 border-blue-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 p-2 items-center gap-x-2 transition-colors duration-300">
            <DotLottieReact
              src="/animations/presentacion.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            ACERCA DE BEC
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderDesktop;
