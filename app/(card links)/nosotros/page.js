import { Cards } from "@/components/Cards";
import { MoreInfoCard } from "@/components/MoreInfoCard";
import { Whatsapp } from "@/components/Whatsapp";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
            {/* Tarjeta informativa */}
            <MoreInfoCard page="nosotros" text="Batería En Casa es la empresa creada para ti." />

            {/* Texto con imagen */}
            <div className="text-center px-4 mt-10 lg:mt-28 lg:max-w-4xl lg:mx-auto">
                <p className="text-lg font-bold lg:text-xl">
                    Somos la solución para que tu día no se detenga.
                </p>
                <Link href="/" className="block mt-4">
                    <Image
                        src="/bec-animation.png"
                        alt="BEC Animation"
                        width={300}
                        height={300}
                        className="w-48 h-auto mx-auto md:w-72 transition-transform duration-300 hover:scale-105"
                    />
                </Link>
                <p className="mt-4 text-lg font-light lg:text-xl lg:font-normal">
                    Nuestro servicio resuelve el cambio de batería en tu casa, negocio y oficina. 
                    Llámanos y uno de nuestros técnicos te visitará para realizar el cambio de tu batería 
                    de manera rápida, eficiente y profesional.
                </p>
            </div>

            {/* Secciones adicionales */}
            <Cards page="nosotros" />
            <Whatsapp />
        </>
    );
}
