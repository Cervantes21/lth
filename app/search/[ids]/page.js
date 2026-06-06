"use client";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Cards } from "@/components/Cards";
import { Whatsapp, cotizar } from "@/components/Whatsapp";
import MainForm from "@/components/MainForm";  // <--- Importamos tu formulario
import productos from "@/data/Catalogo";

export default function SearchIds() {
  // Para mostrar/ocultar el formulario
  const [showForm, setShowForm] = useState(false);

  const pathname = usePathname();
  // Extraemos la parte /search/<opciones> (por ejemplo "LTH|24,R24-etc")
  const id = pathname.replace("/search/", "");
  const ids = id.split(",").map((id) => decodeURIComponent(id));

  // Leemos los parámetros de búsqueda (tipo, ano, marca, modelo) del querystring
  const searchParams = useSearchParams();
  const tipoVehiculo = searchParams.get("tipo") || "";
  const anoVehiculo = searchParams.get("ano") || "";
  const marcaVehiculo = searchParams.get("marca") || "";
  const modeloVehiculo = searchParams.get("modelo") || "";

  // Filtramos los productos según IDs (BCI) obtenidos
  const filteredProducts = productos.filter((producto) =>
    ids.includes(producto.BCI)
  );

  const handleCall = () => {
    const phoneNumber = "+527776002745";
    window.location.href = `tel:${phoneNumber}`;
  };

  // Útil si algunas imágenes llevan "|" en el nombre
  const replacePipeWithSlash = (str) => str.replace(/\|/g, "/");

  return (
    <>
      {/* Botón para regresar al home */}
      <div className="w-full px-4 lg:px-16">
        <Link href="/" className="inline-flex m-1 p-4 border-none outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-10 h-10 arrow-back"
          >
            <path
              className="duration-300 transition-all"
              fill="#d3172e"
              fillRule="evenodd"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-4">
        {/* Título principal */}
        <h1 className="text-xl font-extrabold text-blue-lth uppercase text-center mb-4 md:text-3xl lg:text-4xl">
          Buscador
        </h1>

        {/* Imagen */}
        <div className="flex justify-center mb-5">
          <Image
            src="/bec-logo.svg"
            alt="BEC Animation"
            width={300}
            height={300}
            className="w-24 h-auto md:w-32 lg:w-40"
            style={{ height: "auto" }}
          />
        </div>

        {/* Texto mostrando el vehículo */}
        {marcaVehiculo && (
          <h2 className="text-red-lth text-center text-lg font-bold mb-4 md:text-xl lg:text-2xl max-w-2xl leading-tight">
            Tu vehículo es: <br className="md:hidden" />
            <span className="text-blue-lth">
              {marcaVehiculo.toUpperCase()} {modeloVehiculo.toUpperCase()} {anoVehiculo}
            </span>
          </h2>
        )}

        {/* Botón para corregir la respuesta */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-red-lth text-white p-2 px-6 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-md text-sm md:text-base"
          >
            {showForm ? "Ocultar formulario" : marcaVehiculo ? "Cambiar vehículo" : "Iniciar búsqueda"}
          </button>
        </div>

        {/* Al hacer clic, mostramos el formulario */}
        {showForm && (
          <div className="mb-8 w-full max-w-sm mx-auto">
            <MainForm forceShowForm={true} compact={true} />
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center py-6">
            <h2 className="text-lg font-bold text-red-lth uppercase text-center md:text-2xl">
              {ids.includes("default") || !marcaVehiculo 
                ? "¡Iniciemos la búsqueda de tu batería!" 
                : "No se encontraron productos"}
            </h2>
            <p className="text-center font-light mt-2 text-base md:text-lg">
              {ids.includes("default") || !marcaVehiculo
                ? "Utiliza el formulario de arriba para configurar tu vehículo."
                : "No te preocupes, llámanos y te asesoramos."}
            </p>
            {!(ids.includes("default") || !marcaVehiculo) && (
              <button
                onClick={handleCall}
                className="bg-red-lth mt-6 p-2 px-8 rounded-xl text-white text-base font-bold hover:bg-red-700 transition-all shadow-lg"
              >
                ¡Llama ahora!
              </button>
            )}
          </div>
        ) : (
          <p className="mt-4 mb-8 text-center text-base font-light sm:text-lg lg:text-xl leading-relaxed max-w-xl">
            Estas son las baterías compatibles con tu vehículo
          </p>
        )}
      </div>

      {/* Render de productos */}
      <div className="w-full px-4 grid grid-cols-2 lg:grid-cols-4 lg:px-16 gap-4 mb-40 max-w-7xl mx-auto">
        {filteredProducts.map((producto, index) => (
          <div
            className="bg-grey-lth flex flex-col gap-y-3 items-center p-4 rounded-xl"
            key={index}
          >
            {/* Imagen del producto */}
            <div className="min-h-40 overflow-hidden flex items-center">
              <Image
                src={`/${producto.IMAGEN}`}
                alt={replacePipeWithSlash(producto.BCI)}
                width={500}
                height={300}
                className="w-36 transition-all duration-300 ease-in-out transform hover:scale-110 lg:w-48"
              />
            </div>
            <p className="lg:text-xl font-bold text-md my-1 text-center text-blue-lth">
              {replacePipeWithSlash(producto.BCI)}
            </p>
            <p className="lg:text-xl font-bold text-md my-1 text-center">
              {producto.MARCA}
            </p>
            {/* Mostrar precio si existe */}
            {producto.PRECIO && (
              <p className="text-red-lth font-extrabold text-lg lg:text-2xl my-1">
                {producto.PRECIO}
              </p>
            )}
            <button
              onClick={() => cotizar(producto.BCI, producto.MARCA)}
              className="lg:text-lg bg-red-lth text-white text-sm w-full py-1 rounded-lg"
            >
              COTIZA TU BATERÍA CON DESCUENTO ESPECIAL
            </button>
            <Link
              href={`/${producto.BCI}`}
              className="lg:text-lg text-center bg-transparent transition-all duration-300 more-info-button text-gray-600 border-gray-600 border-solid border-2 text-sm font-bold w-full py-0.5 rounded-lg"
            >
              Más Información
            </Link>
          </div>
        ))}
      </div>

      {/* Secciones adicionales */}
      <Cards page="all" />
      <Whatsapp />
    </>
  );
}
