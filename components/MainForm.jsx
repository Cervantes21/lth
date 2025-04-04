import { useState, useEffect } from "react";
import Portada from "./Portada";
import { filtros } from "@/data/filtros";
import { motos as motoFiltros } from "@/data/motoFiltros";

const MainForm = ({ forceShowForm = false }) => {
  const [showForm, setShowForm] = useState(false); // Para manejar la visibilidad del formulario
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [anoVehiculo, setAnoVehiculo] = useState("");
  const [marcaVehiculo, setMarcaVehiculo] = useState("");
  const [modeloVehiculo, setModeloVehiculo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);
  const [resultYears, setResultYears] = useState([]);
  const [resultBrands, setResultBrands] = useState([]);

  // Seleccionamos el dataset de acuerdo al tipo de vehículo
  const dataSet = tipoVehiculo === "moto" ? motoFiltros : filtros;

  useEffect(() => {
    if (anoVehiculo) {
      setMarcaVehiculo("");
      setModeloVehiculo("");
      setUniqueBrands(getUniqueBrandsForYear(anoVehiculo));
    }
  }, [anoVehiculo, tipoVehiculo]);

  useEffect(() => {
    if (marcaVehiculo) {
      setModeloVehiculo("");
      setUniqueModels(getModelsForYearAndBrand(anoVehiculo, marcaVehiculo));
    }
  }, [marcaVehiculo]);

  // --- NUEVO: Si se pasa forceShowForm = true, omitimos la Portada y vamos directo al formulario
  useEffect(() => {
    if (forceShowForm) {
      setShowForm(true);
    }
  }, [forceShowForm]);
  // ---

  const getUniqueBrandsForYear = (year) => {
    const itemsForYear = dataSet.filter((item) => item.AÑO == year);
    setResultYears(itemsForYear);
    const brands = itemsForYear.map((item) => item.MARCA.toUpperCase());
    return [...new Set(brands)];
  };

  const getModelsForYearAndBrand = (year, brand) => {
    const itemsForYearAndBrand = resultYears.filter(
      (item) =>
        item.AÑO == year && item.MARCA.toUpperCase() === brand.toUpperCase()
    );
    setResultBrands(itemsForYearAndBrand);
    const models = itemsForYearAndBrand.map((item) =>
      typeof item.MODELO === "string" ? item.MODELO.toUpperCase() : item.MODELO
    );
    return [...new Set(models)];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    // Filtramos para validar que existan resultados
    const itemsForYearBrandAndModel = resultBrands.filter(
      (item) =>
        item.AÑO == anoVehiculo &&
        item.MARCA.toUpperCase() === marcaVehiculo.toUpperCase() &&
        (typeof item.MODELO === "string"
          ? item.MODELO.toUpperCase()
          : item.MODELO) === modeloVehiculo.toUpperCase()
    );

    if (itemsForYearBrandAndModel.length === 0) {
      setErrorMessage("No se encontraron resultados.");
      return;
    }

    const baterias = itemsForYearBrandAndModel.map((item) => ({
      tipoBateria: item.BATERIA,
      opciones: [item["OPCIÓN 1"], item["OPCIÓN 2"], item["OPCIÓN 3"]].filter(Boolean),
    }));

    const dataToSend = {
      tipoVehiculo,
      anoVehiculo: parseInt(anoVehiculo),
      marcaVehiculo,
      modeloVehiculo,
      baterias,
    };

    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/formSelection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();
      if (response.ok) {
        // Construimos el querystring con los datos del vehículo
        const queryParams = new URLSearchParams({
          tipo: tipoVehiculo,
          ano: anoVehiculo,
          marca: marcaVehiculo,
          modelo: modeloVehiculo,
        });

        // Unimos las opciones de baterías
        const opciones = baterias.flatMap((b) => b.opciones).join(",");

        // Redirigimos a: /search/<opciones>?tipo=...&ano=...&marca=...&modelo=...
        window.location.href = `/search/${opciones}?${queryParams.toString()}`;
      } else {
        setErrorMessage(responseData.message || "Error al guardar los datos.");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setErrorMessage("Hubo un problema al enviar los datos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-form flex flex-col items-center justify-center pt-8 z-10 rounded-b-2xl w-full">
      {/* 
        Si NO es forceShowForm y showForm es false, mostramos la Portada.
        Si es forceShowForm (true) o showForm (true), se muestra el <form> 
      */}
      {!forceShowForm && !showForm ? (
        <Portada onMotociclistaClick={() => setShowForm(true)} />
      ) : (
        <form
          className="flex flex-col items-center justify-center lg:gap-y-6 sm:gap-y-0 md:gap-y-1 mx-auto max-w-[700px] w-full px-4 h-screen"
          onSubmit={handleSubmit}
        >
          {/* Si NO es forceShowForm, entonces mostramos el botón de "Regresar" a la portada */}
          {!forceShowForm && (
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="self-start bg-red-lth text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300"
            >
              Regresar
            </button>
          )}

          <select
            value={tipoVehiculo}
            onChange={(e) => setTipoVehiculo(e.target.value)}
            className="p-3 w-full h-14 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          >
            <option value="">Tipo</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>

          <select
            value={anoVehiculo}
            onChange={(e) => setAnoVehiculo(e.target.value)}
            className="p-3 w-full h-14 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          >
            <option value="">Año</option>
            {[...Array(95)].map((_, i) => (
              <option key={i} value={2025 - i}>
                {2025 - i}
              </option>
            ))}
          </select>

          <select
            value={marcaVehiculo}
            onChange={(e) => setMarcaVehiculo(e.target.value)}
            className="p-3 w-full h-14 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
            disabled={!anoVehiculo}
          >
            <option value="">Marca</option>
            {uniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select
            value={modeloVehiculo}
            onChange={(e) => setModeloVehiculo(e.target.value)}
            className="p-3 w-full h-14 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
            disabled={!marcaVehiculo}
          >
            <option value="">Modelo</option>
            {uniqueModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className={`p-3 h-16 w-full text-white font-semibold rounded-xl shadow-md transform transition-all ${
              loading || !tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-lth hover:scale-105"
            }`}
            disabled={loading || !tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo}
          >
            {loading ? "Cargando..." : "Buscar"}
          </button>

          {errorMessage && (
            <p className="text-red-lth text-center">{errorMessage}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default MainForm;

