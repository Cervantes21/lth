"use client";

import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import Link from "next/link";

const AccordianContext = createContext();
let ref;

function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

function AccordianItem({ children, value, trigger, className, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;


  const handleChildClick = (e) => {
    e.stopPropagation(); // Previene que el evento se propague al header
    setSelected(null); // Cierra el acordeón padre
  };

  return (
    <li className={`border-b bg-white ${className || ""}`} {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium menu-divs"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref} onClick={handleChildClick}>
          {children}
        </div>
      </div>
    </li>
  );
}

export const Header = () => {
  const [open, setOpen] = useState(false);
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const linkRef5 = useRef(null);
  const menuRef = useRef(null);

  const handleMenu = () => {
    setOpen(!open);
    ref.current.click(); // Cierra el acordeón
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (linkRef) => {
    setOpen(false); // Cierra el menú
    linkRef.current.click(); // Simula un clic en el enlace
  };

  return (
    <>
      <header className="bg-blue-lth header-grid  shadow-2xl lg:hidden">
        <div className="h-full items-center flex">
          <button
            className="ml-6 w-8 h-8"
            onClick={handleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="w-8 h-8 hover:opacity-70 transition-opacity duration-300 ease-in-out"
            >
              <path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
            </svg>
          </button>
        </div>
        <Link href="/" className="rounded-full my-1 h-[70px] w-[70px] mx-auto">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[70px] w-[70px] mx-auto rounded-full"
          />
        </Link>
      </header>
      <div
        ref={menuRef}
        className={`h-full transition-transform duration-500 bg-white fixed z-[100] top-0 w-[320px] ${
          open ? "" : "-translate-x-96"
        }`}
      >
        <button className="mt-3 ml-3" onClick={handleMenu}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-10 h-10 arrow-back"
          >
            <path
              className=" duration-300 transition-all"
              fill="#d3172e"
              fillRule="evenodd"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06"
              clipRule="evenodd"
            />
          </svg>{" "}
        </button>
        <p className="text-blue-lth font-bold ml-4">MENÚ</p>

        <Accordian className="max-w-lg">
          <AccordianItem className value="1" trigger="Catálogo de Productos">
            <div className="flex flex-col w-full">
              <div
                onClick={() => handleButtonClick(linkRef1)}
                className="cursor-pointer flex justify-between items-center pb-4 pt-0 font-medium menu-divs"
              >
                <p>AGM</p>
                <ChevronDown className="-rotate-90" size={16} />
              </div>
              <Link href="/agm" ref={linkRef1} className="hidden" />
              <hr />

              <div
                onClick={() => handleButtonClick(linkRef2)}
                className="cursor-pointer flex justify-between items-center py-4 pl-0 font-medium menu-divs"
              >
                <p>HITEC</p>
                <ChevronDown className="-rotate-90" size={16} />
              </div>
              <Link href="/hitec" ref={linkRef2} className="hidden" />
              <hr />

              <div
                onClick={() => handleButtonClick(linkRef3)}
                className="cursor-pointer flex justify-between items-center pl-0 pt-4 pb-0 font-medium menu-divs"
              >
                <p>LTH</p>
                <ChevronDown className="-rotate-90" size={16} />
              </div>

              <Link href="/lth" ref={linkRef3} className="hidden" />
            </div>
          </AccordianItem>
          <hr className="w-11/12 mx-auto" />
          <div
            onClick={() => handleButtonClick(linkRef4)}
            className="cursor-pointer flex justify-between items-center p-4 font-medium menu-divs"
          >
            <p>Recomendaciones de clientes</p>
            <ChevronDown className="-rotate-90" size={16} />
          </div>
          <Link href="/recomendaciones" ref={linkRef4} className="hidden" />
          <hr className="w-11/12 mx-auto" />
          <div
            onClick={() => handleButtonClick(linkRef5)}
            className="cursor-pointer flex justify-between items-center p-4 font-medium menu-divs"
          >
            <p>Garantías y Ajustes</p>
            <ChevronDown className="-rotate-90" size={16} />
          </div>
          <Link href="/garantias-y-ajustes" ref={linkRef5} className="hidden" />
        </Accordian>
      </div>
    </>
  );
};
