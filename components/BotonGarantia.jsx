"use client";
import React from "react";
import { saveAs } from "file-saver";
import productos from "@/data/Catalogo";

export const BotonGarantia = () => {
  const handleDownloadPDF = async () => {
    // Ruta del archivo PDF dentro del proyecto
    const pdfURL = "/Garantias-LTH.pdf"; // Asegúrate de que el archivo está en la carpeta public/data
  
    // Obtén el archivo como un Blob
    const response = await fetch(pdfURL);
  
    // Comprueba si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const blob = await response.blob();
  
    saveAs(blob, "Garantias-LTH.pdf");
  };
  return (
    <button
      onClick={handleDownloadPDF}
      className="bg-red-lth text-white text-sm px-3 mb-32 py-1 rounded-lg flex items-center justify-center mx-auto lg:text-xl lg:p-4"
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path
          fill="white"
          d="m12 15.577l-3.538-3.539l.707-.719L11.5 13.65V5h1v8.65l2.33-2.33l.708.718zM5 19v-4.038h1V18h12v-3.038h1V19z"
        />
      </svg>{" "}
      Descargar información de garantías{" "}
    </button>
  );
};
