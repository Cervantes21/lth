'use client';

import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const direcciones = [
    {
      nombre: "CENTRO DE SERVICIO LTH PLAN DE AYALA",
      direccion: "Av. Plan de Ayala 353, Amatitlán, 62410, Cuernavaca, Mor.",
      url: "https://maps.app.goo.gl/d8QVu7eHMzJRUpb49",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.143183235433!2d-99.22961810321044!3d18.925055399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfb05ec5002f%3A0x3e26817b1e7ea104!2sCentro%20de%20Servicio%20LTH%20Moncada!5e0!3m2!1ses!2smx!4v1731490153002!5m2!1ses!2smx",
      logo: "/centros_logos/PA.png",
    },
    {
      nombre: "CENTRO DE VENTA LTH VICENTE GUERRERO",
      direccion: "Av. Vicente Guerrero 100, Zona 1, Tezontepec, 62450, Cuernavaca, Mor.",
      url: "https://maps.app.goo.gl/uBnyqJQYzVUvwCa48",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.7189417919201!2d-99.2298949!3d18.9423889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfcc3346f515%3A0xae7b318f2fb92463!2sCentro%20de%20Venta%20LTH%20Vicente%20Guerrero!5e0!3m2!1ses!2smx!4v1731489824472!5m2!1ses!2smx",
      logo: "/centros_logos/VG.png",
    },
    {
      nombre: "CENTRO DE VENTA LTH COCOYOC",
      direccion: "Enrique Cue Corona 20-Loc. 1, Centro, 62738, Oaxtepec, Mor.",
      url: "https://maps.app.goo.gl/E5Y2yroa3HFT8c839",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5304814079527!2d-98.9677684!3d18.907899399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6d2c3d3b428d%3A0xbbcf3ba984192514!2sCENTRO%20DE%20VENTA%20LTH%20COCOYOC!5e0!3m2!1ses!2smx!4v1735683945062!5m2!1ses!2smx",
      logo: "/centros_logos/centro_cocoyoc.png",
    },
    {
      nombre: "CENTRO DE VENTA LTH ATLACOMULCO",
      direccion: "Av. Atlacomulco 99, Chapultepec, 62450, Cuernavaca, Mor.",
      url: "https://maps.app.goo.gl/5emjNV51reEDpAKv7",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.80380114178416!2d-99.2155297!3d18.9123337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf034f6d390d%3A0x78bdef449522d58f!2sCentro%20de%20Venta%20LTH%20Atlacomulco!5e0!3m2!1ses!2smx!4v1731543802582!5m2!1ses!2smx",
      logo: "/centros_logos/AT.png",
    }
  ];

  return (
    <div className="lg:mt-10">
      {direcciones.map((direccion, index) => (
        <div
          key={direccion.nombre}
          onClick={() => setSelectedLocation(index)}
          className="block mb-5 p-5 lg:w-[700px] lg:mx-auto border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Logo en miniatura */}
              <img
                src={direccion.logo}
                alt={`Logo de ${direccion.nombre}`}
                className="w-12 h-12 mr-4 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-medium lg:text-2xl">
                  {direccion.nombre}
                </h2>
                <p className="text-lg font-light lg:mb-5 lg:text-xl">
                  {direccion.direccion}
                </p>
              </div>
            </div>

            {/* Animación Lottie del ícono de ubicación */}
            <DotLottieReact
              src="/animations/icon_location.json"
              className="w-10 h-10"
              autoplay
              loop
            />
          </div>

          {selectedLocation === index && (
            <div className="mt-4">
              <iframe
                src={direccion.embedUrl}
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                className="border border-gray-300 rounded-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(direccion.url, '_blank');
                }}
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

