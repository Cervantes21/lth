import React, { useEffect, useState } from "react";
import Link from "next/link";

const Portada = ({ onMotociclistaClick }) => {
  const [isSpecificResolution, setIsSpecificResolution] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSpecific = window.innerWidth === 1024 && window.innerHeight === 600;
      setIsSpecificResolution(isSpecific);
    };

    // Check resolution on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-start">
      {/* Texto Principal */}
      <div className="absolute top-0 w-full text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-lth leading-tight">
          ¿Te quedaste sin batería?
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl text-blue-lth mt-2">
          No te preocupes, salvamos tu día
        </p>
      </div>

      {/* Motociclista */}
      <div
        className="motociclista absolute bottom-[15%] md:bottom-[12%] left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform flex flex-col items-center"
        onClick={onMotociclistaClick}
      >
        <img
          src="/motociclista.png"
          alt="Motociclista"
          className="w-[180px] sm:w-[140px] md:w-[160px] lg:w-[320px] h-auto"
        />
        {/* Ocultar texto solo en resolución 1024x600 */}
        {!isSpecificResolution && (
          <p className="text-blue-lth text-sm mt-2 md:hidden lg:block">
            (Presiona el motociclista para iniciar tu búsqueda)
          </p>
        )}
      </div>

      {/* Contenedor del círculo de baterías */}
      <div className="circulo-baterias absolute bottom-20 md:bottom-10 right-[10%] md:right-[8%] w-auto h-auto hidden lg:block cursor-pointer hover:scale-110 transition-transform">
        <Link href="/lth">
          <img
            src="/circulo_baterias.svg"
            alt="Círculo de Baterías"
            className="w-[180px] md:w-[240px] lg:w-[340px] h-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default Portada;
