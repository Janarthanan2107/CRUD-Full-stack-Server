import express from "express"
import { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } from "../controllers/products.Controller.js";

const router = express.Router()

// get all products
// http://localhost:5000/api/v1/products
router.get("/", getAllProducts)

// get single products
// http://localhost:5000/api/v1/products/:id
router.get("/:id", getSingleProduct)

// create product
// http://localhost:5000/api/v1/products/create
router.post("/create", createProduct)

// update Product
// http://localhost:5000/api/v1/products/:id
router.put("/:id", updateProduct)

// deleteProduct
// http://localhost:5000/api/v1/products/:id
router.delete("/:id", deleteProduct)


export default router;