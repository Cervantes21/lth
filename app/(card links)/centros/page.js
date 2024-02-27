import { Cards } from "@/components/Cards";
import { Location } from "@/components/Location";
import { MoreInfoCard } from "@/components/MoreInfoCard";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <MoreInfoCard page="location" text="Centros de Servicio y Horarios de Operación" />
      <div className="p-5 mt-5">
        <Location />
      </div>
      <Cards page="location" />
      <Whatsapp />
    </>
  );
}
