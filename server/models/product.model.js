import {Schema, model} from "mongoose";



const productSchema = new Schema({
    title:{
        type: String,
        unique: true,
    },
    description: String,
    price: {
        type: Number,
        default: 0,
    },
    discountPercentage: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
    },
    brand: String,
    category: {
        type:  Schema.Types.ObjectId ,
        ref: 'Category',
    },
    thumbnail: String,
    image: [String],
    createAt: {
        type: Date,
        default: () => Date.now()
    },

})

const Product = model("Product", productSchema)
export default Product
