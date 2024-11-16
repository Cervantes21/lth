import { useState, useEffect, useRef } from "react";
import { filtros } from "@/data/filtros";
import Link from "next/link";

export const MainForm = () => {
  // Definir los estados para almacenar las selecciones del formulario
  const [tipoVehiculo, setTipoVehiculo] = useState(""); // Estado para el tipo de vehículo
  const [anoVehiculo, setAnoVehiculo] = useState(""); // Estado para el año del vehículo
  const [marcaVehiculo, setMarcaVehiculo] = useState(""); // Estado para la marca del vehículo
  const [modeloVehiculo, setModeloVehiculo] = useState(""); // Estado para el modelo del vehículo

  // Establecer los estados para almacenar las marcas y modelos únicos basados en los filtros
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [uniqueModels, setUniqueModels] = useState([]);

  // Establecer los estados para almacenar los resultados filtrados
  const [resultYears, setResultYears] = useState([]);
  const [resultBrands, setResultBrands] = useState([]);
  const [result, setResult] = useState([]);

  // Estado para mostrar mensajes de error
  const [errorMessage, setErrorMessage] = useState(""); 

  // Referencias para almacenar los valores previos de año y marca para resetear los campos dependientes
  const prevAnoVehiculoRef = useRef();
  const prevMarcaVehiculoRef = useRef();

  // Uso de useEffect para mantener las referencias previas actualizadas
  useEffect(() => {
    prevAnoVehiculoRef.current = anoVehiculo;
    prevMarcaVehiculoRef.current = marcaVehiculo;
  });

  const prevAnoVehiculo = prevAnoVehiculoRef.current;
  const prevMarcaVehiculo = prevMarcaVehiculoRef.current;

  // Efecto secundario para restablecer marca y modelo cuando se cambia el año
  useEffect(() => {
    if (prevAnoVehiculo) {
      setMarcaVehiculo(""); // Restablecer marca cuando cambia el año
      setModeloVehiculo(""); // Restablecer modelo cuando cambia el año
    }
  }, [anoVehiculo]);

  // Efecto secundario para restablecer modelo cuando se cambia la marca
  useEffect(() => {
    if (prevMarcaVehiculo) {
      setModeloVehiculo(""); // Restablecer modelo cuando cambia la marca
    }
  }, [marcaVehiculo]);

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si falta alguna selección en el formulario
    if (!tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo) {
      setErrorMessage("Por favor, completa todos los campos."); // Establece el mensaje de error
      return; // Si falta algún campo, no envía el formulario
    }
    
    setErrorMessage(""); // Limpiar mensaje de error si todos los campos están completos

    // Generar la lista de opciones de búsqueda
    let opciones = result
      .flatMap((item) => [item["OPCIÓN 1"], item["OPCIÓN 2"], item["OPCIÓN 3"]])
      .filter(Boolean) // Filtra valores nulos o vacíos
      .join(","); // Une todas las opciones en una cadena separada por coma

    // Redirige a la página de búsqueda con los filtros seleccionados
    window.location.href = `/search/${opciones}`;
  };

  // Filtra las marcas únicas basadas en el año seleccionado
  const getUniqueBrandsForYear = (year) => {
    const itemsForYear = filtros.filter((item) => item.AÑO == year); // Filtra los elementos por año
    setResultYears(itemsForYear); // Almacena los resultados del año seleccionado
    const brands = itemsForYear.map((item) => item.MARCA.toUpperCase()); // Extrae las marcas y las convierte a mayúsculas
    const uniqueBrands = [...new Set(brands)]; // Elimina marcas duplicadas
    return uniqueBrands;
  };

  // Maneja el cambio en el año del vehículo
  const handleYearChange = (e) => {
    setAnoVehiculo(e.target.value); // Actualiza el estado de año del vehículo

    // Filtra las marcas disponibles para el año seleccionado
    const uniqueBrandsForYear = getUniqueBrandsForYear(e.target.value);
    setUniqueBrands(uniqueBrandsForYear); // Establece las marcas filtradas
  };

  // Filtra los modelos únicos basados en el año y marca seleccionados
  const getModelsForYearAndBrand = (year, brand) => {
    const itemsForYearAndBrand = resultYears.filter(
      (item) => item.AÑO == year && item.MARCA.toUpperCase() == brand.toUpperCase()
    );
    setResultBrands(itemsForYearAndBrand); // Almacena los resultados de la marca seleccionada
    const models = itemsForYearAndBrand.map((item) =>
      typeof item.MODELO === 'string' ? item.MODELO.toUpperCase() : item.MODELO
    );
    const uniqueModels = [...new Set(models)]; // Elimina modelos duplicados
    return uniqueModels;
  };

  // Maneja el cambio en la marca del vehículo
  const handleBrandChange = (e) => {
    setMarcaVehiculo(e.target.value); // Actualiza el estado de la marca del vehículo

    // Filtra los modelos disponibles para el año y marca seleccionados
    const uniqueModelsForYearAndBrand = getModelsForYearAndBrand(
      anoVehiculo,
      e.target.value
    );
    setUniqueModels(uniqueModelsForYearAndBrand); // Establece los modelos filtrados
  };

  // Maneja el cambio en el modelo del vehículo
  const handleModelChange = (e) => {
    setModeloVehiculo(e.target.value); // Actualiza el estado del modelo del vehículo

    // Filtra los resultados para el año, marca y modelo seleccionados
    const itemsForYearBrandAndModel = resultBrands.filter(
      (item) =>
        item.AÑO == anoVehiculo &&
        item.MARCA.toUpperCase() == marcaVehiculo.toUpperCase() &&
        (typeof item.MODELO === 'string' ? item.MODELO.toUpperCase() : item.MODELO) == String(e.target.value).toUpperCase()
    );
    setResult(itemsForYearBrandAndModel); // Establece los resultados filtrados
  };

  return (
    <form
      onSubmit={handleSubmit} // Llama a la función handleSubmit cuando el formulario es enviado
      className="main-form pt-20 pb-14 translate-y-36 lg:translate-y-56 z-10 rounded-b-2xl"
    >
      <div className="flex flex-col items-center justify-center gap-y-8 mx-auto max-w-[700px]">
        {/* Selector de tipo de vehículo */}
        <select
          value={tipoVehiculo} 
          onChange={(e) => setTipoVehiculo(e.target.value)} // Actualiza el tipo de vehículo cuando cambia
          className="p-2 w-3/4 h-14 border rounded-xl outline-none"
        >
          <option value="">Tipo</option>
          <option value="auto">Auto</option>
        </select>

        {/* Selector de año del vehículo */}
        <select
          value={anoVehiculo}
          disabled={!tipoVehiculo} // Deshabilita si no se ha seleccionado un tipo de vehículo
          onChange={handleYearChange} // Llama a handleYearChange cuando cambia el año
          className="p-2 w-3/4 h-14 border rounded-xl outline-none"
        >
          <option value="">Año</option>
          {[...Array(14)].map((_, i) => (
            <option key={i} value={2023 - i}>
              {2023 - i}
            </option>
          ))}
        </select>

        {/* Selector de marca del vehículo */}
        <select
          value={marcaVehiculo}
          disabled={!anoVehiculo} // Deshabilita si no se ha seleccionado un año
          onChange={handleBrandChange} // Llama a handleBrandChange cuando cambia la marca
          className="p-2 w-3/4 h-14 border rounded-xl outline-none"
        >
          <option value="">Marca</option>
          {uniqueBrands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Selector de modelo del vehículo */}
        <select
          value={modeloVehiculo}
          disabled={!marcaVehiculo} // Deshabilita si no se ha seleccionado una marca
          onChange={handleModelChange} // Llama a handleModelChange cuando cambia el modelo
          className="p-2 w-3/4 h-14 border rounded-xl outline-none"
        >
          <option value="">Modelo</option>
          {uniqueModels.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>

        {/* Mostrar el mensaje de error si falta completar campos */}
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}

        {/* Botón para enviar el formulario */}
        <button
          type="submit"
          className="p-2 h-12 w-56 bg-red-lth text-white rounded-xl shadow-xl shadow-black"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default MainForm;
