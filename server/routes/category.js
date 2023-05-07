import Category from "../models/category.model.js"
import Product from "../models/product.model.js"
import { Router } from "express"
import { data } from "../test/category.test.js"


const categoryRouter = Router()

categoryRouter
    .get("/", async (req, res) => {
        try {
            await Category.create(data)
            res.json({
                data,
            })
        } catch (error) {
            res.json({
                message: error.message
            })
        }
    })
    .get("/test", async (req, res) => {
        try {
            res.json({
                data: await Category.find().populate("products", { title: 1 })
            })
        } catch (error) {
            res.json({
                message: error.message,
            })
        }
    })


export default categoryRouter
