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
    className={`flex flex-col items-center justify-between bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 text-white w-full h-52 p-4 my-3 rounded-xl lg:max-w-[550px] ${
      llamda ? "cursor-pointer hover:from-blue-700 hover:via-blue-500 hover:to-blue-700 transition-all duration-300" : ""
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
          className="w-24 h-24 md:w-18 md:h-18"
          autoplay
          loop
        />
      ),
      title: <>Nuestras Sucursales</>,
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
      icon: <img className="w-12 h-12" src="/card-logo.webp" alt="logo-in-card" />,
      title: <>Batería en Casa es la empresa <br /> creada para ti</>,
      button: "Ver más información",
      buttonLink: "/nosotros",
      exeption: "nosotros",
    }
  ];

  return (
    <div className="mt-8 px-5 mb-8 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-10">
      {cards.map((card) =>
        card.exeption === page ? null : generateCard({ ...card, handleCall })
      )}

      <div className="flex flex-col items-center justify-between bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 text-white w-full h-52 p-4 my-3 rounded-xl lg:max-w-[550px]">
        <h2 className="text-lg font-semibold text-center">
          Aceptamos todas las tarjetas <br /> de crédito
        </h2>
        <div className="grid grid-cols-3 gap-x-2 overflow-hidden max-w-[400px]">
          <img src="/visa-logo.webp" className="h-[70px] md:h-full" alt="Visa logo" />
          <img src="/mastercard-logo.webp" className="h-[70px] md:h-full" alt="MasterCard logo" />
          <img src="/meli.webp" className="h-[70px] md:h-full" alt="Mercado Libre logo" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 text-white w-full p-4 my-3 rounded-xl lg:max-w-[550px]">
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
                  d="M20.31 5.04C18.9096 3.63923 17.018 2.84006 15.0375 2.8125H14.9625C12.9818 2.83966 11.0899 3.63856 9.68923 5.03924C8.28855 6.43992 7.48965 8.33183 7.46249 10.3125C7.43811 11.7188 7.83374 13.1006 8.59874 14.2819L14.5012 26.25H15.5006L21.4012 14.2819C22.1681 13.1006 22.5637 11.7188 22.5375 10.3125C22.5099 8.33199 21.7108 6.44037 20.31 5.04ZM14.8594 4.6875L15.0131 4.70625L15.1519 4.6875C16.6248 4.75165 18.0172 5.37762 19.0428 6.43674C20.0685 7.49586 20.6494 8.90764 20.6662 10.3819C20.6806 11.4282 20.3751 12.4539 19.7906 13.3219L19.7531 13.3856L19.7212 13.4513L15 23.0231L10.2806 13.4606L10.2487 13.3875L10.2112 13.3237C9.62677 12.4558 9.32127 11.4301 9.33561 10.3837C9.3516 8.90781 9.93322 7.49424 10.9606 6.43444C11.988 5.37463 13.3828 4.74935 14.8575 4.6875H14.8594ZM16.0069 8.75438C15.8021 8.61747 15.5724 8.52224 15.3309 8.4741C15.0893 8.42597 14.8407 8.42589 14.5991 8.47385C14.3575 8.52182 14.1278 8.6169 13.9229 8.75367C13.7181 8.89043 13.5422 9.0662 13.4053 9.27094C13.2684 9.47568 13.1732 9.70538 13.125 9.94692C13.0769 10.1885 13.0768 10.4371 13.1248 10.6787C13.1727 10.9203 13.2678 11.15 13.4046 11.3549C13.5414 11.5597 13.7171 11.7356 13.9219 11.8725C14.3354 12.149 14.8417 12.2499 15.3296 12.153C15.8175 12.0561 16.2469 11.7694 16.5234 11.3559C16.7999 10.9424 16.9008 10.4361 16.8039 9.94817C16.7071 9.46029 16.4204 9.03086 16.0069 8.75438ZM12.8812 7.19438C13.2903 6.90679 13.7528 6.70394 14.2415 6.59776C14.7302 6.49157 15.2352 6.4842 15.7267 6.57607C16.2183 6.66795 16.6865 6.85721 17.1039 7.13273C17.5212 7.40825 17.8792 7.76445 18.1568 8.18039C18.4344 8.59632 18.6261 9.06358 18.7204 9.55468C18.8148 10.0458 18.81 10.5508 18.7062 11.04C18.6025 11.5292 18.402 11.9927 18.1165 12.4033C17.831 12.8138 17.4663 13.1631 17.0437 13.4306C16.2167 13.9543 15.2177 14.1337 14.26 13.9307C13.3024 13.7277 12.4622 13.1583 11.9187 12.3441C11.3753 11.5299 11.1718 10.5355 11.3516 9.57329C11.5315 8.61107 12.0804 7.75731 12.8812 7.19438Z"
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
