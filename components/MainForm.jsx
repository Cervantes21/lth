import { useState, useEffect, useRef } from "react";
import { filtros } from "@/data/filtros";

export const MainForm = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [anoVehiculo, setAnoVehiculo] = useState("");
  const [marcaVehiculo, setMarcaVehiculo] = useState("");
  const [modeloVehiculo, setModeloVehiculo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(0);

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
      (item) => item.AÑO == year && item.MARCA.toUpperCase() == brand.toUpperCase()
    );
    setResultBrands(itemsForYearAndBrand);
    const models = itemsForYearAndBrand.map((item) =>
      typeof item.MODELO === "string" ? item.MODELO.toUpperCase() : item.MODELO
    );
    return [...new Set(models)];
  };

  const handleYearChange = (e) => {
    setAnoVehiculo(e.target.value);
    setUniqueBrands(getUniqueBrandsForYear(e.target.value));
  };

  const handleBrandChange = (e) => {
    setMarcaVehiculo(e.target.value);
    setUniqueModels(getModelsForYearAndBrand(anoVehiculo, e.target.value));
  };

  const handleModelChange = (e) => {
    setModeloVehiculo(e.target.value);
    const itemsForYearBrandAndModel = resultBrands.filter(
      (item) =>
        item.AÑO == anoVehiculo &&
        item.MARCA.toUpperCase() == marcaVehiculo.toUpperCase() &&
        (typeof item.MODELO === "string" ? item.MODELO.toUpperCase() : item.MODELO) == String(e.target.value).toUpperCase()
    );
    setResult(itemsForYearBrandAndModel);
  };

  const handleSubmit = (e) => {
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
    let opciones = result
      .flatMap((item) => [item["OPCIÓN 1"], item["OPCIÓN 2"], item["OPCIÓN 3"]])
      .filter(Boolean)
      .join(",");

    window.location.href = `/search/${opciones}`;
  };

  useEffect(() => {
    if (tipoVehiculo && step === 0) {
      setStep(1);
    }
  }, [tipoVehiculo]);

  useEffect(() => {
    if (anoVehiculo && step === 1) {
      setStep(2);
    }
  }, [anoVehiculo]);

  useEffect(() => {
    if (marcaVehiculo && step === 2) {
      setStep(3);
    }
  }, [marcaVehiculo]);

  useEffect(() => {
    if (modeloVehiculo && step === 3) {
      setStep(4);
    }
  }, [modeloVehiculo]);

  const renderStep = () => {
    const commonSelectClass =
      "p-3 w-full h-14 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white";

    switch (step) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <p className="text-xl text-center font-semibold text-white mb-4">
              Empecemos, selecciona tu automóvil
            </p>
            <select
              value={tipoVehiculo}
              onChange={(e) => setTipoVehiculo(e.target.value)}
              className={`${commonSelectClass}`}
            >
              <option value="">Tipo</option>
              <option value="auto">Auto</option>
            </select>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <select
              value={anoVehiculo}
              onChange={handleYearChange}
              className={`${commonSelectClass}`}
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
      case 2:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <select
              value={marcaVehiculo}
              onChange={handleBrandChange}
              className={`${commonSelectClass}`}
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
      case 3:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <select
              value={modeloVehiculo}
              onChange={handleModelChange}
              className={`${commonSelectClass}`}
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
      case 4:
        return (
          <div className="flex flex-col items-center justify-center w-full gap-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="p-3 h-16 w-full bg-red-600 text-white font-semibold rounded-xl shadow-md transform hover:scale-105 transition-all"
            >
              Buscar
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="main-form flex flex-col items-center justify-center pt-16 pb-14 translate-y-24 lg:translate-y-40 z-10 rounded-b-2xl w-full bg-red-600"
    >
      <div className="flex flex-col items-center justify-center gap-y-8 mx-auto max-w-[700px] w-full">
        {renderStep()}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default MainForm;
