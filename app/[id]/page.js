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
    if (MARCA === "LTH EVOLUTION") {
        return "/evolution"
    }
    if (MARCA === "LTH EVOLUTION AUX") {
        return "/auxiliar"
    }
    if (MARCA === "LTH PROTECT") {
        return "/protect"
    }
    if (MARCA === "LTH TAXI") {
        return "/taxi"
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
                    <div className="bg-grey-lth mt-20 lg:mt-0 pt-5 pb-5">
                        <Link href={lastUrl}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                className="w-16 mt-4 h-10 -translate-y-2 ml-2 arrow-back absolute"
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
                        <div className="flex flex-col lg:flex-col-reverse">
                            <div className="flex flex-row items-center justify-center mx-auto">
                                <Image
                                    src={`/${bateria.IMAGEN}`}
                                    alt={replacePipeWithSlash(bateria.BCI)}
                                    width={1000}
                                    height={500}
                                    className="w-36 mx-auto transition-all duration-300 ease-in-out transform lg:w-6/12 lg:max-h-[500px]"
                                />
                                <div className="w-6/12">
                                    {
                                        data ?
                                            <>
                                                <div className="hidden flex-col items-center gap-y-1 mt-10 px-5 text-blue-lth font-semibold lg:flex">
                                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-2">BCI:</p> <p>{replacePipeWithSlash(data.bci)}</p></div>
                                                    <div className="bg-white flex flex-row justify-between items-center px-3 w-full"><p className="py-2">Voltaje:</p> <p>{data.voltaje}</p></div>
                                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-2">CA:</p> <p>{data.ca}</p></div>
                                                    <div className="bg-white flex flex-row justify-between items-center px-3 w-full"><p className="py-2">CCA:</p> <p>{data.cca}</p></div>
                                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-2">CR:</p> <p>{data.cr}</p></div>
                                                    <div className="bg-white flex flex-row justify-between items-center px-3 w-full"><p className="py-2">Polaridad:</p> <p>{data.polaridad}</p></div>
                                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-2">Garantía:</p> <p>{data.garantia} meses</p></div>
                                                    <div className="bg-white flex flex-row justify-between items-center px-3 w-full"><p className="py-2">Reemplazos sin costo:</p> <p>{data.reemplazos} meses</p></div>
                                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-2">Largo:</p> <p>{data.largo} mm</p></div>
                                                    <div className="bg-white flex flex-row justify-between items-center px-3 w-full"><p className="py-2">Alto:</p> <p>{data.alto} mm</p></div>
                                                    <div className="bg-grey-lth flex flex-row justify-between items-center px-3 w-full"><p className="py-2">Ancho:</p> <p>{data.ancho} mm</p></div>
                                                </div>
                                            </>
                                            : ""
                                    }
                                </div>
                            </div>
                            <h1 className="text-xl text-center font-bold mt-4 lg:text-5xl lg:mt-20">
                                {replacePipeWithSlash(bateria.BCI)}
                            </h1>
                        </div>
                    </div>
                    <div>
                        {
                            bateria.MARCA === "LTH" ?
                                <>
                                    <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal lg:text-xl italic">
                                        "Más de 85 años siendo la marca líder, la más recomendada por los consumidores, podemos ofrecerte el RESPALDO que ninguna otra puede."</p>
                                    <h3 className="uppercase text-blue-lth font-semibold text-xl text-center lg:text-3xl">Beneficios</h3>
                                    <ul className=" mt-5 flex flex-col w-fit mx-auto px-5 lg:text-lg">
                                        <li className="list-disc">36 MESES de garantía.</li>
                                        <li className="list-disc">12 MESES de reemplazo sin costo.</li>
                                        <li className="list-disc">Cobertura del 99% de las aplicaciones vehiculares.</li>
                                        <li className="list-disc">Potencia igual a las baterías de equipo original.</li>
                                        <li className="list-disc">Garantía válida en cualquier Centro de Servicio LTH.</li>
                                        <li className="list-disc">Libre de mantenimiento.</li>
                                    </ul>
                                </> : ""
                        }                    
                        {
                            bateria.MARCA === "HI-TEC" ?
                                <>
                                    <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal lg:text-xl lg:max-w-[1300px] italic">
                                        "En las baterías LTH HI-TEC se ve reflejada la constante innovación tecnológica de LTH. Su CALIDAD SUPERIOR ofrece energía y potencia adicional para un alto desempeño."
                                    </p>
                                    <h3 className="uppercase text-blue-lth font-semibold text-xl text-center lg:text-3xl">Beneficios</h3>
                                    <ul className=" mt-5 flex flex-col w-fit mx-auto px-5 lg:text-lg">
                                        <li className="list-disc">48 MESES de garantía.</li>
                                        <li className="list-disc">12 MESES de reemplazo sin costo.</li>
                                        <li className="list-disc">Mayor potencia y desempeño.</li>
                                        <li className="list-disc">Tecnología de calidad premium.</li>
                                        <li className="list-disc">Amperaje superior a baterías de equipo original.</li>
                                        <li className="list-disc">Libre de mantenimiento.</li>
                                    </ul>
                                </> : ""
                        }
                        {
                            bateria.MARCA === "LTH EVOLUTION" ?
                                <>
                                    <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal lg:text-xl lg:max-w-[1300px] italic">
                                        "LTH EVOLUTION AGM tiene una AVANZADA TECNOLOGÍA que la hace más confiable, duradera y poderosa, asegurando el mejor desempeño para los vehículos actuales. Para automóviles con tecnología Start-Stop."
                                    </p>
                                    <h3 className="uppercase text-blue-lth font-semibold text-xl text-center lg:text-3xl">Beneficios</h3>
                                    <ul className=" mt-5 flex flex-col w-fit mx-auto px-5 lg:text-lg">
                                        <li className="list-disc">48 MESES de garantía.</li>
                                        <li className="list-disc">18 MESES de reemplazo sin costo.</li>
                                        <li className="list-disc">Accesorios equipados.</li>
                                        <li className="list-disc">Alta demanda eléctrica en vehículos premium.</li>
                                        <li className="list-disc">Baterías AGM de fábrica.</li>
                                        <li className="list-disc">Batería debajo del asiento o cajuela</li>
                                    </ul>
                                </> : ""
                        }
                        {
                            bateria.MARCA === "LTH PROTECT" ?
                                <>
                                    <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal lg:text-xl lg:max-w-[1300px] italic">
                                        "Es una batería de alto desempeño, con tecnología AGM. Optimizada para vehículos híbridos y eléctricos. Protege los sistemas de seguridad en caso de falla de la batería de tracción y respalda funciones de confort de tu vehículo."
                                    </p>
                                    <h3 className="uppercase text-blue-lth font-semibold text-xl text-center lg:text-3xl">Beneficios</h3>
                                    <ul className=" mt-5 flex flex-col w-fit mx-auto px-5 lg:text-lg">
                                        <li className="list-disc">60 MESES de garantía.</li>
                                        <li className="list-disc">24 MESES de reemplazo sin costo.</li>
                                        <li className="list-disc">Accesorios equipados.</li>
                                        <li className="list-disc">Alimenta funciones como la alarma, iluminación y actualizaciones inalámbricas, aún con el vehículo apagado.</li>
                                        <li className="list-disc">Baterías AGM de fábrica.</li>
                                        <li className="list-disc">Libre de mantenimiento</li>
                                    </ul>
                                </> : ""
                        }
                        {
                            bateria.MARCA === "LTH TAXI" ?
                                <>
                                    <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal lg:text-xl lg:max-w-[1300px] italic">
                                        "Acumuladores LTH® de ALTA DURACIÓN, diseñado especialmente para los profesionales del volante."
                                    </p>
                                    <h3 className="uppercase text-blue-lth font-semibold text-xl text-center lg:text-3xl">Beneficios</h3>
                                    <ul className=" mt-5 flex flex-col w-fit mx-auto px-5 lg:text-lg">
                                        <li className="list-disc">30 MESES de garantía.</li>
                                        <li className="list-disc">6 MESES de reemplazo sin costo.</li>
                                        <li className="list-disc">Accesorios equipados.</li>
                                        <li className="list-disc">Alimenta funciones como la alarma, iluminación y actualizaciones inalámbricas, aún con el vehículo apagado.</li>
                                        <li className="list-disc">Potencia igual a las baterías de equipo original.</li>
                                        <li className="list-disc">Libre de mantenimiento</li>
                                    </ul>
                                </> : ""
                        }
                        {
                            bateria.MARCA === "LTH EVOLUTION AUX" ?
                                <>
                                    <p className="mt-5 mb-10 w-11/12 mx-auto text-center text-lg font-normal lg:text-xl lg:max-w-[1300px] italic">
                                        "Batería secundaria LTH® con tecnología AGM. Diseñada para vehículos Start-Stop. Funciona como soporte de emergencia."
                                    </p>
                                    <h3 className="uppercase text-blue-lth font-semibold text-xl text-center lg:text-3xl">Beneficios</h3>
                                    <ul className=" mt-5 flex flex-col w-fit mx-auto px-5 lg:text-lg">
                                        <li className="list-disc">12 MESES de garantía.</li>
                                        <li className="list-disc">12 MESES de reemplazo sin costo.</li>
                                        <li className="list-disc">Accesorios equipados.</li>
                                        <li className="list-disc">Alimenta funciones como la alarma, iluminación y actualizaciones inalámbricas, aún con el vehículo apagado.</li>
                                        <li className="list-disc">Potencia igual a las baterías de equipo original.</li>
                                        <li className="list-disc">Libre de mantenimiento</li>
                                    </ul>
                                </> : ""
                        }
                    </div>
                    <div>
                        {
                            data ?
                                <>
                                    <div className="flex flex-col items-center gap-y-3 mt-10 px-5 text-blue-lth font-semibold lg:hidden">
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
                                    <button onClick={() => cotizar(data.bci, bateria.MARCA)} className="bg-red-lth text-white text-sm w-52 mt-10 mb-10 mx-auto flex justify-center py-2 rounded-lg lg:text-xl">
                                        ¡Cotiza ya!
                                    </button>
                                    <Link href={"/garantias-y-ajustes"} className="italic text-center mt-10 mb-20 font-semibold mx-auto w-fit block hover:text-blue-700 underline transition-colors duration-150">Para términos y condiciones consulta la póliza de garantía.</Link>

                                </>
                                : ""
                        }
                    </div>

                </> : <>Cargando...</>
            }
            <Cards page="all" />
            <Whatsapp />
        </>
    );
}