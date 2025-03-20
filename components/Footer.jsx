"use client";
import Link from "next/link";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#000839] via-[#061684] to-[#000839] text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Horarios */}
                <div className="lg:mt-16 md:mt-4">
                    <h3 className="text-lg font-bold underline mb-4">Horarios</h3>
                    <p>Lunes a viernes 8:30 a 18:00 hrs</p>
                    <p>Sábados 8:30 a 17:00 hrs</p>
                    <p>Domingos y días festivos 10:00 a 15:00 hrs</p>
                </div>

                {/* Asesoría */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg underline font-bold mb-4">Asesoría Gratis</h3>
                    <a
                        href="tel:+527776002745"
                        className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
                    >
                        WhatsApp (777) 600 27 45
                    </a>

                    {/* Animación de redes sociales */}
                    <a
                        href="https://www.facebook.com/becbateriaencasa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex flex-col items-center justify-center"
                    >
                        <DotLottieReact
                            src="/animations/redes-sociales.json"
                            autoplay
                            loop
                            style={{ width: 100, height: 100 }}
                        />
                        <span className="text-white mt-2 block font-bold">Visítanos en Facebook</span>
                    </a>
                </div>

                {/* Links rápidos */}
                <div className="underline">
                    <h3 className="text-lg underline font-bold mb-4">Links Rápidos</h3>
                    <ul className="flex flex-col items-center">
                        <li className="mb-2">
                            <Link href="/search/default" className="hover:underline">
                                ¿Qué batería lleva mi auto?
                            </Link>
                        </li>
                        {[
                            { href: "/lth", text: "Baterías LTH", img: "/banner/estandar_banner.webp" },
                            { href: "/motobaterias", text: "Motobaterías AGM", img: "/banner/motobateria_banner.webp" },
                            { href: "/taxi", text: "Baterías LTH Taxi", img: "/banner/taxi_banner.webp" },
                            { href: "/auxiliar", text: "Baterías Evolution Auxiliar", img: "/banner/auxiliar_banner.webp" },
                            { href: "/evolution", text: "Baterías LTH Evolution", img: "/banner/evolution_banner.webp" },
                            { href: "/protect", text: "Baterías LTH Protect", img: "/banner/protect_banner.webp" },
                            { href: "/hitec", text: "Baterías LTH Hi-Tec", img: "/banner/hi-tec-banner.webp" },
                        ].map((link, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <Image
                                    src={link.img}
                                    alt={link.text}
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                <Link href={link.href} className="hover:underline">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                        <li className="mt-4">
                            <Link href="/garantias-y-ajustes" className="hover:underline">
                                Aviso de Privacidad
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
