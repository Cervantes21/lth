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
      <div className="mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-[70px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex px-6 py-1 xl:px-8 xl:py-2 max-w-screen-2xl space-x-2 xl:space-x-4 text-white font-medium text-sm xl:text-md">
          {[
            { href: "/search/default", label: "BUSCA TU BATERÍA", animation: "/animations/buscar.json" },
            { href: "/catalogo", label: "CATÁLOGO", animation: "/animations/catalogo.json" },
            { href: "/centros", label: "UBICA TU SUCURSAL", animation: "/animations/marcador-de-posicion.json" },
            { href: "/recomendaciones", label: "EXPERIENCIA LTH", animation: "/animations/garantia.json" },
            { href: "/garantias-y-ajustes", label: "SOPORTE", animation: "/animations/mesa-de-ayuda.json" },
            { href: "/nosotros", label: "ACERCA DE BEC", animation: "/animations/presentacion.json" },
          ].map(({ href, label, animation }) => (
            <Link
              key={href}
              href={href}
              className="flex mx-auto items-center gap-x-0 xl:gap-x-2 border-2 border-blue-700 rounded-md hover:bg-blue-700 hover:text-white px-0 py-1 xl:px-2 xl:py-2 transition-all duration-300"
            >
              <DotLottieReact
                src={animation}
                className="w-4 h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                autoplay
                loop
              />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderDesktop;
