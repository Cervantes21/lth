import { useState, useEffect, useRef } from "react";
import { filtros } from "@/data/filtros";
import Link from "next/link";

export const MainForm = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [anoVehiculo, setAnoVehiculo] = useState("");
  const [marcaVehiculo, setMarcaVehiculo] = useState("");
  const [modeloVehiculo, setModeloVehiculo] = useState("");

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

  // Efecto secundario para restablecer los valores cuando cambia anoVehiculo
  useEffect(() => {
    if (prevAnoVehiculo) {
      setMarcaVehiculo("");
      setModeloVehiculo("");
    }
  }, [anoVehiculo]);

  // Efecto secundario para restablecer los valores cuando cambia marcaVehiculo
  useEffect(() => {
    if (prevMarcaVehiculo) {
      setModeloVehiculo("");
    }
  }, [marcaVehiculo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let opciones = result
      .flatMap((item) => [item["OPCIÓN 1"], item["OPCIÓN 2"], item["OPCIÓN 3"]])
      .filter(Boolean)
      .join(",");

      console.log(opciones);
  
      window.location.href = `/search/${opciones}`;
  };

  const getUniqueBrandsForYear = (year) => {
    const itemsForYear = filtros.filter((item) => item.AÑO == year);
    setResultYears(itemsForYear);
    const brands = itemsForYear.map((item) => item.MARCA.toUpperCase());
    const uniqueBrands = [...new Set(brands)];
    return uniqueBrands;
  };

  const handleYearChange = (e) => {
    setAnoVehiculo(e.target.value);

    const uniqueBrandsForYear = getUniqueBrandsForYear(e.target.value);
    setUniqueBrands(uniqueBrandsForYear);
  };

  const getModelsForYearAndBrand = (year, brand) => {
    const itemsForYearAndBrand = resultYears.filter(
      (item) =>
        item.AÑO == year && item.MARCA.toUpperCase() == brand.toUpperCase()
    );
    setResultBrands(itemsForYearAndBrand);
    const models = itemsForYearAndBrand.map((item) =>
      item.MODELO.toUpperCase()
    );
    const uniqueModels = [...new Set(models)];
    return uniqueModels;
  };

  const handleBrandChange = (e) => {
    setMarcaVehiculo(e.target.value);

    const uniqueModelsForYearAndBrand = getModelsForYearAndBrand(
      anoVehiculo,
      e.target.value
    );
    setUniqueModels(uniqueModelsForYearAndBrand);
  };

  const handleModelChange = (e) => {
    setModeloVehiculo(e.target.value);

    const itemsForYearBrandAndModel = resultBrands.filter(
      (item) =>
        item.AÑO == anoVehiculo &&
        item.MARCA.toUpperCase() == marcaVehiculo.toUpperCase() &&
        item.MODELO.toUpperCase() == e.target.value.toUpperCase()
    );
    setResult(itemsForYearBrandAndModel);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="main-form flex flex-col items-center pt-20 gap-y-8 pb-14 translate-y-36 z-10 rounded-b-2xl"
    >
      <select
        value={tipoVehiculo}
        onChange={(e) => setTipoVehiculo(e.target.value)}
        className="p-2 w-3/4 h-14 border rounded-xl outline-none"
      >
        <option value="">Tipo</option>
        <option value="auto">Auto</option>
      </select>

      <select
        value={anoVehiculo}
        disabled={!tipoVehiculo}
        onChange={handleYearChange}
        className="p-2 w-3/4 h-14 border rounded-xl outline-none"
      >
        <option value="">Año</option>
        {[...Array(14)].map((_, i) => (
          <option key={i} value={2023 - i}>
            {2023 - i}
          </option>
        ))}
      </select>

      <select
        value={marcaVehiculo}
        disabled={!anoVehiculo}
        onChange={handleBrandChange}
        className="p-2 w-3/4 h-14 border rounded-xl outline-none"
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
        disabled={!marcaVehiculo}
        onChange={handleModelChange}
        className="p-2 w-3/4 h-14 border rounded-xl outline-none"
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
        className="p-2 h-12 w-56 bg-red-lth text-white rounded-xl"
      >
        Buscar
      </button>
    </form>
  );
};

export default MainForm;
