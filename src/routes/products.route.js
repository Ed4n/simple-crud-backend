import { Router } from "express";
import { create, deleteProduct, findAll, update } from "../controllers/products.controller.js";

const router = Router();

router.get("/", findAll);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", deleteProduct);



export default router;
