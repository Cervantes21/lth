import React from "react";
import Link from "next/link";

const Portada = ({ onMotociclistaClick }) => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-start">
      {/* Texto Principal */}
      <div className="absolute mt-8 w-full text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-lth leading-tight">
          ¿Te quedaste sin batería?
        </h1>
        <p className="text-base md:text-2xl text-blue-lth mt-4">
          No te preocupes, salvamos tu día
        </p>
      </div>

      {/* Motociclista */}
      <div
        className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform flex flex-col items-center"
        onClick={onMotociclistaClick}
      >
        <img
          src="/motociclista.png"
          alt="Motociclista"
          className="w-[240px] md:w-[300px] h-auto"
        />
        <p className="text-blue-lth text-sm mt-2 md:hidden">
          (Presiona el motociclista para iniciar tu búsqueda)
        </p>
      </div>

      {/* Contenedor de las baterías */}
      <div className="absolute bottom-[20%] right-[5%] transform translate-x-[80%] w-auto h-auto hidden md:block">
        <div className="cursor-pointer hover:scale-110 transition-transform">
          <Link href="/lth">
            <img
              src="/circulo_baterias.svg"
              alt="Círculo de Baterías"
              className="w-[280px] md:w-[380px] h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portada;
