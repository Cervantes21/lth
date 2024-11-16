import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { HeaderDesktop } from "@/components/HeaderDesktop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Batería en casa",
  description: "Llevamos la batería a tu casa en cualquier momento en tan solo 90 minutos en  Mexico.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <HeaderDesktop />
        <main className="pt-[100px] lg:pt-[80px]"> {/* Ajusta los valores según la altura del header */}
          {children}
        </main>
      </body>
    </html>
  );
}