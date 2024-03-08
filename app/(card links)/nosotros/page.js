import { Cards } from "@/components/Cards";
import { MoreInfoCard } from "@/components/MoreInfoCard";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <MoreInfoCard page="nosotros" text="Bateria En Casa es la empresa creada para ti." />
      <p className="mt-10 mb-28 w-96 mx-auto text-center text-lg font-light lg:text-xl lg:font-normal lg:w-full lg:max-w-[1300px] lg:mt-28">
        Somos la solución a que tu día no se detenga. Nuestro servicio resuelve el cambio de batería en tu casa, negocio y oficina. Llámanos y uno de nuestros técnicos te visitará para realizar el cambio de tu batería de manera rápida, eficiente y profesional.
      </p>
      <Cards page="nosotros" />
      <Whatsapp />
    </>
  );
}
