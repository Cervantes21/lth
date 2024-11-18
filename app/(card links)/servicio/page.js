import { Cards } from "@/components/Cards";
import { MoreInfoCard } from "@/components/MoreInfoCard";
import { Whatsapp } from "@/components/Whatsapp";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <MoreInfoCard page="service" text="Conoce nuestro Servicio Eficaz y Profesional" />

            <div className="bg-grey-lth text-center uppercase font-medium py-4 mt-10">
                <h2 className="text-xl lg:text-2xl max-w-[90%] mx-auto">Acerca de nosotros</h2>
            </div>
            <p className="mt-10 mb-4 px-4 text-center text-lg font-light sm:font-normal lg:text-xl lg:max-w-4xl lg:mx-auto">
                <strong>BEC Batería en Casa</strong> es una empresa de <strong>instalación y reemplazo de baterías</strong> de automóviles, equipo pesado y otras aplicaciones.
            </p>
            <div className="flex justify-center my-6">
                <Link href="/">
                    <img
                        src="/bec-animation.png"
                        alt="Animación de BEC Batería en Casa"
                        className="w-40 h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                </Link>
            </div>
            <p className="mb-16 px-4 text-center text-lg font-light sm:font-normal lg:text-xl lg:max-w-4xl lg:mx-auto">
                Somos una marca registrada. Trabajamos con las mejores baterías del mercado: <strong>LTH</strong>, <strong>LTH HITEC</strong>, <strong>LTH AGM</strong>, <strong>OPTIMA</strong>, <strong>LTH Heavy Duty</strong>, <strong>LTH Golf</strong>, y más.
            </p>
            <div className="p-5 mt-5 md:mx-auto lg:w-full lg:max-w-4xl lg:text-xl">
                <p className="mb-10 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                        <g fill="none" stroke="#d3172e" strokeLinejoin="round" strokeWidth="4">
                            <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                            <path strokeLinecap="round" d="m16 24l6 6l12-12" />
                        </g>
                    </svg>
                    <span>Entrega en menos de 90 minutos.</span>
                </p>
                <p className="mb-10 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                        <g fill="none" stroke="#d3172e" strokeLinejoin="round" strokeWidth="4">
                            <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                            <path strokeLinecap="round" d="m16 24l6 6l12-12" />
                        </g>
                    </svg>
                    <span>Diagnóstico profesional.</span>
                </p>
                <p className="flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
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
                <p className="mt-10 italic text-gray-600">*Pregunta por métodos alternos de pago.</p>
            </div>

            <Cards page="service" />
            <Whatsapp />
        </>
    );
}
