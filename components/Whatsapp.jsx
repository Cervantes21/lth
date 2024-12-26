'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from 'react';

export const Whatsapp = () => {
  const [position, setPosition] = useState({ x: 224, y: window.innerHeight - 192 }); // left-56 y posición cerca del borde inferior para móviles
  const [isMobile, setIsMobile] = useState(false); // Verificar si es móvil

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768); // Móvil si ancho es menor a 768px
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleDrag = (e) => {
    if (!isMobile) return;
    e.preventDefault();
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - 96, // Ajusta para centrar el botón
      y: touch.clientY - 96,
    });
  };

  const handleDragEnd = (e) => {
    if (!isMobile) return;
    e.preventDefault();
    const touch = e.changedTouches[0];
    setPosition({
      x: Math.max(0, Math.min(touch.clientX - 96, window.innerWidth - 192)), // Limitar dentro de los bordes horizontales
      y: Math.max(0, Math.min(touch.clientY - 96, window.innerHeight - 192)), // Limitar dentro de los bordes verticales
    });
  };

  return (
    <a
      href="https://api.whatsapp.com/send/?phone=527776002745&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        left: isMobile ? position.x : 'auto', // Ajustable solo en móvil
        right: isMobile ? 'auto' : 0, // Fijado a la derecha en escritorio
        top: isMobile ? position.y : 'auto', // Ajustable solo en móvil
        bottom: isMobile ? 'auto' : '1rem', // Fijado en la parte inferior en escritorio
        touchAction: isMobile ? 'none' : 'auto', // Solo móvil permite arrastrar
        width: '192px', // Equivalente a w-48
        height: '192px', // Equivalente a h-48
        zIndex: 1000,
      }}
      onTouchMove={handleDrag}
      onTouchEnd={handleDragEnd}
    >
      {/* Botón de animación Lottie para WhatsApp */}
      <DotLottieReact
        src="/animations/whatsapp_button.json"
        autoplay
        loop
        className="w-full h-full cursor-pointer"
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
  window.open(whatsappURL, '_blank');
};
