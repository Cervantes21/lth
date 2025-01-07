'use client';
import { Cards } from "@/components/Cards";
import MainForm from "@/components/MainForm";
import { MarcaBanner } from "@/components/MarcaBanner";
import { Whatsapp } from "@/components/Whatsapp";
import Banner from "@/components/Banner";
import ParagraphFooter from "@/components/ParagraphFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sección del banner superior */}
      <Banner />

      {/* Contenido principal sin espacio adicional abajo */}
      <div className="bg-white pt-0 pb-0">
        <MainForm />
      </div>

      {/* Banner de marcas y tarjetas */}
      <MarcaBanner />
      <Cards page="landing" />
      
      {/* Botón de WhatsApp */}
      <Whatsapp />

      {/* Footer con texto estilizado */}
      <footer>
        <ParagraphFooter />
        <Footer />
      </footer>
    </>
  );
}
