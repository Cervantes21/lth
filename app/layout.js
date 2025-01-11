// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeaderDesktop from "@/components/HeaderDesktop";
// Importa el componente Script
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Batería en casa",
  description:
    "Llevamos la batería a tu casa en cualquier momento en tan solo 90 minutos en Todo Morelos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Script de Google Tag Manager: primero la librería */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-18GMZTN95Y"
          strategy="afterInteractive"
        />
        
        {/* Script de configuración de GA */}
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

        {/* Tus componentes de cabecera */}
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
