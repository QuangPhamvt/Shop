import Product from "../models/product.model.js"
import Category from "../models/category.model.js"
import { Router } from "express"
import productController from "../controllers/product.controller.js"
import { data } from "../test/product.test.js"


const {
    getAllProducts,
    getSingleProduct,
    getPaginationResults,
} = productController
const productRouter = Router()
// const test = data()
// let abc = []
// test.then(state => abc = state)
productRouter
    //get all products
    .get("/test", async(req, res) => {
        try {
            res.json({
                success: true,
            })
        } catch (error) {
            res.json({
                message: error.message
            })
        }
    })
    //get pagination result
    .get("/", getPaginationResults, getAllProducts)
    //get single products
    .get("/:slug", getSingleProduct)
    //get Page and limit


export default productRouter

