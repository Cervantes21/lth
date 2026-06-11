import { useState, useEffect } from "react";
import Portada from "./Portada";
import { filtros } from "@/data/filtros";
import { motos as motoFiltros } from "@/data/motoFiltros";

const MainForm = ({ forceShowForm = false, compact = false }) => {
  const [showForm, setShowForm] = useState(false);
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [anoVehiculo, setAnoVehiculo] = useState("");
  const [marcaVehiculo, setMarcaVehiculo] = useState("");
  const [modeloVehiculo, setModeloVehiculo] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);
  const [resultYears, setResultYears] = useState([]);
  const [resultBrands, setResultBrands] = useState([]);

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

  useEffect(() => {
    if (forceShowForm) {
      setShowForm(true);
    }
  }, [forceShowForm]);

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

    // Validación del teléfono si se proporciona
    if (telefono.trim() !== "") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(telefono.trim())) {
        setErrorMessage("Por favor, ingresa un número de teléfono válido (10 dígitos).");
        return;
      }
    }

    // Todos los campos van en el body del POST, incluyendo nombre y telefono
    const dataToSend = {
      tipoVehiculo,
      anoVehiculo: parseInt(anoVehiculo),
      marcaVehiculo,
      modeloVehiculo,
      nombre: nombre.trim(),
      telefono: telefono.trim(),
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

      let responseData;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        const errorText = await response.text();
        console.error("Error del servidor (no JSON):", errorText);
        responseData = { message: "Error del servidor. Por favor, verifica la configuración." };
      }

      if (response.ok) {
        // Solo los datos del vehículo y contacto van en el querystring para mostrarse en pantalla
        const queryParams = new URLSearchParams({
          tipo: tipoVehiculo,
          ano: anoVehiculo,
          marca: marcaVehiculo,
          modelo: modeloVehiculo,
          ...(nombre.trim() && { nombre: nombre.trim() }),
          ...(telefono.trim() && { telefono: telefono.trim() }),
        });

        const opciones = baterias.flatMap((b) => b.opciones).join(",");

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

  const containerClass = compact
    ? "flex flex-col items-center justify-center w-full p-6 bg-white rounded-2xl border border-gray-200 shadow-sm"
    : "main-form flex flex-col items-center justify-center pt-8 z-10 rounded-b-2xl w-full";

  return (
    <div className={containerClass}>
      {!forceShowForm && !showForm ? (
        <Portada onMotociclistaClick={() => setShowForm(true)} />
      ) : (
        <form
          className={`flex flex-col items-center justify-center gap-y-3 mx-auto w-full ${
            compact ? "max-w-full h-auto" : "max-w-[700px] h-screen px-4"
          }`}
          onSubmit={handleSubmit}
        >
          {/* Título interno modo compacto */}
          {compact && (
            <h3 className="text-blue-lth font-bold text-lg mb-2 uppercase">
              Configura tu búsqueda
            </h3>
          )}

          {/* Botón regresar (solo si no es forceShowForm) */}
          {!forceShowForm && (
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="self-start bg-red-lth text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 mb-4"
            >
              Regresar
            </button>
          )}

          {/* Selects del vehículo */}
          <div className="w-full space-y-3">
            <select
              value={tipoVehiculo}
              onChange={(e) => setTipoVehiculo(e.target.value)}
              className="p-3 w-full h-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-sm transition-all"
            >
              <option value="">Tipo de Vehículo</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>

            <select
              value={anoVehiculo}
              onChange={(e) => setAnoVehiculo(e.target.value)}
              className="p-3 w-full h-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-sm transition-all"
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
              className="p-3 w-full h-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-sm transition-all disabled:bg-gray-50"
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
              className="p-3 w-full h-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-sm transition-all disabled:bg-gray-50"
              disabled={!marcaVehiculo}
            >
              <option value="">Modelo</option>
              {uniqueModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* Sección de contacto opcional */}
          <div className="w-full border-t border-gray-100 pt-4 mt-1 space-y-3">
            <p className="text-center text-sm text-red-lth font-medium leading-snug">
              🎁{" "}
              <span className="text-blue-lth font-semibold">
                ¿Quieres un descuento especial?
              </span>{" "}
              Déjanos tus datos y te contactamos con la mejor oferta.
            </p>

            <input
              type="text"
              name="nombre"
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre (opcional)"
              className="p-3 w-full h-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-blue-lth shadow-sm transition-all"
            />

            <input
              type="tel"
              name="telefono"
              autoComplete="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="Tu teléfono (opcional) — te llamamos gratis"
              className="p-3 w-full h-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-blue-lth shadow-sm transition-all"
            />
          </div>

          {/* Botón submit */}
          <button
            type="submit"
            className={`p-3 h-14 w-full text-white font-bold rounded-xl shadow-lg transform transition-all mt-2 ${
              loading || !tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-lth hover:scale-105 active:scale-95"
            }`}
            disabled={
              loading || !tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo
            }
          >
            {loading ? "Cargando..." : "BUSCAR BATERÍA"}
          </button>

          {errorMessage && (
            <p className="text-red-lth text-center text-sm font-medium mt-2 bg-red-50 p-2 rounded-lg w-full">
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default MainForm;