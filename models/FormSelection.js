import mongoose from "mongoose";

const formSelectionSchema = new mongoose.Schema({
  tipoVehiculo: { type: String, required: true },
  anoVehiculo: { type: Number, required: true },
  marcaVehiculo: { type: String, required: true },
  modeloVehiculo: { type: String, required: true },
  baterias: [
    {
      tipoBateria: { type: String, required: true },
      opciones: [{ type: String }], // Para almacenar múltiples opciones
    },
  ],
});

const FormSelection = mongoose.models.FormSelection || mongoose.model("FormSelection", formSelectionSchema);

export default FormSelection;
