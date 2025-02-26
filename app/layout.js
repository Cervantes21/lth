import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// Lista de municipios de Morelos
const municipiosMorelos = [
  "CUERNAVACA",
  "CUAUTLA",
  "JIUTEPEC",
  "TEMIXCO",
  "YAUTEPEC",
  "ZACATEPEC",
  "EMILIANO ZAPATA",
  "XOCHITEPEC",
  "PUENTE DE IXTLA",
  "TEPOZTLÁN",
  "TLAYACAPAN",
  "OCUITUCO",
  "YECAPIXTLA",
  "TLALTIZAPÁN",
  "JOJUTLA",
  "AYALA",
  "AXOCHIAPAN",
  "JONACATEPEC",
  "TETELA DEL VOLCÁN",
  "TLALNEPANTLA",
  "COATLÁN DEL RÍO",
  "MIACATLÁN",
  "AMACUZAC",
  "TETECALA",
  "TLAQUILTENANGO",
];

export const metadata = {
  title: "Batería en Casa",
  description:
    "Llevamos la batería a tu casa en cualquier momento en tan solo 90 minutos en Todo Morelos.",
};

export default function RootLayout({ children }) {
  const siteName = "Batería en Casa";
  const municipiosString = municipiosMorelos.join(" | ");
  const pageTitle = `ENTREGAMOS BATERÍAS DE AUTO Y MOTO A DOMICILIO EN ${municipiosString} | ${siteName}`;
  const pageDescription = `Entrega rápida de baterías de auto y moto a domicilio en ${municipiosString} y más municipios de Morelos. Contáctanos para un servicio confiable y eficiente.`;
  const ogImage = "https://www.bateriaencasa.com/og-image.webp";

  return (
    <html lang="en">
      <head>
        {/* Meta Tags Generales */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Batería en Casa Team" />

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="baterías de auto, baterías de moto, servicio a domicilio, Morelos, Cuernavaca, Cuautla, Jiutepec"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bateriaencasa.com" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:alt" content="Miniatura para WhatsApp" />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@bateriaencasa_" />
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-18GMZTN95Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-18GMZTN95Y', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Componentes de cabecera */}
        <Header />
        <HeaderDesktop />

        {/* Contenido principal */}
        <main className="pt-1 lg:pt-[80px]">
          {children}
        </main>
      </body>
    </html>
  );
}
