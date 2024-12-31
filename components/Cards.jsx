'use client';
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const generateCard = ({
  key,
  icon,
  title,
  description,
  button,
  buttonLink,
  llamda = false,
  handleCall,
}) => (
  <div
    key={key}
    onClick={llamda ? handleCall : null}
    className={`flex flex-col items-center justify-between bg-grey-lth w-full h-52 p-4 my-3 rounded-xl lg:max-w-[550px] ${
      llamda ? "cursor-pointer hover:bg-slate-300 transition-all duration-300" : ""
    }`}
  >
    {icon}
    <div className="flex flex-col items-center -translate-y-4">
      <h2 className="text-md font-semibold text-center">{title}</h2>
      {description && <p className="font-bold text-xl">{description}</p>}
    </div>
    {button && (
      <Link
        href={buttonLink}
        className="bg-red-lth text-white text-sm w-52 py-2 rounded-lg flex items-center justify-center"
      >
        {button}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
          className="w-6 h-6 ml-2"
        >
          <path
            fill="white"
            fillRule="evenodd"
            d="M9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H1V7h11.293L9.146 3.854z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    )}
  </div>
);

const locationList = [
  "Cuernavaca",
  "Jiutepec",
  "Temixco",
  "Zapata",
  "Chiconcuac",
  "Tepoztlán",
  "Yautepec",
  "Oaxtepec",
  "Cocoyoc",
  "Xochitepec",
];

export const Cards = ({ page }) => {
  const handleCall = () => {
    const phoneNumber = "+527776002745";
    window.location.href = `tel:${phoneNumber}`;
  };

  const cards = [
    {
      key: "centros-servicio",
      icon: (
        <DotLottieReact
          src="/animations/phone_location.json"
          className="w-24 h-24"
          autoplay
          loop
        />
      ),
      title: <>Centros de Servicio</>,
      button: "Ubica tu sucursal",
      buttonLink: "/centros",
      exeption: "location",
    },
    {
      key: "horarios-operacion",
      title: (
        <div className="mt-5">
          <span className="block font-semibold text-lg">Horarios de operación:</span>
          <br /> Lunes a viernes 8:30 a 18.00 hrs
          <br /> Sábados 8:30 a 17:00 hrs
          <br /> Domingos y días festivos 10:00 a 15:00 hrs
        </div>
      ),
      exeption: "none",
    },
    {
      key: "contacto",
      icon: (
        <DotLottieReact
          src="/animations/rin_ring.json"
          className="w-24 h-24"
          autoplay
          loop
        />
      ),
      title: <>¡CONTÁCTANOS! <br /> Llámanos o envíanos un WhatsApp</>,
      description: "7776002745",
      exeption: "none",
      llamda: true,
      handleCall,
    },
    {
      key: "busca-tu-bateria",
      icon: (
        <DotLottieReact
          src="/animations/search_animation.json"
          className="w-44 h-44"
          autoplay
          loop
        />
      ),
      title: "Busca tu batería",
      button: "Buscar",
      buttonLink: "/",
      exeption: "landing",
    },
    {
      key: "info-empresa",
      icon: <img className="w-12 h-12" src="/card-logo.png" alt="logo-in-card" />,
      title: <>Batería en Casa es la empresa <br /> creada para ti</>,
      button: "Ver más información",
      buttonLink: "/nosotros",
      exeption: "nosotros",
    },
    {
      key: "acerca-de-nosotros",
      icon: (
        <DotLottieReact
          src="/animations/about_animation.json"
          className="w-32 h-32"
          autoplay
          loop
        />
      ),
      title: <>Acerca de nosotros</>,
      button: "Conócenos",
      buttonLink: "/servicio",
      exeption: "service",
    },
  ];

  return (
    <div className="mt-8 px-5 mb-8 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-10">
      {cards.map((card) =>
        card.exeption === page ? null : generateCard({ ...card, handleCall })
      )}

      <div className="flex flex-col items-center justify-between bg-grey-lth w-full h-52 p-4 my-3 rounded-xl lg:max-w-[550px]">
        <h2 className="text-lg font-semibold text-center">
          Aceptamos todas las tarjetas <br /> de crédito
        </h2>
        <div className="grid grid-cols-3 gap-x-2 overflow-hidden max-w-[400px]">
          <img src="/visa-logo.png" className="h-[70px] md:h-full" alt="Visa logo" />
          <img src="/mastercard-logo.png" className="h-[70px] md:h-full" alt="MasterCard logo" />
          <img src="/meli.jpg" className="h-[70px] md:h-full" alt="Mercado Libre logo" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between bg-grey-lth w-full p-4 my-3 rounded-xl lg:max-w-[550px]">
        <h2 className="text-lg font-semibold text-center">Cobertura:</h2>
        <ul className="mt-3 grid grid-cols-2 gap-x-12">
          {locationList.map((location) => (
            <li key={location} className="flex items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.31 5.04C..."
                  fill="#D3172E"
                />
              </svg>
              {location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
