import Product from "../models/product.model.js"

const productController = {
    //get all products
    getAllProducts: async (req, res) => {
        try {
            const products = await Product
                .find()
                .populate('category', { products:0})

            res
                .status(200)
                .json({
                    data: products,
                    success: true,
                    message: 'Yeu Thư nhiều nè',
                })

        } catch (error) {
            res.json({message: error.message})
        }
    },
    getSingleProduct: async (req, res) => {
        const { slug } = req.params
        try {
            const product = await Product.findOne({ slug })

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
        const { limit, page } = req.query
        if (!limit || !page)
            next()
        else
            try {
                const products = 
                    await Product
                        .find()
                        .sort({ _id: 1 })
                        .limit(limit)
                        .skip(limit*(page - 1))
                        .populate('category', { products: 0 })


                const totalPage = Math.ceil( await Product.count()/limit )
                const metaData = {
                    currentPage: page,
                    totalProducts: await Product.count(),
                    nextPage: (page + 1) <= totalPage  ? parseInt(page) + 1 : null,
                    totalPage,
                }


                res.json({
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



export default productController
