import Product from "../models/product.model.js"
import { db } from "../middleware/mongodb.middleware.js"






const productController = {
    //get all products
    getAllProducts: async (req, res) => {
        const products = db
            .collection("products")
            .aggregate([
                {$lookup:{
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category",
                }}
            ])
            .project({ "category.products": 0 })
        try {
            const data = await products.toArray()
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
            const product = await Product.findOne({ _id: id }).populate('category', {name: 1})
            if(!product)
                res
                    .status(404)
                    .json({
                        data: product,
                        success: false,
                        message: 'Yêu chị THư nhưng không tôn tại sản phẩm'
                    })
            else
                res
                    .status(200)
                    .json({
                        data: product,
                        success: true,
                        message: "Yêu chị Nào đó nhiều",
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
                const products = await db
                    .collection("products")
                    .aggregate([
                        { $skip: limit*(page-1) },
                        {
                            $lookup: {
                                from: "categories",
                                localField: "category",
                                foreignField: "_id",
                                as:"category",
                            }
                        },
                        {$limit: limit},
                    ])
                    .project({ "category.products": 0 })
                    .toArray()
                const totalProducts = await db.collection("products").countDocuments()
                const totalPage = Math.ceil( totalProducts/limit )
                const metaData = {
                    currentPage: page,
                    totalProducts,
                    nextPage: page + 1 <= totalPage  ? page + 1 : null,
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
