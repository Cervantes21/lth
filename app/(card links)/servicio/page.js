import { Cards } from "@/components/Cards";
import { MoreInfoCard } from "@/components/MoreInfoCard";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <MoreInfoCard page="service" text="Conoce nuestro Servicio Eficaz y Profesional" />
      <div className="p-5 mt-5">
        <p className=" mb-10 flex items-center gap-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
          <g fill="none" stroke="#d3172e" strokeLinejoin="round" stroke-width="4">
            <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
            <path strokeLinecap="round" d="m16 24l6 6l12-12" />
          </g>
        </svg>Entrega en menos de 90 minutos.</p>
        <p className=" mb-10 flex items-center gap-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
          <g fill="none" stroke="#d3172e" strokeLinejoin="round" stroke-width="4">
            <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
            <path strokeLinecap="round" d="m16 24l6 6l12-12" />
          </g>
        </svg>Diagnóstico profesional.</p>
        <p className="flex items-center gap-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
          <g fill="none" stroke="#d3172e" strokeLinejoin="round" stroke-width="4">
            <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
            <path strokeLinecap="round" d="m16 24l6 6l12-12" />
          </g>
        </svg>Instalación eficiente:</p>
        <ul className="pl-10">
          <li className="list-disc">Todas nuestras baterías tienen garantía y respaldo de la marca LTH.</li>
          <li className="list-disc">Nuestro técnico realiza el diagnóstico del sistema eléctrico de tu vehículo.</li>
          <li className="list-disc">Nuestro servicio es profesional y eficiente.</li>
          <li className="list-disc">Puedes pagar con tarjeta o efectivo al término de la instalación y/o diagnóstico.</li>
        </ul>
      </div>
      <Cards page="service" />
      <Whatsapp />
    </>
  );
}
