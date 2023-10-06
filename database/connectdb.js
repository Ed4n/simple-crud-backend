import mongoose from "mongoose";

try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.URI_MONGO);
    console.log("---------- Conected to DB successfully");
} catch (error) {
    console.log("Error de conexión a mongodb:" + error);
}