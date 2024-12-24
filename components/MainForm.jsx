import { useState, useEffect, useRef } from "react";
import Portada from "./Portada";
import { filtros } from "@/data/filtros";

const MainForm = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [anoVehiculo, setAnoVehiculo] = useState("");
  const [marcaVehiculo, setMarcaVehiculo] = useState("");
  const [modeloVehiculo, setModeloVehiculo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);
  const [resultYears, setResultYears] = useState([]);
  const [resultBrands, setResultBrands] = useState([]);
  const [result, setResult] = useState([]);

  const prevAnoVehiculoRef = useRef();
  const prevMarcaVehiculoRef = useRef();

  useEffect(() => {
    prevAnoVehiculoRef.current = anoVehiculo;
    prevMarcaVehiculoRef.current = marcaVehiculo;
  });

  const prevAnoVehiculo = prevAnoVehiculoRef.current;
  const prevMarcaVehiculo = prevMarcaVehiculoRef.current;

  useEffect(() => {
    if (prevAnoVehiculo) {
      setMarcaVehiculo("");
      setModeloVehiculo("");
    }
  }, [anoVehiculo]);

  useEffect(() => {
    if (prevMarcaVehiculo) {
      setModeloVehiculo("");
    }
  }, [marcaVehiculo]);

  const getUniqueBrandsForYear = (year) => {
    const itemsForYear = filtros.filter((item) => item.AÑO == year);
    setResultYears(itemsForYear);
    const brands = itemsForYear.map((item) => item.MARCA.toUpperCase());
    return [...new Set(brands)];
  };

  const getModelsForYearAndBrand = (year, brand) => {
    const itemsForYearAndBrand = resultYears.filter(
      (item) => item.AÑO == year && item.MARCA.toUpperCase() === brand.toUpperCase()
    );
    setResultBrands(itemsForYearAndBrand);
    const models = itemsForYearAndBrand.map((item) =>
      typeof item.MODELO === "string" ? item.MODELO.toUpperCase() : item.MODELO
    );
    return [...new Set(models)];
  };

  const handleTipoVehiculoChange = (e) => {
    setTipoVehiculo(e.target.value);
    if (e.target.value) setStep(2); // Avanzar al siguiente paso
  };

  const handleYearChange = (e) => {
    setAnoVehiculo(e.target.value);
    setUniqueBrands(getUniqueBrandsForYear(e.target.value));
    if (e.target.value) setStep(3); // Avanzar al siguiente paso
  };

  const handleBrandChange = (e) => {
    setMarcaVehiculo(e.target.value);
    setUniqueModels(getModelsForYearAndBrand(anoVehiculo, e.target.value));
    if (e.target.value) setStep(4); // Avanzar al siguiente paso
  };

  const handleModelChange = (e) => {
    setModeloVehiculo(e.target.value);
    const itemsForYearBrandAndModel = resultBrands.filter(
      (item) =>
        item.AÑO == anoVehiculo &&
        item.MARCA.toUpperCase() === marcaVehiculo.toUpperCase() &&
        (typeof item.MODELO === "string"
          ? item.MODELO.toUpperCase()
          : item.MODELO) === e.target.value.toUpperCase()
    );
    setResult(itemsForYearBrandAndModel);
    if (e.target.value) setStep(5); // Avanzar al siguiente paso
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    if (result.length === 0) {
      setErrorMessage("No se encontraron resultados.");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    const baterias = result.map((item) => ({
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

    try {
      const response = await fetch("/api/formSelection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("Datos enviados correctamente:", responseData);

        // Redirigir con los datos obtenidos
        const opciones = baterias
          .flatMap((bateria) => bateria.opciones)
          .join(",");
        window.location.href = `/search/${opciones}`;
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

  const renderStep = () => {
    const commonSelectClass =
      "p-3 w-full h-14 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white";

    switch (step) {
      case 0:
        return <Portada onMotociclistaClick={() => setStep(1)} />;
      case 1:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <select
              value={tipoVehiculo}
              onChange={handleTipoVehiculoChange}
              className={commonSelectClass}
            >
              <option value="">Tipo</option>
              <option value="auto">Auto</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <select
              value={anoVehiculo}
              onChange={handleYearChange}
              className={commonSelectClass}
            >
              <option value="">Año</option>
              {[...Array(14)].map((_, i) => (
                <option key={i} value={2023 - i}>
                  {2023 - i}
                </option>
              ))}
            </select>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <select
              value={marcaVehiculo}
              onChange={handleBrandChange}
              className={commonSelectClass}
            >
              <option value="">Marca</option>
              {uniqueBrands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <select
              value={modeloVehiculo}
              onChange={handleModelChange}
              className={commonSelectClass}
            >
              <option value="">Modelo</option>
              {uniqueModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <button
              type="button"
              onClick={handleSubmit}
              className={`p-3 h-16 w-full text-white font-semibold rounded-xl shadow-md transform transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-lth hover:scale-105"
              }`}
              disabled={loading}
            >
              {loading ? "Cargando..." : "Buscar"}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-form flex flex-col items-center justify-center pt-8 z-10 rounded-b-2xl w-full">
      <div className="flex flex-col items-center justify-center gap-y-8 mx-auto max-w-[700px] w-full">
        {renderStep()}
        {errorMessage && <p className="text-red-lth text-center">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default MainForm;
