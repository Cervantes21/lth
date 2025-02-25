import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { Cards } from "@/components/Cards";
import { Location } from "@/components/Location";
import { MoreInfoCard } from "@/components/MoreInfoCard";
import { Whatsapp } from "@/components/Whatsapp";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Centros de Servicio y Horarios de Operación - Batería en Casa</title>
        <meta name="description" content="Encuentra nuestros centros de servicio de baterías y consulta los horarios de operación. Te ofrecemos atención cercana y eficiente en todos los municipios de Morelos." />
        <meta name="keywords" content="centros de servicio, horarios de operación, baterías, Morelos, atención cercana, eficiente" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Centros de Servicio y Horarios de Operación - Batería en Casa" />
        <meta property="og:description" content="Encuentra nuestros centros de servicio de baterías y consulta los horarios de operación. Te ofrecemos atención cercana y eficiente en todos los municipios de Morelos." />
        <meta property="og:url" content="https://www.bateriaencasa.com/centros-de-servicio" />
        <meta property="og:image" content="https://www.bateriaencasa.com/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Centros de Servicio y Horarios de Operación - Batería en Casa" />
        <meta name="twitter:description" content="Encuentra nuestros centros de servicio de baterías y consulta los horarios de operación. Te ofrecemos atención cercana y eficiente en todos los municipios de Morelos." />
        <meta name="twitter:image" content="https://www.bateriaencasa.com/og-image.webp" />
        <meta name="twitter:site" content="@bateriaencasa_" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="p-5 mt-5">
        <MoreInfoCard page="location" text="Centros de Servicio y Horarios de Operación" />
        <Location />
      </div>
      
      <Cards page="location" />

      <Footer />
      <Whatsapp />
    </>
  );
}
