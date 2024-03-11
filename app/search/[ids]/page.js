"use client";

import { Cards } from "@/components/Cards";
import { Whatsapp, cotizar } from "@/components/Whatsapp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import productos from "@/data/Catalogo";
import Image from "next/image";

export default function SearchIds() {
  const pathname = usePathname();
  const id = pathname.replace("/search/", "");
  const ids = id.split(",").map(id => decodeURIComponent(id)); // Decodifica cada ID
  console.log(ids);
  const filteredProducts = productos.filter((producto) =>
    ids.includes(producto.BCI)
  );

  function replacePipeWithSlash(str) {
    return str.replace(/\|/g, '/');
}

const handleCall = () => {
  // Número de teléfono al que se va a llamar
  const phoneNumber = "+527776002745";
  // Abrir la aplicación de teléfono para realizar una llamada
  window.location.href = `tel:${phoneNumber}`;
};

  return (
    <>
      <Link href="/" className=" flex w-10 m-3 p-0 border-none outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="w-10 h-10 arrow-back"
        >
          <path
            className=" duration-300 transition-all"
            fill="#d3172e"
            fillRule="evenodd"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      <h1 className="text-xl font-bold text-blue-lth uppercase w-full text-center mb-10 lg:text-3xl">Buscador</h1>

      {
        filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-red-lth uppercase w-full text-center lg:text-xl">No se encontraron productos</h2>
            <p className="text-center font-light lg:text-xl mt-4">No te preocupes, llámanos</p>
            <button onClick={handleCall} className="bg-red-lth mt-10 p-2 px-6 rounded-xl text-white text-lg">Llamar ahora</button>
          </div>
        ) : (
          <p className="mt-10 mb-16 w-96 mx-auto text-center text-lg font-light lg:font-medium lg: lg:w-full lg:text-xl">Estos son los productos que mejor se ajustan a su búsqueda</p>
        )
      }

      <div className=" w-full px-4 grid grid-cols-2 lg:grid-cols-4 lg:px-16 gap-3 mb-40">

        {filteredProducts.map((producto, index) => (
          <div
            className=" bg-grey-lth flex flex-col gap-y-3 items-center p-4 rounded-xl"
            key={index}
          >
            <div className="min-h-40 overflow-hidden flex items-center">
              <Image
                src={`/${producto.IMAGEN}`}
                alt={replacePipeWithSlash(producto.BCI)}
                width={500}
                height={300}
                className="w-36 transition-all duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <p className="font-bold text-md mt-1 text-center">{replacePipeWithSlash(producto.BCI)}</p>
            <p className="font-medium text-sm mb-2 text-center">{producto.MARCA}</p>
            <button
              onClick={() => cotizar(producto.BCI, producto.MARCA)}
              className="bg-red-lth text-white text-sm w-full py-1 rounded-lg"
            >
              Cotiza Ya
            </button>
            <Link
              href={`/${producto.BCI}`}
              className=" text-center bg-transparent transition-all duration-300 more-info-button text-gray-600 border-gray-600 border-solid border-2 text-sm font-bold w-full py-0.5 rounded-lg"
            >
              {" "}
              Más Información
            </Link>
          </div>
        ))}
      </div>

      <Cards page="all" />
      <Whatsapp />
    </>
  );
}
