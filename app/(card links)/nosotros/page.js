import { Cards } from "@/components/Cards";
import { MoreInfoCard } from "@/components/MoreInfoCard";
import { Whatsapp } from "@/components/Whatsapp";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MoreInfoCard page="nosotros" text="Batería En Casa es la empresa creada para ti." />

      {/* Sección de encabezado */}
      <div className="bg-grey-lth text-center uppercase font-medium py-4 mt-10">
        <h2 className="text-xl lg:text-2xl max-w-[90%] mx-auto">
          Acerca de nosotros
        </h2>
      </div>
      <p className="mt-10 mb-4 px-4 text-center text-lg font-light sm:font-normal lg:text-xl lg:max-w-4xl lg:mx-auto">
        <strong className="text-blue-lth">BEC Batería en Casa</strong> es una
        empresa de{" "}
        <strong className="text-blue-lth">
          instalación y reemplazo de baterías
        </strong>{" "}
        de automóviles, equipo pesado y otras aplicaciones.
      </p>

      {/* Imagen animada o logotipo */}
      <div className="flex justify-center my-6">
        <Link href="/">
          <img
            src="/bec-animation.webp"
            alt="Animación de BEC Batería en Casa"
            className="w-40 h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <p className="mb-16 px-4 text-center text-lg font-light sm:font-normal lg:text-xl lg:max-w-4xl lg:mx-auto">
        Somos una Marca Registrada.® Nuestra empresa trabaja con las mejores marcas de baterias en México:{" "}
        <strong className="text-blue-lth">LTH®</strong>,{" "}
        <strong className="text-blue-lth"> LTH® PROTECT</strong>,{" "}
        <strong className="text-blue-lth"> LTH® AGM EVOLUTION</strong>,{" "}
        <strong className="text-blue-lth"> HITEC®</strong>,{" "}
        <strong className="text-blue-lth"> FULLPOWER®</strong>,{" "}
        <strong className="text-blue-lth"> ÁMERICA®</strong>, y más.
      </p>

      <div className="p-5 mt-5 md:mx-auto lg:w-full lg:max-w-4xl lg:text-xl">
        <p className="mb-10 flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <g fill="none" stroke="#d3172e" strokeLinejoin="round" strokeWidth="4">
              <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
              <path strokeLinecap="round" d="m16 24l6 6l12-12" />
            </g>
          </svg>
          <span>Entrega en menos de 90 minutos.</span>
        </p>
        <p className="mb-10 flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <g fill="none" stroke="#d3172e" strokeLinejoin="round" strokeWidth="4">
              <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
              <path strokeLinecap="round" d="m16 24l6 6l12-12" />
            </g>
          </svg>
          <span>Diagnóstico profesional.</span>
        </p>
        <p className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <g fill="none" stroke="#d3172e" strokeLinejoin="round" strokeWidth="4">
              <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
              <path strokeLinecap="round" d="m16 24l6 6l12-12" />
            </g>
          </svg>
          <span>Instalación eficiente:</span>
        </p>
        <ul className="pl-10 list-disc space-y-2">
          <li>Todas nuestras baterías tienen garantía y respaldo de la marca LTH.</li>
          <li>Realizamos el diagnóstico del sistema eléctrico de tu vehículo.</li>
          <li>Nuestro servicio es profesional y eficiente.</li>
          <li>
            Puedes pagar con tarjeta, efectivo o transferencia al término de la instalación
            y/o diagnóstico.
          </li>
        </ul>
        <p className="mt-10 italic text-gray-600">
          *Pregunta por métodos alternos de pago.
        </p>
      </div>

      {/* SECCIÓN DIAGONAL que redirige a /catalogo al hacer clic */}
      <Link href="/catalogo">
        <div className="diagonal-split-container cursor-pointer">
          {/* Columna del texto */}
          <div className="text-block">
            <h2>SOMOS LA SOLUCIÓN PARA QUE TU DÍA NO SE DETENGA</h2>
            <p>
              Resolvemos el cambio de batería en tu casa, negocio u oficina. 
              Llámanos y uno de nuestros técnicos te visitará para realizar 
              el cambio de tu batería de manera rápida, eficiente y profesional.
            </p>
          </div>

          {/* Columna de la imagen */}
          <div className="image-block">
            <img 
              src="/nosotros.webp" 
              alt="Cambio de batería" 
            />
          </div>
        </div>
      </Link>

      {/* Resto de la página */}
      <Cards page="nosotros" />
      <Footer />
      <Whatsapp />
    </>
  );
}
