import { Cards } from "@/components/Cards";
import { MoreInfoCard } from "@/components/MoreInfoCard";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <MoreInfoCard page="service" text="Conoce nuestro Servicio Eficaz y Profesional" />

      <div className="bg-grey-lth text-center uppercase font-medium p-4 mt-10">
        <h2 className="w-96 mx-auto lg:text-2xl">Acerca de nosotros</h2>
      </div>
      <p className="mt-10 mb-16 w-96 lg:px-4 mx-auto text-center text-lg sm:font-light lg:font-normal md:w-full lg:text-xl md:max-w-[1300px]">BEC Batería en Casa,  es una empresa de instalación y reemplazo de baterías de automóviles, equipo pesado, y otras aplicaciones. Es una Marca Registrada. Nuestra empresa trabaja con la mejor marca de baterías del mercado: LTH, LTH HITEC, LTH AGM, OPTIMA, LTH Heavy Duty, LTH Golf y otras más.</p>
      {/* <button className="bg-red-lth text-white text-sm w-56 mb-20 py-1 rounded-lg flex items-center justify-center mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="white" d="m12 15.577l-3.538-3.539l.707-.719L11.5 13.65V5h1v8.65l2.33-2.33l.708.718zM5 19v-4.038h1V18h12v-3.038h1V19z" />
      </svg> Descargar informacion</button> */}

      <div className="p-5 mt-5 md:mx-auto lg:w-full md:max-w-[1300px] lg:text-xl">
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
