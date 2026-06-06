import dbConnect from "@/utils/dbConnect";
import FormSelection from "@/models/FormSelection";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    await dbConnect(); // Conectar a MongoDB
    const body = await request.json();

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

    // Lógica para enviar el correo
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Tu correo de Gmail
          pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación (App Password)
        },
      });

      const bateriasHtml = baterias
        .map(
          (b) => `<li><strong>${b.tipoBateria}:</strong> ${b.opciones.join(", ")}</li>`
        )
        .join("");

      const mailOptions = {
        from: `"BEC - Nueva Búsqueda" <${process.env.EMAIL_USER}>`,
        to: "bateriaencasabec@gmail.com",
        subject: `Nueva selección de batería: ${marcaVehiculo} ${modeloVehiculo}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #061684;">Nueva búsqueda de batería recibida</h2>
            <p>Se ha registrado una nueva búsqueda con los siguientes detalles:</p>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Tipo de Vehículo:</strong> ${tipoVehiculo}</li>
              <li><strong>Año:</strong> ${anoVehiculo}</li>
              <li><strong>Marca:</strong> ${marcaVehiculo}</li>
              <li><strong>Modelo:</strong> ${modeloVehiculo}</li>
            </ul>
            <h3 style="color: #D3172E;">Baterías sugeridas:</h3>
            <ul>
              ${bateriasHtml}
            </ul>
            <hr />
            <p style="font-size: 0.8em; color: #777;">Este es un mensaje automático enviado desde el sistema de Batería en Casa.</p>
          </div>
        `,
      };

      // No esperamos a que se envíe el correo para responder al cliente (evita lentitud)
      // Pero si hay error, lo logueamos en el servidor
      transporter.sendMail(mailOptions).catch((err) => {
        console.error("Error al enviar el correo:", err);
      });

    } catch (emailError) {
      console.error("Error configurando el transporte de correo:", emailError);
      // El proceso continúa aunque falle la configuración del correo
    }

    return NextResponse.json(
      { message: "Datos guardados con éxito y notificación enviada." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API formSelection:", error);
    
    const isDev = process.env.NODE_ENV === 'development';
    return NextResponse.json(
      { 
        message: "Hubo un error al procesar los datos.", 
        error: isDev ? error.message : "Error interno del servidor" 
      },
      { status: 500 }
    );
  }
}
