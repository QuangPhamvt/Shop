import { db} from "../middleware/mongodb.middleware.js"



export const categoryTitleProducts = db
    .collection("categories")
    .aggregate([
        {
            $lookup: 
            {
                from: "products",
                localField: "products",
                foreignField: "_id",
                as: "products"
            }
        }
    ])
    .project({name: 1, "products.title": 1, "products._id": 1 })
