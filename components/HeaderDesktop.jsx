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
      className={`hidden lg:block bg-blue-lth transition-opacity duration-300 ease-in-out ${
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
          <Link href="/servicio" className="flex items-center gap-x-2 hover:text-red-600 transition-colors duration-300">
            <DotLottieReact
              src="/animations/presentacion.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            Quiénes somos
          </Link>
          <Link href="/search/default" className="flex items-center gap-x-2 hover:text-red-600 transition-colors duration-300">
            <DotLottieReact
              src="/animations/buscar.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            Busca tu Batería
          </Link>
          <Link href="/centros" className="flex items-center gap-x-2 hover:text-red-600 transition-colors duration-300">
            <DotLottieReact
              src="/animations/marcador-de-posicion.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            Ubica tu Sucursal
          </Link>
          <Link href="/recomendaciones" className="flex items-center gap-x-2 hover:text-red-600 transition-colors duration-300">
            <DotLottieReact
              src="/animations/mesa-de-ayuda.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            Preguntas Frecuentes y Recomendaciones
          </Link>
          <Link href="/garantias-y-ajustes" className="flex items-center gap-x-2 hover:text-red-600 transition-colors duration-300">
            <DotLottieReact
              src="/animations/garantia.json"
              className="w-6 h-6"
              autoplay
              loop
            />
            Garantías
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderDesktop;
