import Catalogo from "@/components/Catalogo";
import { Cards } from "@/components/Cards";
import { Whatsapp } from "@/components/Whatsapp";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function CatalogoPage() {
  return (
    <>
      <Link href="/" className="flex w-16 m-1 mt-4 p-4 border-none outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="w-10 h-10 arrow-back"
        >
          <path
            className="duration-300 transition-all"
            fill="#d3172e"
            fillRule="evenodd"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <div className="p-5 mt-5">
        <Catalogo />
      </div>
      <Whatsapp />
      <Cards />
      <Footer />
    </>
  );
}