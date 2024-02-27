import { useState } from "react";

export const MainForm = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [anoVehiculo, setAnoVehiculo] = useState("");
  const [marcaVehiculo, setMarcaVehiculo] = useState("");
  const [modeloVehiculo, setModeloVehiculo] = useState("");

  // Aquí puedes agregar funciones para manejar cambios en los selects y cargar datos dinámicamente

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <form onSubmit={handleSubmit} className="main-form flex flex-col items-center pt-20 gap-y-8 pb-14 translate-y-36 z-10 rounded-b-2xl">
      <select
        value={tipoVehiculo}
        onChange={(e) => setTipoVehiculo(e.target.value)}
        className="p-2 w-3/4 h-14 border rounded-xl outline-none"
      >
        <option value="">Tipo</option>
      </select>

      <select
        value={anoVehiculo}
        onChange={(e) => setAnoVehiculo(e.target.value)}
        className="p-2 w-3/4 h-14 border rounded-xl outline-none"
      >
        <option value="">Año</option>
      </select>

      <select
        value={marcaVehiculo}
        onChange={(e) => setMarcaVehiculo(e.target.value)}
        className="p-2 w-3/4 h-14 border rounded-xl outline-none"
      >
        <option value="">Marca</option>
      </select>

      <select
        value={modeloVehiculo}
        onChange={(e) => setModeloVehiculo(e.target.value)}
        className="p-2 w-3/4 h-14 border rounded-xl outline-none"
      >
        <option value="">Modelo</option>
      </select>

      <button type="submit" className="p-2 h-12 w-56 bg-red-lth text-white rounded-xl">
        Buscar
      </button>
    </form>
  );
};

export default MainForm;
