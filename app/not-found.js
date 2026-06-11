import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <Link href="/" className="mb-8 hover:opacity-80 transition-opacity">
        <Image 
          src="/bec-logo.svg" 
          alt="BEC Logo" 
          width={180} 
          height={60} 
          priority
        />
      </Link>
      
      <h1 className="text-9xl font-extrabold text-red-lth tracking-widest">404</h1>
      <div className="bg-blue-lth px-2 text-sm rounded rotate-12 absolute text-white font-bold translate-y-4">
        Página no encontrada
      </div>
      
      <div className="mt-12">
        <p className="text-2xl font-semibold text-blue-lth md:text-3xl">
          ¡Ups! Parece que te has perdido.
        </p>
        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          La página que buscas no existe o ha sido movida. No te preocupes, 
          podemos ayudarte a encontrar la batería correcta.
        </p>
      </div>
      
      <Link
        href="/"
        className="mt-10 px-8 py-3 bg-red-lth text-white font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
      >
        VOLVER AL INICIO
      </Link>
    </div>
  );
}
