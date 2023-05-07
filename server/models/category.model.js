import {Schema, model} from "mongoose";
import Product from "./product.model.js";




const categorySchema = new Schema({
    name: {
        type: "string",
        unique: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }]
}, {
    methods: {
        async addProduct( name )  {
            const category = await Category.find({ name })
            const products = await Product.find({ category  })
            await Category.updateOne({ name }, { $push: { products }})
        }
    }
})

const Category = model("Category", categorySchema)
export default Category

