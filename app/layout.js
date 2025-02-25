import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";

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

export default function RootLayout({ children }) {
  const siteName = "Batería en Casa";
  const municipiosString = municipiosMorelos.join(" | ");
  const pageTitle = `ENTREGAMOS BATERÍAS DE AUTO Y MOTO A DOMICILIO EN ${municipiosString} | Batería en Casa`;
  const pageDescription = `Entrega rápida de baterías de auto y moto a domicilio en ${municipiosString} y más municipios de Morelos. Contáctanos para un servicio confiable y eficiente.`;
  const ogImage = "https://www.bateriaencasa.com/og-image.webp"; // Imagen para Open Graph y WhatsApp

  return (
    <>
      <Head>
        {/* Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="baterías de auto, baterías de moto, servicio a domicilio, Morelos, Cuernavaca, Cuautla, Jiutepec" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bateriaencasa.com" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@bateriaencasa_" />

        {/* WhatsApp */}
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:alt" content="Miniatura para WhatsApp" />
        <meta property="og:image:type" content="image/webp" />

        {/* General Meta Tags */}
        <meta name="author" content="Batería en Casa Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

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

        {/* Header Components */}
        <Header />
        <HeaderDesktop />

        {/* Main Content */}
        <main className="pt-1 lg:pt-[80px]">
          {children}
        </main>
      </body>
    </>
  );
}
