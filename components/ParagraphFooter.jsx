import Link from "next/link";

export default function ParagraphFooter() {
    return (
        <div className="p-6 lg:p-12 bg-gradient-to-r from-blue-900 from-5% via-sky-600 via-40% to-blue-900 to-90% rounded-lg shadow-lg">
            <h1 className="text-2xl lg:text-4xl font-bold text-blue-lth text-center mb-8">
                Conócenos...
            </h1>
            <div className=" p-3 mt-5 md:mx-auto lg:w-full lg:max-w-4xl lg:text-xl text-white">
                <p className="mb-10 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                        <g fill="none" stroke="#f5f6fa" strokeLinejoin="round" strokeWidth="4">
                            <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                            <path strokeLinecap="round" d="m16 24l6 6l12-12" />
                        </g>
                    </svg>
                    <span>Entrega en menos de 90 minutos.</span>
                </p>
                <p className="mb-10 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                        <g fill="none" stroke="#f5f6fa" strokeLinejoin="round" strokeWidth="4">
                            <path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                            <path strokeLinecap="round" d="m16 24l6 6l12-12" />
                        </g>
                    </svg>
                    <span>Diagnóstico profesional.</span>
                </p>
            </div>
            <div className="space-y-8 text-white">
                <p className="leading-relaxed bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-lg">
                    En <strong className="font-semibold text-blue-lth">BATERÍA EN CASA</strong> somos especialistas en baterías y te damos el servicio integral de cambio de batería a domicilio. Manejamos toda la gama de{" "}
                    <Link href="/hitec">
                        <strong className="font-semibold text-blue-lth">Baterías LTH</strong>.
                    </Link>
                    <br /> Nuestro servicio instala tu batería con garantía de fábrica y tiene el respaldo de la marca líder en México, LTH.
                </p>
                <p className="leading-relaxed bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 p-4 rounded-lg">
                    Si buscas un cambio de batería urgente, nuestro servicio a domicilio te ofrece el diagnóstico e instalación <span className="italic font-bold text-blue-lth">gratis</span> con solo llamar al <strong className="text-blue-lth">(777) 600 27 45</strong>.
                </p>
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-lg text-center text-blue-lth underline">
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
                    <p className="leading-relaxed text-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 p-4 rounded-lg font-semibold">
                        ¿No sabes cuál batería lleva tu auto?
                        <br />
                        <Link href="/lth">
                        <img
                            src="/bec-animation.png"
                            alt="Logo de baterías"
                            className="mx-auto my-4 w-20 h-auto"
                        />
                        Consulta nuestro catálogo de{" "}
                        <strong className="text-blue-lth underline">Baterías LTH</strong>
                        </Link>
                    </p>
                </div>
                <div className="space-y-4 text-white">
                    <h2 className="text-xl font-semibold text-blue-lth underline bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-lg text-center">
                        {""}<Link href="/agm">NUESTRAS MARCAS</Link>
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
                    <h2 className="leading-relaxed text-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 p-4 rounded-lg font-extrabold text-xl text-blue-lth underline">
                        ¡Acudimos el mismo día a instalar tu Batería LTH sin costo!
                    </h2>
                    <p className="leading-relaxed text-right p-2 rounded-lg">
                        Batería en casa es un servicio proporcionado por un <u className="text-blue-lth">Distribuidor LTH</u>, y tiene el respaldo del <strong className="text-blue-lth underline">fabricante Clarios.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
