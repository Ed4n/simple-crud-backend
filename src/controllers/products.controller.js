import { Products } from "../models/products.model.js";


export const findAll = async (req, res) => {
    try {
        let products = await Products.find({});
        return res.status(200).json({ products });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const create = async (req, res) => {
    try {
        let product = new Products(req.body);
        await product.save();
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const update = async (req, res) => {
    try {
        const data = req.body
        let product = await Products.findById(req.params.id)
        if (!product) return res.status(404).json({ error: "Product not found" })
        let udpateProduct = await Products.findByIdAndUpdate({ _id: req.params.id }, data, { new: true })
        return res.status(200).json({ udpateProduct });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        let product = await Products.findById(req.params.id)
        if (!product) return res.status(404).json({ error: "Product not found" })
        await Products.findOneAndDelete({ _id: req.params.id })
        return res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}




