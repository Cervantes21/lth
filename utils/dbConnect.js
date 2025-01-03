import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Por favor, define la variable de entorno MONGO_URI en tu archivo .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        dbName: "myDatabase",
      })
      .then((mongoose) => {
        console.log("Conexión a MongoDB establecida");
        return mongoose;
      })
      .catch((error) => {
        console.error("Error al conectar a MongoDB:", error);
        throw error;
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
