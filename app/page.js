'use client';
import { Cards } from "@/components/Cards";
import MainForm from "@/components/MainForm";
import { MarcaBanner } from "@/components/MarcaBanner";
import { Whatsapp } from "@/components/Whatsapp";
import Banner from "@/components/Banner";
import ParagraphFooter from "@/components/ParagraphFooter";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Batería a Domicilio - Instalación y Cambio de Baterías</title>
        <meta name="description" content="Batería a Domicilio - Instalación y Cambio de Baterías. Servicio profesional y garantizado para autos y equipos pesados en México." />
        <meta name="keywords" content="batería a domicilio, instalación de baterías, cambio de baterías, autos, equipo pesado, México" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Batería a Domicilio - Instalación y Cambio de Baterías" />
        <meta property="og:description" content="Batería a Domicilio - Instalación y Cambio de Baterías. Servicio profesional y garantizado para autos y equipos pesados en México." />
        <meta property="og:url" content="https://www.bateriaencasa.com/" />
        <meta property="og:image" content="https://www.bateriaencasa.com/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batería a Domicilio - Instalación y Cambio de Baterías" />
        <meta name="twitter:description" content="Batería a Domicilio - Instalación y Cambio de Baterías. Servicio profesional y garantizado para autos y equipos pesados en México." />
        <meta name="twitter:image" content="https://www.bateriaencasa.com/og-image.webp" />
        <meta name="twitter:site" content="@bateriaencasa_" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      {/* Sección del banner superior */}
      <Banner />

      {/* Contenido principal */}
      <div className="bg-white">
        <MainForm />
      </div>

      {/* Banner de marcas y tarjetas */}
      <MarcaBanner />
      <Cards page="landing" />
      
      {/* Botón de WhatsApp */}
      <Whatsapp />

      {/* Footer */}
      <footer>
        <ParagraphFooter />
        <Footer />
      </footer>
    </>
  );
}
