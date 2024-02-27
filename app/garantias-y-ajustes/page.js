import { Cards } from "@/components/Cards";
import { Whatsapp } from "@/components/Whatsapp";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 m-3 arrow-back"
                >
                    <path
                        className=" duration-300 transition-all"
                        fill="#d3172e"
                        fillRule="evenodd"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
            <h1 className="text-xl font-bold text-blue-lth uppercase w-full text-center mb-10">Garantías y ajustes</h1>
            <div className="bg-grey-lth text-center uppercase font-medium p-2">
                <h2 className="w-96 mx-auto"> informacion importante sobre la garantía</h2>
            </div>
            <p className="mt-10 mb-16 w-96 mx-auto text-center text-lg font-light">Bateria en Casa solo usa la mejor marca de Batería en México: LTH. Cada batería que instalamos tiene garantía acuerdo a las políticas de nuestro proveedor.
                Cuando nuestro técnico acuda a su domicilio, por procedimiento determinará si la batería necesita una recarga o un reemplazo. La recarga tiene un costo.</p>
            <button className="bg-red-lth text-white text-sm w-56 mb-8 py-1 rounded-lg flex items-center justify-center mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="white" d="m12 15.577l-3.538-3.539l.707-.719L11.5 13.65V5h1v8.65l2.33-2.33l.708.718zM5 19v-4.038h1V18h12v-3.038h1V19z" />
            </svg> Descargar garantía </button>
            <div className="bg-grey-lth text-center uppercase font-medium p-4">
                <h2 className="w-96 mx-auto">Acerca de nosotros</h2>
            </div>
            <p className="mt-10 mb-16 w-96 mx-auto text-center text-lg font-light">BEC Batería en Casa,  es una empresa de instalación y reemplazo de baterías de automóviles, equipo pesado, y otras aplicaciones. Es una Marca Registrada. Nuestra empresa trabaja con la mejor marca de baterías del mercado: LTH, LTH HITEC, LTH AGM, OPTIMA, LTH Heavy Duty, LTH Golf y otras más.</p>
            <button className="bg-red-lth text-white text-sm w-56 mb-20 py-1 rounded-lg flex items-center justify-center mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="white" d="m12 15.577l-3.538-3.539l.707-.719L11.5 13.65V5h1v8.65l2.33-2.33l.708.718zM5 19v-4.038h1V18h12v-3.038h1V19z" />
            </svg> Descargar informacion</button>
            <Cards page="all" />
            <Whatsapp />
        </>
    );
}
