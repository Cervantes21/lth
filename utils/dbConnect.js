import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (!MONGO_URI) {
    const devMessage = "Por favor, define la variable de entorno MONGO_URI en tu archivo .env.local";
    const prodMessage = "Error de configuración del servidor.";
    throw new Error(process.env.NODE_ENV === 'development' ? devMessage : prodMessage);
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        dbName: "myDatabase",
      })
      .then((mongoose) => {
        if (process.env.NODE_ENV === 'development') {
          console.log("Conexión a MongoDB establecida");
        }
        return mongoose;
      })
      .catch((error) => {
        console.error("Error al conectar a MongoDB"); // No logueamos el error completo al cliente indirectamente
        throw new Error("Error interno del servidor");
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    throw new Error("Error en la conexión a MongoDB");
  }
}

export default dbConnect;
