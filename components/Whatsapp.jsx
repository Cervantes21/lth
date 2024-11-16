'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=527776002745&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Botón de animación Lottie para WhatsApp */}
      <DotLottieReact
        src="/animations/whatsapp_button.json" // Ruta al archivo Lottie en la carpeta 'public'
        className="cursor-pointer fixed right-0 bottom-1 w-48 h-48"
        autoplay // Autoplay para que la animación inicie automáticamente
        loop // Loop para que la animación se repita
      />
    </a>
  );
};

/**
 * Función para generar una URL de WhatsApp con un mensaje personalizado.
 * @param {string} nombre - Nombre del producto a cotizar.
 * @param {string} marca - Marca del producto.
 */
export const cotizar = (nombre, marca) => {
  const message = `Hola, me gustaría cotizar ${nombre} de ${marca}`; // Mensaje a enviar
  const urlMessage = encodeURIComponent(message); // Codificar el mensaje para URL
  const whatsappURL = `https://api.whatsapp.com/send/?phone=527776002745&text=${urlMessage}&app_absent=0`;

  // Abrir la URL de WhatsApp en una nueva pestaña del navegador
  window.open(whatsappURL, "_blank");
};
