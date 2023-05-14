import {ObjectId} from "mongodb";
import { db } from "../middleware/mongodb.middleware.js";


export const createCart = async(data) => {
    const {
        products,
        userID,
    } = data
    let doc = {
        total: 0,
        totalQuantity: 0,
    }
    try {
        console.log(
        await db.collection("carts").insertOne(doc)
        );
        products.map(async product => {
            console.log(product);
            const doc = {
                userID: new ObjectId(userID),
                products: {
                    _id: new ObjectId(product._id),
                    quantity: product.quantity
                },
                cart: new ObjectId(cart._id)
            }
            await db.collection("user_product_carts").insertOne(doc)
            const a = await db.collection("products").findOne({ _id: new ObjectId(product._id) })
            total += a.price
            totalQuantity += product.quantity
        } )
        const test = await db.collection("carts").updateOne({ _id: new ObjectId(data._id) }, { $set: { total, totalQuantity } }) 
        console.log(cart);
    } catch (error) {
        console.log(error.message);
    }
}

