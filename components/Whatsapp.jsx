'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=527776002745&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        right: '0.5rem', // Más pegado al borde derecho
        bottom: '0.5rem', // Más pegado al borde inferior
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80px', // Tamaño reducido del área del botón
        height: '80px', // Tamaño reducido del área del botón
        borderRadius: '50%', // Hacer el contenedor circular para ajustarse al botón
        overflow: 'hidden', // Asegurar que no haya área adicional seleccionable
        backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo transparente para mejorar la experiencia visual
      }}
    >
      <DotLottieReact
        src="/animations/whatsapp_button.json"
        autoplay
        loop
        className="w-full h-full cursor-pointer"
        onError={() => console.error('Error al cargar la animación Lottie.')}
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
  const message = `Hola, me gustaría cotizar ${nombre} de ${marca}`; // Mensaje a enviar por WhatsApp
  const urlMessage = encodeURIComponent(message); // Mensaje codificado para la URL
  const whatsappURL = `https://api.whatsapp.com/send/?phone=527776002745&text=${urlMessage}&app_absent=0`;

  // Abrir la URL de WhatsApp en una nueva pestaña del navegador
  if (typeof window !== 'undefined') {
    window.open(whatsappURL, '_blank');
  }
};
