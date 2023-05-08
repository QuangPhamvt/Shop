import {Router} from "express";
import userController from "../controllers/user.controller.js";
import authUserMiddleware from "../middleware/authUser.middleware.js"
import User from "../models/user.model.js";
import { data } from "../test/user.test.js";

const userRouter = Router()
const {
    getUser,
    loginUser,
    registerUser,
} = userController





userRouter
    .get("/", authUserMiddleware,(req, res)=>{res.json({message: "yeuThu"})})
    .post("/register", registerUser)
    .post("/login", loginUser)
    .get("/test", async( req, res ) => {
        try {
            await User.create(data)
            res.json(data)
        } catch (error) {
            res.json({
                message: error.message
            })
        }

    })




export default userRouter

