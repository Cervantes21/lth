import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Batería en Casa | Servicio a Domicilio",
  description:
    "Llevamos tu batería a domicilio, en cualquier momento en tan solo 90 minutos en Todo Morelos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Batería en Casa</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bateriaencasa.com" />
        <meta property="og:title" content="Batería en Casa" />
        <meta
          property="og:description"
          content="Llevamos tu batería a domicilio, en cualquier momento en tan solo 90 minutos en Todo Morelos."
        />
        <meta property="og:image" content="https://www.bateriaencasa.com/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batería en Casa" />
        <meta name="twitter:site" content="@bateriaencasa_" />
        <meta
          name="twitter:description"
          content="Llevamos tu batería a domicilio, en cualquier momento en tan solo 90 minutos en Todo Morelos."
        />
        <meta name="twitter:image" content="https://www.bateriaencasa.com/og-image.webp" />

        {/* General Meta Tags */}
        <meta name="author" content="Batería en Casa Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>
        {/* Script de Google Tag Manager */}
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
