'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect, useRef } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

export const Whatsapp = () => {
  const { width, height } = useWindowSize();
  const [position, setPosition] = useState({ x: 224, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const buttonRef = useRef(null); // Referencia al botón
  const isMobile = width < 768;

  useEffect(() => {
    setPosition({ x: 224, y: height - 192 });
  }, [height]);

  const handleTouchStart = (e) => {
    if (isMobile) {
      const touch = e.touches[0];
      const buttonRect = buttonRef.current.getBoundingClientRect();
      // Verifica si el toque inicia dentro del botón
      if (
        touch.clientX >= buttonRect.left &&
        touch.clientX <= buttonRect.right &&
        touch.clientY >= buttonRect.top &&
        touch.clientY <= buttonRect.bottom
      ) {
        setIsDragging(true);
      }
    }
  };

  const handleTouchEnd = () => {
    if (isMobile && isDragging) {
      // Ajustar posición a los bordes más cercanos
      setPosition((prevPosition) => {
        const margin = 16; // Espacio desde el borde
        const nearestX =
          prevPosition.x < width / 2 ? margin : width - 192 - margin;
        const nearestY =
          prevPosition.y < height / 2 ? margin : height - 192 - margin;

        return { x: nearestX, y: nearestY };
      });
      setIsDragging(false);
    }
  };

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (!isMobile || !isDragging) return;
      const touch = e.touches[0];
      setPosition({
        x: Math.max(0, Math.min(touch.clientX - 96, width - 192)),
        y: Math.max(0, Math.min(touch.clientY - 96, height - 192)),
      });
      e.preventDefault();
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, isDragging, width, height]);

  return (
    <a
      href="https://api.whatsapp.com/send/?phone=527776002745&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef} // Asigna la referencia al botón
      style={{
        position: 'fixed',
        left: isMobile ? position.x : 'auto',
        right: isMobile ? 'auto' : '1rem',
        top: isMobile ? position.y : 'auto',
        bottom: isMobile ? 'auto' : '1rem',
        width: '192px',
        height: '192px',
        zIndex: 1000,
      }}
      onTouchStart={handleTouchStart}
    >
      {/* Manejo de errores en la animación Lottie */}
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
  const message = `Hola, me gustaría cotizar ${nombre} de ${marca}`; // Mensaje a enviar
  const urlMessage = encodeURIComponent(message); // Codificar el mensaje para URL
  const whatsappURL = `https://api.whatsapp.com/send/?phone=527776002745&text=${urlMessage}&app_absent=0`;

  // Abrir la URL de WhatsApp en una nueva pestaña del navegador
  if (typeof window !== 'undefined') {
    window.open(whatsappURL, '_blank');
  }
};
