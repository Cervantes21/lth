"use client";
import { useState } from "react";
import productos from "@/data/Catalogo";
import Image from "next/image";

export const CatalogoData = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Número de elementos por página

  const filteredProducts = productos.filter(
    (producto) => producto.MARCA === page
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <h1 className="text-center text-blue-lth font-bold text-2xl mb-5">
        CATÁLOGO
      </h1>
      <h2 className="text-center font-bold text-2xl mb-10">{page}</h2>
      <div className=" w-full px-4 grid grid-cols-2 gap-3">
        {paginatedProducts.map((producto, index) => (
          <div
            className=" bg-grey-lth flex flex-col gap-y-3 items-center p-4 rounded-xl"
            key={index}
          >
            <div className="min-h-40 overflow-hidden flex items-center">
              <Image
                src={`/${producto.IMAGEN}`}
                alt={producto.BCI}
                width={500}
                height={300}
                className="w-36 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <p className="font-bold text-md my-1 text-center">{producto.BCI}</p>
            <button className="bg-red-lth text-white text-sm w-full py-1 rounded-lg">
              Cotiza Ya
            </button>
            <button className="bg-transparent transition-all duration-300 hover:border-transparent  text-gray-600 border-gray-600 border-solid border-2 text-sm font-bold w-full py-1 rounded-lg">
              {" "}
              Más Informacion
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center gap-x-4 mt-10 mb-20">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 0}
          className={`bg-red-lth cursor-pointer  rounded-full w-7 h-7 rotate-180 mr-5 ${currentPage === 0 ? "text-gray-300 rotate-180" : ""}`}
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
              stroke-linecap="round"
              stroke-linejoin="round"
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
          className={`ml-5 bg-red-lth cursor-pointer  rounded-full w-7 h-7 ${
            currentPage >= totalPages - 1 ? "text-gray-300" : ""
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
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m10 17l5-5l-5-5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
