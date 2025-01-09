import { BotonGarantia } from "@/components/BotonGarantia";
import { Cards } from "@/components/Cards";
import { Whatsapp } from "@/components/Whatsapp";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/" className="flex w-16 m-1 p-4 border-none outline-none">
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
            <h1 className="text-xl font-bold text-blue-lth uppercase w-full text-center mb-10 lg:text-3xl">Garantías y ajustes</h1>
            <div className="bg-grey-lth text-center uppercase font-medium p-2">
                <h2 className="w-96 mx-auto lg:w-fit lg:py-4 lg:text-xl">Información importante sobre la garantía</h2>
            </div>
            <p className="mt-10 mb-16 w-96 lg:w-full lg:max-w-[1300px] mx-auto text-center text-lg font-light lg:text-xl lg:font-normal">
                Batería en Casa solo usa la mejor marca de batería en México: LTH. Cada batería que instalamos tiene garantía, de acuerdo a las políticas de nuestro proveedor.
                Cuando nuestro técnico acuda a su domicilio, por procedimiento determinará si la batería necesita una recarga o un reemplazo. La recarga tiene un costo.
            </p>
            <BotonGarantia />
            <div className="bg-grey-lth text-center uppercase font-medium p-2">
                <h2 className="w-96 mx-auto lg:w-fit lg:py-4 lg:text-xl font-bold">Aviso de privacidad</h2>
            </div>
            <div className="mt-10 mb-16 w-96 lg:w-full lg:max-w-[1300px] mx-auto text-left text-sm font-light lg:text-base lg:font-normal space-y-4">
                <p>
                    Es política de Batería en Casa, sus filiales, subsidiarias, así como cualquier sociedad matriz o sociedad del grupo REMOSA (todas estas personas morales denominadas en lo sucesivo como “REMOSA DE CV”) y la red de Centros de Servicio y Venta, respetar y proteger la privacidad de todos nuestros clientes y potenciales clientes así como de todas las personas titulares de los datos (“Titular”) que tengamos en nuestra posesión, para lo cual las opciones y medios que hemos establecido para cuidar el tratamiento de su información son de manera general los mismos que utilizamos para nuestros propios datos y documentos.
                </p>
                <p>
                    El tratamiento de los datos personales del “Titular”, comprende las siguientes finalidades:
                </p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>
                        Ser contactado y enviar información a fin de conocer el nivel de satisfacción del “Titular” en relación con la adquisición de bienes o servicios que le hubiesen sido prestados por Batería en Casa y cualquier otra empresa del grupo REMOSA, así como dar seguimiento a sus peticiones, sugerencias, reclamaciones y/o cualquier otra solicitud del “Titular” o para realizar acciones de actualizaciones técnicas de los productos o servicios que hubiese adquirido.
                    </li>
                    <li>
                        Ser contactado y enviar información para darle a conocer promociones, información de nuestros socios de negocios, ofrecerle nuestros productos o servicios, enviar publicidad respecto a productos y servicios de cualquiera de las marcas Batería en Casa y sus asociados comercializa, y demás que estas mismas ofrezcan, pudiendo realizar cualquier acción comercial, de mercadotecnia, estadística y de prospección tendiente a dichas finalidades.
                    </li>
                    <li>
                        Ser contactado y enviar información para dar cumplimiento a requerimientos legales, mantener actualizados nuestros registros, dar seguimiento a nuestra relación comercial si existiese y mantener comunicación en general.
                    </li>
                </ul>
                <p>
                    Se ponen a su disposición los siguientes medios para ejercer los derechos de acceso, rectificación, cancelación, oposición (Solicitud ARCO) así como de revocación para el tratamiento de sus datos personales por Refaccionaria Moncada S.A. de C.V.:
                </p>
                <p>
                    <strong>Domicilio:</strong> Av. Plan de Ayala 353 Colonia Amatitlán Cuernavaca Morelos C.P. 62410
                </p>
                <p>
                    <strong>Correo electrónico:</strong> bateriaencasabec@gmail.com
                </p>
                <p>
                    Le informamos que nuestro aviso de privacidad se encuentra en <a href="https://www.bateriaencasa.com" className="text-blue-lth underline">www.bateriaencasa.com/garantias-y-ajustes</a>
                </p>
            </div>
            <Cards page="all" />
            <Footer />
            <Whatsapp />
        </>
    );
}
