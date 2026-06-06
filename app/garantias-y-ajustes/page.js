import { BotonGarantia } from "@/components/BotonGarantia";
import { Cards } from "@/components/Cards";
import { Whatsapp } from "@/components/Whatsapp";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full px-4 lg:px-16">
        <Link href="/" className="inline-flex m-1 p-4 border-none outline-none">
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
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Título principal */}
        <h1 className="w-full text-center text-2xl font-extrabold text-blue-lth uppercase mb-10 md:text-3xl lg:text-4xl">
          Garantías y ajustes
        </h1>

        {/* Sección: Información importante sobre la garantía */}
        <div className="bg-grey-lth text-center uppercase font-bold p-3 rounded-lg shadow-sm">
          <h2 className="text-lg md:text-xl text-blue-lth">
            Información importante sobre la garantía
          </h2>
        </div>
        
        <p className="mt-8 mb-12 text-center text-lg font-light leading-relaxed md:text-xl lg:font-normal">
          Batería en Casa solo usa la mejor marca de batería en México:{" "}
          <strong className="text-blue-lth font-bold">LTH®</strong>. Cada
          batería que instalamos tiene garantía, de acuerdo a las políticas de
          nuestro proveedor. Cuando nuestro técnico acuda a su domicilio, por
          procedimiento determinará si la batería necesita una recarga o un
          reemplazo. La recarga tiene un costo.
        </p>

        {/* Botón de garantía */}
        <div className="flex justify-center mb-12">
          <BotonGarantia />
        </div>

        {/* Aviso de privacidad */}
        <div className="bg-grey-lth text-center uppercase font-bold p-3 rounded-lg shadow-sm">
          <h2 className="text-lg md:text-xl text-blue-lth">
            Aviso de privacidad
          </h2>
        </div>

        <div className="mt-8 mb-20 text-left text-base font-light space-y-6 md:text-lg lg:font-normal leading-relaxed">
          <p>
            Es política de <strong className="text-blue-lth">Batería en Casa</strong>, sus filiales, subsidiarias, así como
            cualquier sociedad matriz o sociedad del grupo REMOSA (todas estas
            personas morales denominadas en lo sucesivo como “REMOSA DE CV”) y la
            red de Centros de Servicio y Venta, respetar y proteger la privacidad
            de todos nuestros clientes...
          </p>
          
          <div className="space-y-4">
            <p className="font-semibold text-blue-lth">
              El tratamiento de los datos personales del “Titular” comprende las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Ser contactado y enviar información a fin de conocer el nivel de
                satisfacción del “Titular” en relación con la adquisición de bienes
                o servicios...
              </li>
              <li>
                Ser contactado y enviar información para darle a conocer
                promociones, información de nuestros socios de negocios, ofrecerle
                nuestros productos o servicios...
              </li>
              <li>
                Ser contactado y enviar información para dar cumplimiento a
                requerimientos legales...
              </li>
            </ul>
          </div>

          <p>
            Se ponen a su disposición los siguientes medios para ejercer los
            derechos de acceso, rectificación, cancelación, oposición (Solicitud
            ARCO) así como de revocación...
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <p>
              <strong className="text-blue-lth">Domicilio:</strong> Av. Plan de Ayala 353 Colonia Amatitlán
              Cuernavaca Morelos C.P. 62410
            </p>
            <p>
              <strong className="text-blue-lth">Correo electrónico:</strong> bateriaencasabec@gmail.com
            </p>
          </div>

          <p className="text-center pt-4">
            Le informamos que nuestro aviso de privacidad se encuentra en{" "}
            <Link
              href="/garantias-y-ajustes"
              className="text-red-lth underline font-bold hover:text-red-700 transition-colors"
            >
              www.bateriaencasa.com/garantias-y-ajustes
            </Link>
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full mb-12">
        <Cards page="all" />
      </div>

      {/* Footer */}
      <Footer />

      {/* Whatsapp */}
      <Whatsapp />
    </>
  );
}
