'use client';

import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

export default function Banner() {
  const [showCatalog, setShowCatalog] = useState(false);

  const handleCall = () => {
    const phoneNumber = "+527776002745";
    window.location.href = `tel:${phoneNumber}`;
  };

  const toggleCatalog = () => setShowCatalog(!showCatalog);

  return (
    <div
      className="relative flex flex-col justify-center items-center bg-cover bg-center text-white pt-8 px-4"
      style={{
        backgroundImage: `url('/banner/LTH-FONDO-BANNER-SUPERIOR.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Contenedor de baterías para pantallas grandes */}
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-8 space-x-4">
        <a href="/evolution" className="transform hover:scale-105 transition-transform">
          <Image src="/banner/evolution_banner.png" alt="Evolution" width={100} height={100} />
        </a>
        <a href="/protect" className="transform hover:scale-105 transition-transform">
          <Image src="/banner/protect_banner.png" alt="Protect" width={100} height={100} />
        </a>
        <a href="/auxiliar" className="transform hover:scale-105 transition-transform">
          <Image src="/banner/auxiliar_banner.png" alt="Auxiliar" width={100} height={100} />
        </a>
      </div>

      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-8 space-x-4">
        <a href="/hitec" className="transform hover:scale-105 transition-transform">
          <Image src="/banner/hi-tec-banner.png" alt="Hi Tec" width={100} height={100} />
        </a>
        <a href="/lth" className="transform hover:scale-105 transition-transform">
          <Image src="/banner/estandar_banner.png" alt="Estandar" width={100} height={100} />
        </a>
        <a href="/moto" className="transform hover:scale-105 transition-transform">
          <Image src="/banner/moto-banner.png" alt="Moto" width={100} height={100} />
        </a>
      </div>

      {/* Contenido central del banner */}
      <div className="text-center flex flex-col items-center justify-center space-y-4 lg:space-y-6 px-4">
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight mt-8 lg:mt-0">
          Cambio de Batería a Domicilio
        </h1>

        {/* Botón de llamada con icono */}
        <button
          onClick={handleCall}
          className="flex items-center justify-center space-x-2 bg-red-600 text-white text-lg lg:text-2xl font-bold py-3 px-6 rounded-full hover:bg-green-500 hover:text-black transition-all duration-150 mb-1"
        >
          <span className="text-base lg:text-2xl">¡LLAMA YA!</span>
          <DotLottieReact
            src="/animations/llamada-entrante.json"
            className="w-8 h-8"
            autoplay
            loop
          />
          <span className="lg:text-2xl">7776002745</span>
        </button>

        {/* Texto descriptivo con línea animada */}
        <div className="mt-2 text-lg lg:text-xl flex flex-col items-center">
          <p>Venta, Cambio y Diagnóstico de Batería a Domicilio</p>
          <DotLottieReact
            src="/animations/lines.json"
            className="w-full h-8 mt-0"
            autoplay
            loop
          />
        </div>

        {/* Botón desplegable para móviles */}
        <button
          onClick={toggleCatalog}
          className="lg:hidden flex items-center justify-center space-x-2 bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-500 transition-all duration-150 mt-6"
          style={ { marginBottom: '16px' } }
        >
          <span>Catálogo</span>
          <Image
            src="/banner/angle-small-down.svg"
            alt="Toggle Catalog"
            width={20}
            height={20}
          />
        </button>

        {/* Catálogo desplegable */}
        {showCatalog && (
          <div
            className="bg-white text-black mt-2 py-2 px-4 rounded shadow-lg w-full"
            style={{ marginBottom: '16px' }}
          >
            <ul className="flex flex-col space-y-2">
              <li className="flex items-center space-x-2">
                <Image
                  src="/banner/evolution_banner.png"
                  alt="Evolution"
                  width={40}
                  height={40}
                />
                <a href="/evolution" className="hover:text-red-600">Evolution</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/banner/auxiliar_banner.png"
                  alt="Auxiliar" width={40} height={40}
                />
                <a href="/auxiliar" className="hover:text-red-600">Auxiliar</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/banner/protect_banner.png"
                  alt="Protect"
                  width={40}
                  height={40}
                />
                <a href="/protect" className="hover:text-red-600">Protect</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/banner/hi-tec-banner.png"
                  alt="Hi Tec" width={40} height={40}
                />
                <a href="/hitec" className="hover:text-red-600">Hi Tec</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/banner/agm_banner.png"
                  alt="AGM" width={40} height={40}
                />
                <a href="/agm" className="hover:text-red-600">AGM</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/banner/estandar_banner.png"
                  alt="Estandar" width={40} height={40}
                />
                <a href="/lth" className="hover:text-red-600">Estandar</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/banner/taxi_banner.png"
                  alt="LTH TAXI" width={40} height={40}
                />
                <a href="/taxi" className="hover:text-red-600">LTH TAXI</a>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/banner/moto-banner.png"
                  alt="Moto" width={40} height={40}
                />
                <a href="/moto" className="hover:text-red-600">LTH Moto</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
