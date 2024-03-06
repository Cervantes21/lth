"use client";
import { useEffect, useState } from "react";
import productos from "@/data/Catalogo";
import Image from "next/image";
import Link from "next/link";

export const CatalogoData = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Inicialmente 4 elementos por página

  useEffect(() => {
    // Función para actualizar itemsPerPage basado en el ancho de la ventana
    const updateItemsPerPage = () => {
      if (window.innerWidth > 1024) {
        setItemsPerPage(12); // Si la ventana es más ancha que 1024px, mostrar 12 elementos por página
      } else {
        setItemsPerPage(4); // Si la ventana es más estrecha que 1024px, mostrar 4 elementos por página
      }
    };

    // Actualizar itemsPerPage cuando el componente se monta
    updateItemsPerPage();

    // Agregar un event listener para el evento resize
    window.addEventListener("resize", updateItemsPerPage);

    // Limpiar el event listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []); // Dependencias vacías, por lo que este efecto se ejecuta solo una vez


  const filteredProducts = productos.filter(
    (producto) => producto.MARCA === page
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  function replacePipeWithSlash(str) {
    return str.replace(/\|/g, '/');
  }

  const cotizar = (nombre, marca) => {
    const message = `Hola, me gustaría cotizar ${nombre} de ${marca}`; // Mensaje para enviar por WhatsApp 
    const urlMessage = encodeURIComponent(message); // Mensaje codificado para la URL
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${527776002745}&text=${urlMessage}&app_absent=0`;
  
    // Abrir la URL de WhatsApp en una nueva pestaña del navegador
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <h1 className="text-center text-blue-lth font-bold text-2xl mb-5">
        CATÁLOGO
      </h1>
      <h2 className="text-center font-bold text-2xl mb-10">{page}</h2>
      <div className=" w-full px-4 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {paginatedProducts.map((producto, index) => (
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
            <p className="font-bold text-md my-1 text-center">{replacePipeWithSlash(producto.BCI)}</p>
            <button onClick={() => cotizar(replacePipeWithSlash(producto.BCI), producto.MARCA)} className="bg-red-lth text-white text-sm w-full py-1 rounded-lg">
              Cotiza Ya
            </button >
            <Link href={`/${producto.BCI}`}  className=" text-center bg-transparent transition-all duration-300 more-info-button text-gray-600 border-gray-600 border-solid border-2 text-sm font-bold w-full py-0.5 rounded-lg">
              {" "}
              Más Informacion
            </Link>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center gap-x-4 mt-10 mb-20">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 0}
          className={`rounded-full w-7 h-7 rotate-180 mr-5 transition-all duration-200 ${
            currentPage === 0
              ? "bg-transparent rotate-180"
              : "bg-red-lth cursor-pointer"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </button>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`  ${
              currentPage === num ? "text-red-500 font-bold" : ""
            }`}
          >
            {num + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage >= totalPages - 1}
          className={`ml-5 rounded-full w-7 h-7 transition-all duration-200 ${
            currentPage >= totalPages - 1
              ? "bg-transparent"
              : "bg-red-lth cursor-pointer"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
