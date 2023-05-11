import { db } from "../middleware/mongodb.middleware.js"
import {
    allProductModel,
    singleProductModel,
    paginationResulfModel,
} from "../models/product.model.js"





const productController = {
    //get all products
    getAllProducts: async (req, res) => {
        try {
            const data = await allProductModel.toArray()
            res.json({
                data
            })
        } catch (error) {
            res.json({message: error.message})
        }
    },
    //get all single product
    getSingleProduct: async (req, res) => {
        const { id } = req.params
        try {
            const data = await singleProductModel(id).toArray()
            res.json({
                success: true,
                data,
                message: "Yeu Thu NHieu"
            })
        } catch (error) {
            res.json({ message: error.message })
        }
    },
    // Page and Limit
    getPaginationResults: async (req, res, next) => {
        let { limit, page } = req.query
        limit = parseInt(limit)
        page = parseInt(page)
        if (!limit || !page)
            next()
        else{
            try {
                const products = await paginationResulfModel(limit, page).toArray()
                const totalProducts = await db.collection("products").countDocuments()
                const totalPage = Math.ceil( totalProducts/limit )
                const metaData = {
                    currentPage: page,
                    totalProducts,
                    nextPage: page + 1 <= totalPage ? page + 1 : null,
                    totalPage,
                }
                res.status(200).json({
                    metaData,
                    data: products, 
                })
            } catch (error) {
                res.json({
                    success: false,
                    message: error.message,
                })
            }
        }
    }
}



export default productController
