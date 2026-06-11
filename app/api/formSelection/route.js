import dbConnect from "@/utils/dbConnect";
import FormSelection from "@/models/FormSelection";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate Limiter simple en memoria (Nota: En Vercel/Serverless esto es por instancia)
const rateLimitMap = new Map();
const LIMIT = 5; // peticiones
const WINDOW = 60 * 1000; // 1 minuto

function isRateLimited(ip) {
  const now = Date.now();
  const userData = rateLimitMap.get(ip) || { count: 0, firstRequest: now };

  if (now - userData.firstRequest > WINDOW) {
    userData.count = 1;
    userData.firstRequest = now;
  } else {
    userData.count++;
  }

  rateLimitMap.set(ip, userData);
  return userData.count > LIMIT;
}

// Helper para escapar HTML y prevenir XSS en los correos
function escapeHtml(text) {
  if (typeof text !== "string") return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    // Identificar IP para el rate limit
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "anonymous";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Demasiadas peticiones. Por favor, intenta de nuevo en un minuto." },
        { status: 429 }
      );
    }

    await dbConnect();
    const body = await request.json();

    const {
      tipoVehiculo,
      anoVehiculo,
      marcaVehiculo,
      modeloVehiculo,
      nombre,
      telefono,
      baterias,
    } = body;

    // Validación estricta de campos obligatorios
    if (!tipoVehiculo || !anoVehiculo || !marcaVehiculo || !modeloVehiculo || !Array.isArray(baterias) || baterias.length === 0) {
      return NextResponse.json(
        { message: "Faltan campos obligatorios o el formato es incorrecto." },
        { status: 400 }
      );
    }

    // Validación de tipos y longitudes
    const sanitizedNombre = typeof nombre === "string" ? nombre.trim().slice(0, 100) : "";
    const sanitizedTelefono = typeof telefono === "string" ? telefono.trim().replace(/\D/g, "") : "";

    if (sanitizedTelefono !== "" && sanitizedTelefono.length !== 10) {
      return NextResponse.json(
        { message: "El número de teléfono debe tener exactamente 10 dígitos." },
        { status: 400 }
      );
    }

    // Sanitización de datos del vehículo
    const sTipo = typeof tipoVehiculo === "string" ? escapeHtml(tipoVehiculo.slice(0, 50)) : "";
    const sMarca = typeof marcaVehiculo === "string" ? escapeHtml(marcaVehiculo.slice(0, 100)) : "";
    const sModelo = typeof modeloVehiculo === "string" ? escapeHtml(modeloVehiculo.slice(0, 100)) : "";
    const sAno = parseInt(anoVehiculo);

    if (!sTipo || !sMarca || !sModelo || isNaN(sAno)) {
      return NextResponse.json(
        { message: "Los datos del vehículo no son válidos." },
        { status: 400 }
      );
    }

    // Sanitización de baterías
    const sanitizedBaterias = baterias.map(b => ({
      tipoBateria: escapeHtml(b.tipoBateria?.toString().slice(0, 50) || ""),
      opciones: Array.isArray(b.opciones) 
        ? b.opciones.map(opt => escapeHtml(opt?.toString().slice(0, 50) || "")) 
        : []
    }));

    // Guardamos en MongoDB
    const newFormSelection = new FormSelection({
      tipoVehiculo: sTipo,
      anoVehiculo: sAno,
      marcaVehiculo: sMarca,
      modeloVehiculo: sModelo,
      nombre: sanitizedNombre,
      telefono: sanitizedTelefono,
      baterias: sanitizedBaterias,
    });

    await newFormSelection.save();

    // Envío de correo
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_PORT) || 465,
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const bateriasHtml = sanitizedBaterias
        .map(
          (b) => `<li><strong>${b.tipoBateria}:</strong> ${b.opciones.join(", ")}</li>`
        )
        .join("");

      const eNombre = escapeHtml(sanitizedNombre);
      const eTelefono = escapeHtml(sanitizedTelefono);

      // Prevenir Inyección de Cabeceras en el Subject (quitar saltos de línea)
      const cleanSubject = (text) => text.replace(/[\r\n]/g, " ");
      const sMarcaClean = cleanSubject(sMarca);
      const sModeloClean = cleanSubject(sModelo);
      const eNombreClean = cleanSubject(eNombre);

      const contactoHtml =
        eNombre || eTelefono
          ? `
            <h3 style="color: #061684;">Datos de contacto del cliente:</h3>
            <ul style="list-style: none; padding: 0;">
              ${eNombre ? `<li><strong>Nombre:</strong> ${eNombre}</li>` : ""}
              ${
                eTelefono
                  ? `<li><strong>Teléfono:</strong> <a href="tel:${eTelefono}" style="color: #D3172E;">${eTelefono}</a></li>`
                  : ""
              }
            </ul>
          `
          : `<p style="color: #777; font-style: italic;">El cliente no dejó datos de contacto.</p>`;

      const mailOptions = {
        from: `"BEC - Nueva Búsqueda" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || "bateriaencasabec@gmail.com",
        subject: `Nueva selección de batería: ${sMarcaClean} ${sModeloClean}${eNombreClean ? ` — ${eNombreClean}` : ""}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #061684;">Nueva búsqueda de batería recibida</h2>
            <p>Se ha registrado una nueva búsqueda con los siguientes detalles:</p>

            <h3 style="color: #061684;">Datos del vehículo:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Tipo de Vehículo:</strong> ${sTipo}</li>
              <li><strong>Año:</strong> ${sAno}</li>
              <li><strong>Marca:</strong> ${sMarca}</li>
              <li><strong>Modelo:</strong> ${sModelo}</li>
            </ul>

            <h3 style="color: #D3172E;">Baterías sugeridas:</h3>
            <ul>
              ${bateriasHtml}
            </ul>

            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />

            ${contactoHtml}

            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p style="font-size: 0.8em; color: #777;">
              Este es un mensaje automático enviado desde el sistema de Batería en Casa.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Error al enviar el correo:", emailError);
      // No devolvemos error al cliente si falla el correo, ya que los datos se guardaron en DB
    }

    return NextResponse.json(
      { message: "Datos procesados con éxito." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API formSelection:", error);

    const isDev = process.env.NODE_ENV === "development";
    return NextResponse.json(
      {
        message: "Hubo un error al procesar los datos.",
        error: isDev ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}