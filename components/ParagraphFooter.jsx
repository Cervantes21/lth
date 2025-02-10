import Link from "next/link";

export default function ParagraphFooter() {
    return (
        <div className="p-8 lg:p-12 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl lg:text-4xl font-bold text-blue-lth underline text-center mb-8">
                Conócenos...
            </h1>

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
            <p className="mt-10 italic text-gray-600">*Pregunta por métodos alternos de pago.</p>
            </div>
            <div className="space-y-8">
                <p className="leading-relaxed ">
                    En <strong className="font-semibold text-blue-lth">BATERÍA EN CASA</strong> somos especialistas en baterías y te damos el servicio integral de cambio de batería a domicilio. Manejamos toda la gama de{" "}
                    <Link href="/hitec">
                        <strong className="font-semibold text-blue-lth">Baterías LTH</strong>.
                    </Link>
                    <br /> Nuestro servicio instala tu batería con garantía de fábrica y tiene el respaldo de la marca líder en México, LTH.
                </p>
                <p className="leading-relaxed p-4">
                    Si buscas un cambio de batería urgente, nuestro servicio a domicilio te ofrece el diagnóstico e instalación <span className="italic font-bold text-blue-lth">gratis</span> con solo llamar al <strong className="text-blue-lth">(777) 600 27 45</strong>.
                </p>
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-center text-blue-lth underline">
                        {""}<Link href="/centros">NUESTRA COBERTURA</Link>
                    </h2>
                    <p className="leading-relaxed">
                        <strong className="font-medium text-blue-lth underline">¿Te quedaste sin batería en Cuernavaca?</strong> Te damos servicio de batería express. O si te encuentras sin batería en <strong className="text-blue-lth">Jiutepec</strong>, estamos listos para cambiártela. Si nos hablas buscando batería en <strong className="text-blue-lth">Temixco</strong>, no te preocupes, llámanos y estaremos contigo.
                    </p>
                    <p className="leading-relaxed">
                        También ofrecemos cambio de batería en <strong className="text-blue-lth">Oaxtepec</strong> y te la llevamos de inmediato. Estamos listos para hacerte la instalación de batería en <strong className="text-blue-lth">Cocoyoc</strong> totalmente gratis. No te olvides que también hacemos el cambio de batería <strong className="text-blue-lth">LTH</strong> en <strong className="text-blue-lth">Tepoztlán</strong>.
                    </p>
                    <p className="leading-relaxed">
                        Si tu auto no arranca, llama al <strong className="text-blue-lth">(777) 600 27 45</strong> y te asesoramos en recomendarte la mejor batería para tu auto.
                    </p>
                    <p className="leading-relaxed text-center text-white bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950 hover:from-blue-600 hover:via-blue-800 hover:to-blue-500 p-4 rounded-lg font-semibold">
                        ¿No sabes cuál batería lleva tu auto?
                        <br />
                        <Link href="/catalogo">
                        <img
                            src="/bec-animation.webp"
                            alt="Logo de baterías"
                            className="mx-auto my-4 w-20 h-auto"
                        />
                        Consulta nuestro catálogo de{" "}
                        <strong className="underline">Baterías LTH</strong>
                        </Link>
                    </p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-blue-lth underline text-center">
                        {""}<Link href="/catalogo">NUESTRAS MARCAS</Link>
                    </h2>
                    <p className="leading-relaxed">
                        <strong className="font-extrabold text-blue-lth">BATERÍA EN CASA</strong> cuenta con amplio surtido de baterías automotrices y te ofrecemos las mejores marcas de acumuladores del mercado. Si tienes un vehículo híbrido o eléctrico, contamos con la batería de última generación: <strong className="text-blue-lth">LTH Protect</strong>, que protege los sistemas de seguridad y respalda en caso de falla en la batería de tracción.
                    </p>
                    <p className="leading-relaxed">
                        Para vehículos con sistema Auto Start-Stop y equipamiento avanzado como GPS, pantallas o cámaras, recomendamos las baterías <strong className="font-medium text-blue-lth">LTH AGM Evolution</strong>, con <strong className="text-blue-lth">60 meses de garantía y 18 meses de reemplazo sin costo</strong>.
                    </p>
                    <p className="leading-relaxed">
                        Recuerda que siempre estamos para asesorarte en elegir el mejor acumulador para tu vehículo, para que tu día no se detenga. Nuestro trabajo es darte la mejor información para que tú decidas lo mejor para tu auto y al mejor precio. Nuestros <strong className="text-blue-lth font-medium">Técnicos de servicio LTH</strong> son especialistas en la instalación de baterías para auto y camión.
                    </p>
                    <p>
                        Nuestro servicio integral ofrece diagnóstico, venta e instalación de baterías en tu domicilio o en donde lo solicites.
                    </p>
                    <p>
                        En <strong className="text-blue-lth underline">BATERÍA EN CASA</strong> contamos con cobertura a domicilio sin costo en Cuernavaca y sus alrededores. Si estás buscando Instalación LTH a Domicilio, ¡nosotros somos tu mejor opción! También tenemos Servicio a Domicilio en los municipios de <strong className="text-blue-lth">Jiutepec, Temixco, Emiliano Zapata, Oaxtepec, Cocoyoc y Tepoztlán.</strong>
                    </p>
                    <h2 className="leading-relaxed text-center text-blue-lth underline">
                        ¡Acudimos el mismo día a instalar tu Batería LTH sin costo!
                    </h2>
                    <p className="leading-relaxed text-right p-2 rounded-lg">
                        Batería en casa es un servicio proporcionado por un <u className="text-blue-lth">{""}<Link href="/garantias-y-ajustes">Distribuidor LTH</Link></u>.
                    </p>
                </div>
            </div>
        </div>
    );
}
