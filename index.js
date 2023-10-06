
// Dot env es para que no se suban las variables de entorno a github
import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
// Cors es para que el front pueda hacer peticiones al back (La API esta bloqueada por defecto)
import cors from "cors";
// Mongoose es para conectarse a la base de datos
import mongoose from "mongoose";

//Products routes
import productsRoutes from "./src/routes/products.route.js";

mongoose.set('strictQuery', true);

//Instancia de Express
const app = express();

const whiteList = [
    process.env.ORIGIN1,
    process.env.ORIGIN2,
    process.env.ORIGIN3,
];

app.use(
    cors({
        origin: function (origin, callback) {
            console.log("Here =>", origin);
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                "CORS origin ERROR: " + origin + " Unauthorize!"
            );
        },
        credentials: true,
        exposedHeaders: ['set-cookie']
    })
);

//Se declara para que se pueda utilizar json en el body de las peticiones.
app.use(express.json());
//Esta sintaxis es para definir que ademas de json, tambien se aceptan formularios
app.use(express.urlencoded({
    extended: true,
}));


//Routes (Se define la ruta y se le asigna el archivo que la va a manejar)
app.use("/api/v1/products", productsRoutes);


// Sintaxis para levantar el servidor.  (Este lo define el servidro que se ha contratado || EL otro es el puerto local)
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log("---------- Listening http://localhost:" + PORT));
