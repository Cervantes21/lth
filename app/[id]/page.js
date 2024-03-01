"use client";
import { usePathname } from "next/navigation";
import productos from "@/data/Catalogo";
import Link from "next/link";
import { useEffect, useState } from "react"; // Importa useState
import Image from "next/image";
import { Cards } from "@/components/Cards";
import { Whatsapp, cotizar } from "@/components/Whatsapp";

const url = (MARCA) => {
    if (MARCA === "LTH") {
        return "/lth"
    }
    if (MARCA === "HI-TEC") {
        return "/hitec"
    }
    if (MARCA === "LTH AGM") {
        return "/agm"
    }
}

export default function Bateria() {
    const pathname = usePathname();
    const id = decodeURIComponent(pathname.slice(pathname.indexOf('/') + 1));
    const [bateria, setBateria] = useState(null); // Usa useState para manejar el estado de bateria
    const [lastUrl, setlastUrl] = useState("/"); // Usa useState para manejar el estado de bateria
    const [data, setData] = useState(null);

    useEffect(() => {
        for (const producto of productos) {
            if (producto.BCI === id) {
                setBateria(producto); // Usa setBateria para actualizar el estado de bateria
            }
        }

        scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (bateria) { // Asegúrate de que bateria no es null antes de acceder a MARCA
            const result = url(bateria.MARCA);
            setlastUrl(result);
            setData({
                bci: bateria.BCI,
                voltaje: bateria.VOLTAJE,
                ca: bateria.CA,
                cca: bateria.CCA,
                cr: bateria.CR,
                polaridad: bateria.POLARIDAD,
                garantia: bateria.GARANTIA,
                reemplazos: bateria.REEMPLAZOS_COSTO,
                largo: bateria.LARGO,
                alto: bateria.ALTO,
                ancho: bateria.ANCHO,
            });
        }
    }, [bateria]);

    function replacePipeWithSlash(str) {
        return str.replace(/\|/g, '/');
      }

    return (
        <>
            {bateria ?
                <>
                    <div className="bg-grey-lth pt-5 pb-5">
                        <Link href={lastUrl}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                className="w-10 h-10 -translate-y-2 ml-2 arrow-back absolute"
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
                        <Image
                            src={`/${bateria.IMAGEN}`}
                            alt={replacePipeWithSlash(bateria.BCI)}
                            width={500}
                            height={300}
                            className="w-36 mx-auto transition-all duration-300 ease-in-out transform hover:scale-110"
                        />
                        <h1 className="text-xl text-center font-bold mt-4">
                            {replacePipeWithSlash(bateria.BCI)}
                        </h1>
                    </div>

                    {
                        bateria.MARCA === "LTH AGM" ?
                            <>
                                <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal">
                                    LTH AGM tiene una AVANZADA TECNOLOGÍA que la hace más confiable, duradera y poderosa, asegurando el mejor desempeño para los vehículos actuales. Para automóviles con tecnología Start-Stop.
                                </p>
                                <h3 className="uppercase text-blue-lth font-semibold text-xl text-center">Beneficios</h3>
                                <ul className=" mt-5 flex flex-col items-center px-5">
                                    <li className="list-disc">6 Años de garantía.</li>
                                    <li className="list-disc">18 MESES de reemplazo sin costo.</li>
                                    <li className="list-disc">Accesorios equipados.</li>
                                    <li className="list-disc">Alta demanda eléctrica en vehículos premium.</li>
                                    <li className="list-disc">Baterías AGM de fábrica.</li>
                                    <li className="list-disc">Batería debajo del asiento o cajuela</li>
                                </ul>
                            </> : ""
                    }
                    {
                        bateria.MARCA === "LTH" ?
                            <>
                                <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal">
                                    Más de 85 años siendo la marca líder, la más recomendada por los consumidores, podemos ofrecerte el RESPALDO que ninguna otra puede                                </p>
                                <h3 className="uppercase text-blue-lth font-semibold text-xl text-center">Beneficios</h3>
                                <ul className=" mt-5 flex flex-col items-center px-5">
                                    <li className="list-disc">4 Años de garantía.</li>
                                    <li className="list-disc">12 MESES de reemplazo sin costo.</li>
                                    <li className="list-disc">Cobertura del 99% de las aplicaciones vehiculares.</li>
                                    <li className="list-disc">Potencia igual a las baterías de equipo original .</li>
                                    <li className="list-disc">Garantía válida en cualquier Centro de Servicio LTH.</li>
                                    <li className="list-disc">Libre de mantenimiento.</li>
                                </ul>
                            </> : ""
                    }                    {
                        bateria.MARCA === "HI-TEC" ?
                            <>
                                <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal">
                                    En las baterías LTH HI-TEC se ve reflejada la constante innovación tecnológica de LTH. Su CALIDAD SUPERIOR ofrece energía y potencia adicional para un alto desempeño.                                </p>
                                <h3 className="uppercase text-blue-lth font-semibold text-xl text-center">Beneficios</h3>
                                <ul className=" mt-5 flex flex-col items-center px-5">
                                    <li className="list-disc">5 Años de garantía.</li>
                                    <li className="list-disc">12 MESES de reemplazo sin costo.</li>
                                    <li className="list-disc">Mayor potencia y desempeño.</li>
                                    <li className="list-disc">Tecnología de calidad premium.</li>
                                    <li className="list-disc">Amperaje superior a baterías de equipo original.</li>
                                    <li className="list-disc">Libre de mantenimiento.</li>
                                </ul>
                            </> : ""
                    }

                    <p className="italic text-center mt-10 font-semibold">Para términos y condiciones consulta la póliza de garantía.</p>

                    {
                        data ?
                            <>
                                <div className="flex flex-col items-center gap-y-3 mt-10 px-5 text-blue-lth font-semibold">
                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-3">BCI:</p> <p>{replacePipeWithSlash(data.bci)}</p></div>
                                    <div className="flex flex-row justify-between items-center px-3 w-full"><p className="py-3">Voltaje:</p> <p>{data.voltaje}</p></div>
                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-3">CA:</p> <p>{data.ca}</p></div>
                                    <div className="flex flex-row justify-between items-center px-3 w-full"><p className="py-3">CCA:</p> <p>{data.cca}</p></div>
                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-3">CR:</p> <p>{data.cr}</p></div>
                                    <div className="flex flex-row justify-between items-center px-3 w-full"><p className="py-3">Polaridad:</p> <p>{data.polaridad}</p></div>
                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-3">Garantía:</p> <p>{data.garantia} meses</p></div>
                                    <div className="flex flex-row justify-between items-center px-3 w-full"><p className="py-3">Reemplazos sin costo:</p> <p>{data.reemplazos} meses</p></div>
                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-3">Largo:</p> <p>{data.largo} mm</p></div>
                                    <div className="flex flex-row justify-between items-center px-3 w-full"><p className="py-3">Alto:</p> <p>{data.alto} mm</p></div>
                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-3">Ancho:</p> <p>{data.ancho} mm</p></div>
                                </div>
                                <button onClick={() => cotizar(data.bci, bateria.MARCA)} className="bg-red-lth text-white text-sm w-52 mt-10 mb-20 mx-auto flex justify-center py-2 rounded-lg">
                                    Cotiza ya
                                </button>
                            </>
                            : ""
                    }

                </> : <>Cargando...</>}


            <Cards page="all" />
            <Whatsapp />
        </>
    );
}