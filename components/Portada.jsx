import React from "react";
import Link from "next/link";

const Portada = ({ onMotociclistaClick }) => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-start">
      {/* Texto Principal */}
      <div className="absolute top-0 md:top-0 lg:top-4 w-full text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-lth leading-tight">
          ¿Te quedaste sin batería?
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl text-blue-lth mt-2 lg:mt-4">
          No te preocupes, salvamos tu día
        </p>
      </div>

      {/* Motociclista */}
      <div
        className="motociclista absolute bottom-[15%] md:bottom-[12%] lg:bottom-[10%] left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform flex flex-col items-center"
        onClick={onMotociclistaClick}
      >
        <img
          src="/motociclista.png"
          alt="Motociclista"
          className="w-[180px] sm:w-[140px] md:w-[160px] lg:w-[320px] h-auto"
        />
        <p className="text-blue-lth text-sm mt-2 md:hidden">
          (Presiona el motociclista para iniciar tu búsqueda)
        </p>
      </div>

      {/* Contenedor de las baterías */}
      <div className="absolute bottom-20 md:bottom-10 lg:bottom-20 right-[10%] md:right-[8%] lg:right-[5%] w-auto h-auto hidden lg:block cursor-pointer hover:scale-110 transition-transform">
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
