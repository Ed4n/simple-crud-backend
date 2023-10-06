import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },

    description: {
        type: String,
        trim: true,
        required: true,
    },

    price: {
        type: Number,
        trim: true, //trim es para que no se guarden espacios en blanco
        required: true,
    },
}, {
    timestamps: true, //Esto es para que se guarde la fecha de creacion y de actualizacion
    versionKey: false, //Esto es para que no se guarde la version
}
)

export const Product = model("Products", productSchema);