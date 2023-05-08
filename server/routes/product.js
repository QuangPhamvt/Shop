import Product from "../models/product.model.js"
import Category from "../models/category.model.js"
import { Router } from "express"
import productController from "../controllers/product.controller.js"


const {
    getAllProducts,
    getSingleProduct,
    getPaginationResults,
} = productController
const productRouter = Router()
productRouter
    //get all products
    //get pagination result
    .get("/", getPaginationResults, getAllProducts)
    //get single products
    .get("/:id", getSingleProduct)
    //get Page and limit


export default productRouter

