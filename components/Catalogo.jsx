import Image from 'next/image';
import Link from 'next/link';

const productos = [
  {
    nombre: 'LTH® PROTECT',
    descripcion: 'Batería LTH® con tecnología AGM. Optimizada para vehículos híbridos y eléctricos. Te protege respaldando distintos sistemas de seguridad del vehículo.',
    enlace: '/protect',
    banner: '/banner/protect_banner.png',
  },
  {
    nombre: 'LTH® EVOLUTION',
    descripcion: 'Batería LTH® con tecnología AGM, para vehículos con alta demanda de energía o Start-Stop.',
    enlace: '/evolution',
    banner: '/banner/evolution_banner.png',
  },
  {
    nombre: 'LTH® EVOLUTION AUXILIAR',
    descripcion: 'Batería secundaria LTH® con tecnología AGM. Diseñada para vehículos Start-Stop. Funciona como soporte de emergencia.',
    enlace: '/auxiliar',
    banner: '/banner/auxiliar_banner.png',
  },
  {
    nombre: 'LTH® HI-TEC',
    descripcion: 'Baterías LTH® que ofrecen esa potencia extra y desempeño superior que tu vehículo requiere. Brindan el abasto de energía necesario para el uso de accesorios eléctricos adicionales.',
    enlace: '/hitec',
    banner: '/banner/hi-tec-banner.png',
  },
  {
    nombre: 'LTH®',
    descripcion: 'Marca líder que encierra poder e innovación tecnológica en su interior, para brindarte seguridad y confianza gracias a su mejor desempeño.',
    enlace: '/lth',
    banner: '/banner/estandar_banner.png',
  },
  {
    nombre: 'LTH® TAXI',
    descripcion: 'Acumuladores LTH de ALTA DURACIÓN, diseñado especialmente para los profesionales del volante.',
    enlace: '/taxi',
    banner: '/banner/taxi_banner.png',
  },
];

const Catalogo = () => {
  return (
    <div className="bg-grey-lth py-10 px-4">
      <h1 className="text-3xl font-extrabold text-center text-red-lth mb-8">Catálogo de Baterías</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col"
          >
            <Link href={producto.enlace}>
              <div className="relative w-full h-40 overflow-hidden flex justify-center items-center cursor-pointer">
                <Image
                  src={producto.banner}
                  alt={producto.nombre}
                  layout="intrinsic"
                  width={140} // Ajuste de imagen a 140px
                  height={140} // Ajuste de imagen a 140px
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="p-6 flex flex-col justify-between flex-grow min-h-0">
              <h2 className="text-xl font-bold text-red-lth mb-2 text-center">{producto.nombre}</h2>
              <p className="text-gray-700 text-center mb-4">{producto.descripcion}</p>
              <Link
                href={producto.enlace}
                className="self-center text-center bg-[#061684] text-white font-bold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
