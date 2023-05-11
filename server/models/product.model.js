import {ObjectId} from "mongodb"
import { db } from "../middleware/mongodb.middleware.js"

export const allProductModel = db
    .collection("products")
    .aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category",
            }
        }
    ])
    .project({ "category.products": 0 })


export const singleProductModel = _id => db
    .collection("products")
    .aggregate([
        {$match: { _id: new ObjectId(_id)}},
        {
            $lookup: 
            {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category",
            }
        }
    ])
    .project({ "category.products": 0 })
    

export const paginationResulfModel = ( limit, page ) => db
    .collection("products")
    .aggregate([
        { $skip: limit*(page-1) },
        { $limit: limit },
        {
            $lookup:
            {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category",
            }
        }
    ])
    .project({ "category.products": 0 })


