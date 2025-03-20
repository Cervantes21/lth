'use client';

import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

export default function Banner() {
  const [showCatalog, setShowCatalog] = useState(false);
  const [isMobileResolution, setIsMobileResolution] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1024; // Ancho típico para móviles y tablets
      setIsMobileResolution(isMobile);
    };

    // Check resolution on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCall = () => {
    const phoneNumber = "+527776002745";
    window.location.href = `tel:${phoneNumber}`;
  };

  const toggleCatalog = () => setShowCatalog(!showCatalog);

  return (
    <div
      className="relative flex flex-col justify-center items-center bg-cover bg-center text-white pt-8 px-4"
      style={{
        backgroundImage: `url('/banner/LTH-FONDO-BANNER-SUPERIOR.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Contenedor de baterías para pantallas grandes */}
      {!isMobileResolution && (
        <>
          <div className="flex justify-items-center items-center lg:flex absolute top-1/2 -translate-y-1/2 left-8 space-x-4">
            <a href="/evolution" className="transform hover:scale-105 transition-transform banner-bateria">
              <Image src="/banner/evolution_banner.webp" alt="Evolution" width={100} height={100} />
            </a>
            <a href="/protect" className="transform hover:scale-105 transition-transform banner-bateria">
              <Image src="/banner/protect_banner.webp" alt="Protect" width={100} height={100} />
            </a>
            <a href="/auxiliar" className="transform hover:scale-105 transition-transform banner-bateria">
              <Image src="/banner/auxiliar_banner.webp" alt="Auxiliar" width={100} height={100} />
            </a>
            <a href="/motobaterias" className="transform hover:scale-105 transition-transform banner-bateria">
              <Image src="/banner/motobateria_banner.webp" alt="Moto-baterías" width={100} height={100} />
            </a>
          </div>

          <div className="flex justify-center items-center lg:flex absolute top-1/2 -translate-y-1/2 right-8 space-x-4">
            <a href="/hitec" className="transform hover:scale-105 transition-transform banner-bateria">
              <Image src="/banner/hi-tec-banner.webp" alt="Hi Tec" width={100} height={100} />
            </a>
            <a href="/lth" className="transform hover:scale-105 transition-transform banner-bateria">
              <Image src="/banner/estandar_banner.webp" alt="Estandar" width={100} height={100} />
            </a>
            <a href="/taxi" className="transform hover:scale-105 transition-transform banner-bateria">
              <Image src="/banner/taxi_banner.webp" alt="Taxi" width={100} height={100} />
            </a>

          </div>
        </>
      )}

      {/* Contenido central del banner */}
      <div className="text-center flex flex-col items-center justify-center space-y-4 lg:space-y-6 px-4">
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight mt-8 lg:mt-0">
          Cambio de Batería a Domicilio
        </h1>

        {/* Botón de llamada con icono */}
        <button
          onClick={handleCall}
          className="flex items-center justify-center space-x-2 bg-red-600 text-white text-lg lg:text-2xl font-bold py-3 px-6 rounded-full hover:bg-green-500 hover:text-black transition-all duration-150 mb-1 shadow-2xl"
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

        {/* Botón desplegable del catálogo en versión móvil o resolución específica */}
        {(isMobileResolution || showCatalog) && (
          <button
            onClick={toggleCatalog}
            className="lg:hidden flex items-center justify-center space-x-2 bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-500 transition-all duration-150 mt-6"
            style={{ marginBottom: '16px' }}
          >
            <span>Catálogo</span>
            <Image
              src="/banner/angle-small-down.svg"
              alt="Toggle Catalog"
              width={20}
              height={20}
            />
          </button>
        )}

        {/* Catálogo desplegable */}
        {showCatalog && (
          <div
            className="bg-white text-black mt-2 py-2 px-4 rounded shadow-lg w-full"
            style={{ marginBottom: '16px' }}
          >
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="/evolution"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-red-600 hover:text-white transition-all"
                >
                  <Image
                    src="/banner/evolution_banner.webp"
                    alt="Evolution"
                    width={40}
                    height={40}
                  />
                  <span>LTH® EVOLUTION</span>
                </a>
              </li>
              <li>
                <a
                  href="/auxiliar"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-red-600 hover:text-white transition-all"
                >
                  <Image
                    src="/banner/auxiliar_banner.webp"
                    alt="Auxiliar"
                    width={40}
                    height={40}
                  />
                  <span>LTH® AUXILIAR</span>
                </a>
              </li>
              <li>
                <a
                  href="/protect"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-red-600 hover:text-white transition-all"
                >
                  <Image
                    src="/banner/protect_banner.webp"
                    alt="Protect"
                    width={40}
                    height={40}
                  />
                  <span>LTH® PROTECT</span>
                </a>
              </li>
              <li>
                <a
                  href="/hitec"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-red-600 hover:text-white transition-all"
                >
                  <Image
                    src="/banner/hi-tec-banner.webp"
                    alt="Hi Tec"
                    width={40}
                    height={40}
                  />
                  <span>LTH® HI-TEC</span>
                </a>
              </li>
              <li>
                <a
                  href="/lth"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-red-600 hover:text-white transition-all"
                >
                  <Image
                    src="/banner/estandar_banner.webp"
                    alt="Estandar"
                    width={40}
                    height={40}
                  />
                  <span>LTH® ESTANDAR</span>
                </a>
              </li>
              <li>
                <a
                  href="/taxi"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-red-600 hover:text-white transition-all"
                >
                  <Image
                    src="/banner/taxi_banner.webp"
                    alt="LTH TAXI"
                    width={40}
                    height={40}
                  />
                  <span>LTH® TAXI</span>
                </a>
                <a
                  href="/motobaterias"
                  className="flex items-center space-x-2 p-2 rounded hover:bg-red-600 hover:text-white transition-all"
                >
                  <Image
                    src="/banner/motobateria_banner.webp"
                    alt="Moto Baterías"
                    width={40}
                    height={40}
                  />
                  <span>LTH® MOTO-BATERÍAS</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
