"use client";

import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import Link from "next/link";

const AccordianContext = createContext();

// Acordeón para menú desplegable
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
  const ref = useRef(null);

  const handleChildClick = (e) => {
    e.stopPropagation();
    setSelected(null);
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
  const menuRef = useRef(null);

  const handleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
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

  return (
    <>
      {/* Header para dispositivos móviles */}
      <header className="bg-blue-lth flex justify-between items-center shadow-2xl lg:hidden fixed top-0 left-0 w-full z-50 h-[70px] px-4">
        {/* Botón del menú */}
        <button
          className="w-8 h-8 flex items-center justify-center"
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

        {/* Logo centrado */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[50px] w-[50px] rounded-full"
          />
        </Link>
      </header>

      {/* Menú lateral desplegable */}
      <div
        ref={menuRef}
        className={`h-full transition-transform duration-500 bg-white fixed z-[100] top-0 w-[320px] ${
          open ? "" : "-translate-x-96"
        }`}
      >
        <button className="mt-3 ml-3" onClick={handleMenu}>
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
        </button>
        <p className="text-blue-lth font-bold ml-4">MENÚ</p>

        {/* Contenido del menú */}
        <Accordian className="max-w-lg">
          <AccordianItem value="1" trigger="Catálogo de Productos">
            <div className="flex flex-col w-full">
              <Link href="/agm" className="py-2 hover:opacity-80" onClick={closeMenu}>AGM</Link>
              <Link href="/hitec" className="py-2 hover:opacity-80" onClick={closeMenu}>HITEC</Link>
              <Link href="/lth" className="py-2 hover:opacity-80" onClick={closeMenu}>LTH</Link>
            </div>
          </AccordianItem>
          {/* Opciones individuales con separación */}
          <Link href="/recomendaciones" className="py-2 px-4 hover:bg-gray-100 block" onClick={closeMenu}>
            Recomendaciones
          </Link>
          <Link href="/nosotros" className="py-2 px-4 hover:bg-gray-100 block" onClick={closeMenu}>
            Nosotros
          </Link>
        </Accordian>
      </div>
    </>
  );
};
