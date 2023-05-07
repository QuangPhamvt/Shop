import {Router} from "express";
import userController from "../controllers/user.controller.js";
import authUserMiddleware from "../middleware/authUser.middleware.js"

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



export default userRouter

