import express, { Request, Response } from "express";
const router = express.Router();
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from "../controllers/product-controller";

// Create new product to database
router.post("/create", createProduct);

// Get all products
router.get("/all", getAllProducts);

// Get product by id
router.get("/product/:id", getProductById);

// Update product by id
router.patch("/product/:id", updateProductById);

// Update product by id
router.delete("/product/:id", deleteProductById);

export { router };
