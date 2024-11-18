import { Cards } from "@/components/Cards";
import { Whatsapp } from "@/components/Whatsapp";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/" className="flex w-10 m-3 p-0 border-none outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 arrow-back"
                >
                    <path
                        className="duration-300 transition-all"
                        fill="#d3172e"
                        fillRule="evenodd"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>

            <h1 className="text-xl font-bold text-blue-lth uppercase w-full text-center mb-10 lg:text-3xl">
                ¿Qué hacer?
            </h1>
            <Cards page="all" />

            {/* Texto Estilizado */}
            <div className="p-6 lg:p-12 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl lg:text-4xl font-bold text-blue-lth text-center mb-8">
                    Conócenos...
                </h1>
                            <div className="p-3 mt-5 md:mx-auto lg:w-full lg:max-w-4xl lg:text-xl">
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
            </div>
                <div className="space-y-8 text-gray-800">
                    <p className="leading-relaxed">
                        En <strong className="font-semibold">BATERÍA EN CASA</strong> somos especialistas en baterías y te damos el servicio integral de cambio de batería a domicilio. Manejamos toda la gama de{" "}<Link href="/hitec"><strong className="font-semibold text-blue-600">Baterías LTH</strong>.</Link>
                        <br></br>Nuestro servicio instala tu batería con garantía de fábrica y tiene el respaldo de la marca líder en México, LTH.
                    </p>

                    <p className="leading-relaxed bg-blue-50 p-4 rounded-lg">
                        Si buscas un cambio de batería urgente, nuestro servicio a domicilio te ofrece el diagnóstico e instalación <span className="italic">gratis</span> con solo llamar al <strong className="text-red-600">(777) 600 27 45</strong>.
                    </p>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-blue-800 underline">
                            {""}<Link href="/centros">NUESTRA COBERTURA</Link>
                        </h2>
                        <p className="leading-relaxed">
                            ¿Te quedaste sin batería en <strong className="font-medium text-blue-600">Cuernavaca</strong>? Te damos servicio de batería express. O si te encuentras sin batería en <strong>Jiutepec</strong>, estamos listos para cambiártela. Si nos hablas buscando batería en <strong>Temixco</strong>, no te preocupes, llámanos y estaremos contigo.
                        </p>
                        <p className="leading-relaxed">
                            También ofrecemos cambio de batería en <strong>Oaxtepec</strong> y te la llevamos de inmediato. Estamos listos para hacerte la instalación de batería en <strong>Cocoyoc</strong> totalmente gratis. No te olvides que también hacemos el cambio de batería <strong>LTH</strong> en <strong>Tepoztlán</strong>.
                        </p>
                        <p className="leading-relaxed">
                            Si tu auto no arranca, llama al <strong className="text-red-600">(777) 600 27 45</strong> y te asesoramos en recomendarte la mejor batería para tu auto. 
                        </p>
                        <p className="leading-relaxed text-center bg-blue-50 p-4 rounded-lg font-semibold">
                          ¿No sabes cuál batería lleva tu auto?
                          <br />
                          <img 
                            src="/bec-animation.png" 
                            alt="Logo de baterías" 
                            className="mx-auto my-4 w-20 h-auto" 
                          />
                          Consulta nuestro catálogo de{" "}
                          <Link href="/lth" className="text-blue-600 underline">Baterías LTH</Link>.
                        </p> 
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-blue-800 underline">
                            {""}<Link href="/agm">NUESTRAS MARCAS</Link>
                        </h2>
                        <p className="leading-relaxed">
                            <strong className="font-semibold">BATERÍA EN CASA</strong> cuenta con amplio surtido de baterías automotrices y te ofrecemos las mejores marcas de acumuladores del mercado. Si tienes un vehículo híbrido o eléctrico, contamos con la batería de última generación: <strong className="text-blue-600">LTH Protect</strong>, que protege los sistemas de seguridad y respalda en caso de falla en la batería de tracción.
                        </p>
                        <p className="leading-relaxed">
                            Para vehículos con sistema Auto Start-Stop y equipamiento avanzado como GPS, pantallas o cámaras, recomendamos las baterías <strong className="font-medium text-blue-600">LTH AGM Evolution</strong>, con <strong>60 meses de garantía</strong> y <strong>18 meses de reemplazo sin costo</strong>.
                        </p>
                        <p className="leading-relaxed">
                            Recuerda que siempre estamos para asesorarte en elegir el mejor acumulador para tu vehículo, ¡para que tu día no se detenga!
                        </p>
                    </div>
                </div>
            </div>

            <Whatsapp />
        </>
    );
}
