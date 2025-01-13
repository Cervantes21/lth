"use client";
import { useEffect, useState } from "react";
import productos from "@/data/Catalogo";
import Image from "next/image";
import Link from "next/link";

export const CatalogoData = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(0); // Estado para la página actual de la paginación
  const [itemsPerPage, setItemsPerPage] = useState(4); // Estado para definir la cantidad de elementos por página, con valor inicial de 4

  useEffect(() => {
    // Función para actualizar itemsPerPage según el ancho de la ventana
    const updateItemsPerPage = () => {
      if (window.innerWidth > 1024) {
        setItemsPerPage(12); // Si el ancho de la ventana es mayor a 1024px, mostrar 12 elementos por página
      } else {
        setItemsPerPage(4); // Si es menor o igual a 1024px, mostrar 4 elementos por página
      }
      setCurrentPage(0); // Reinicia la paginación
    };

    // Ejecutar la función una vez al montar el componente para establecer itemsPerPage inicial
    updateItemsPerPage();

    // Escuchar cambios en el tamaño de la ventana para ajustar itemsPerPage dinámicamente
    window.addEventListener("resize", updateItemsPerPage);

    // Limpiar el event listener al desmontar el componente para evitar fugas de memoria
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []); // Efecto ejecutado solo una vez al montar el componente

  // Filtrar productos por marca seleccionada
  const filteredProducts = productos.filter(
    (producto) => producto.MARCA === page
  );

  // Calcular el número total de páginas según la cantidad de productos filtrados y los itemsPerPage
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Seleccionar productos a mostrar en la página actual
  const paginatedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Función para reemplazar el carácter "|" con "/" en un string (por ejemplo, en el nombre de un producto)
  function replacePipeWithSlash(str) {
    return str.replace(/\|/g, "/");
  }

  // Función para generar y abrir un mensaje de WhatsApp para cotización de productos
  const cotizar = (nombre, marca) => {
    const message = `Hola, me gustaría cotizar ${nombre} de ${marca}`; // Mensaje personalizado para enviar por WhatsApp
    const urlMessage = encodeURIComponent(message); // Codificación para URL
    const whatsappURL = `https://api.whatsapp.com/send/?phone=527776002745&text=${urlMessage}&app_absent=0`;

    // Abrir la URL de WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <h1 className="text-center text-blue-lth font-bold text-2xl mb-5">
        CATÁLOGO
      </h1>
      <h2 className="text-center font-bold text-2xl mb-10">{page}</h2>

      {/* Contenedor para mostrar productos en formato de grid */}
      <div className="w-full px-4 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {paginatedProducts.map((producto, index) => (
          <div
            className="bg-grey-lth flex flex-col justify-between gap-y-3 items-center p-4 rounded-xl"
            key={index}
          >
            {/* Mostrar imagen del producto */}
            <div className="min-h-40 overflow-hidden flex items-center">
              <Image
                src={`${producto.IMAGEN.startsWith('/') ? '' : '/'}${producto.IMAGEN}`}
                alt={replacePipeWithSlash(producto.BCI)}
                width={600}
                height={300}
                className="w-36 transition-all duration-300 ease-in-out transform hover:scale-110 lg:w-48"
              />
            </div>
            {/* Nombre del producto */}
            <p className="lg:text-xl font-bold text-md my-1 text-center">
              {replacePipeWithSlash(producto.BCI)}
            </p>
            {/* Botones de acción: cotización y más información */}
            <div className="w-full flex flex-col gap-y-5">
              <button
                onClick={() =>
                  cotizar(replacePipeWithSlash(producto.BCI), producto.MARCA)
                }
                className="lg:text-lg bg-red-lth text-white text-sm w-full py-1 rounded-lg"
              >
                Cotiza Ya
              </button>
              <Link
                href={`/${producto.BCI}`}
                className="lg:text-lg text-center bg-transparent transition-all duration-300 more-info-button text-gray-600 border-gray-600 border-solid border-2 text-sm font-bold w-full py-0.5 rounded-lg"
              >
                Más Información
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex w-full items-center justify-center gap-x-4 mt-10 mb-20">
        {/* Botón de página anterior */}
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
            className="w-3 h-3"
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

        {/* Botones para cada número de página */}
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

        {/* Botón de página siguiente */}
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
            className="w-3 h-3"
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



