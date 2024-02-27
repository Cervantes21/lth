'use client'
import { Cards } from "@/components/Cards";
import MainForm from "@/components/MainForm";
import { MarcaBanner } from "@/components/MarcaBanner";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center shadow-2xl p-3 pb-4 rounded-b-2xl absolute bg-white z-20 w-full">
        <h1 className="text-blue-lth font-bold text-2xl mb-2">¿SE QUEDÓ SIN BATERIA?</h1>
        <p className="mb-2 text-lg">No se preocupe, ¡llámenos!</p>
        <p className="text-red-lth font-bold text-2xl">7776002745</p>
        <h2>Entregamos y colocamos la batería donde <b>tú estés.</b></h2>
      </div>
      <MainForm />
      <MarcaBanner />
      <Cards page="landing"/>


      <Whatsapp />
    </>
  );
}
