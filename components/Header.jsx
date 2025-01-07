"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "react-feather";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
      className={`lg:hidden bg-gradient-to-r from-[#000839] via-[#061684] to-[#000839] transition-opacity duration-300 ease-in-out ${
        isSticky
          ? "fixed top-0 left-0 w-full shadow-lg z-40"
          : "absolute top-0 left-0 w-full z-40"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-[50px]"
          />
        </Link>

        <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeMenu}>
          <nav
            className="bg-white w-[75%] h-full absolute right-0 shadow-lg z-60 flex flex-col gap-y-4 text-blue-lth font-medium text-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/search/default"
              className="py-4 px-6 hover:bg-red-600 hover:text-white flex items-center gap-x-2"
              onClick={closeMenu}
            >
              <DotLottieReact
                src="/animations/buscar.json"
                className="w-6 h-6"
                autoplay
                loop
              />
              BUSCA TU BATERÍA
            </Link>
            <Link
              href="/catalogo"
              className="py-4 px-6 hover:bg-red-600 hover:text-white flex items-center gap-x-2"
              onClick={closeMenu}
            >
              <DotLottieReact
                src="/animations/catalogo.json"
                className="w-6 h-6"
                autoplay
                loop
              />
              CATÁLOGO
            </Link>
            <Link
              href="/centros"
              className="py-4 px-6 hover:bg-red-600 hover:text-white flex items-center gap-x-2"
              onClick={closeMenu}
            >
              <DotLottieReact
                src="/animations/marcador-de-posicion.json"
                className="w-6 h-6"
                autoplay
                loop
              />
              UBICA TU SUCURSAL
            </Link>
            <Link
              href="/recomendaciones"
              className="py-4 px-6 hover:bg-red-600 hover:text-white flex items-center gap-x-2"
              onClick={closeMenu}
            >
              <DotLottieReact
                src="/animations/garantia.json"
                className="w-10 h-10"
                autoplay
                loop
              />
              EXPERIENCIAS LTH
            </Link>
            <Link
              href="/garantias-y-ajustes"
              className="py-4 px-6 hover:bg-red-600 hover:text-white flex items-center gap-x-2"
              onClick={closeMenu}
            >
              <DotLottieReact
                src="/animations/mesa-de-ayuda.json"
                className="w-6 h-6"
                autoplay
                loop
              />
              SOPORTE
            </Link>
            <Link
              href="/nosotros"
              className="py-4 px-6 hover:bg-red-600 hover:text-white flex items-center gap-x-2"
              onClick={closeMenu}
            >
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
      )}
    </header>
  );
};

export default Header;
