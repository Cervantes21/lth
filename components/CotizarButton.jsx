'use client';
import { cotizar } from './Whatsapp';

export default function CotizarButton({ bci, marca }) {
  return (
    <button 
      onClick={() => cotizar(bci, marca)} 
      className="bg-red-lth text-white text-sm w-52 mt-10 mb-10 mx-auto flex justify-center py-2 rounded-lg lg:text-xl"
    >
      ¡COTIZA TU BATERÍA CON DESCUENTO ESPECIAL!
    </button>
  );
}
