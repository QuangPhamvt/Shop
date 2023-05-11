
import { Router } from "express"
import { data } from "../test/category.test.js"
import { categoryTitleProducts } from "../models/category.model.js"


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
                data: await categoryTitleProducts.toArray()
            })
        } catch (error) {
            res.json({
                message: error.message,
            })
        }
    })


export default categoryRouter
