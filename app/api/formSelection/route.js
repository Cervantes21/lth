import dbConnect from "@/utils/dbConnect";
import FormSelection from "@/models/FormSelection";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect(); // Conectar a MongoDB Atlas
    const body = await request.json(); // Extrae el JSON del request

    const { tipoVehiculo, anoVehiculo, marcaVehiculo, modeloVehiculo, baterias } = body;

    if (!tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo || !baterias?.length) {
      return NextResponse.json(
        { message: "Todos los campos son requeridos, incluyendo las baterías." },
        { status: 400 }
      );
    }

    const newFormSelection = new FormSelection({
      tipoVehiculo,
      anoVehiculo,
      marcaVehiculo,
      modeloVehiculo,
      baterias,
    });

    await newFormSelection.save();
    return NextResponse.json(
      { message: "Datos guardados con éxito.", data: newFormSelection },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al conectar o procesar datos:", error);
    return NextResponse.json(
      { message: "Hubo un error al procesar los datos.", error: error.message },
      { status: 500 }
    );
  }
}
