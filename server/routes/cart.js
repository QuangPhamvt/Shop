import { Router } from "express";
import {createCart} from "../models/cart.model.js";


const cartRouter = Router()


cartRouter.post("/", async (req, res) => {
    const { 
        userID,
        products,
    } = req.body
    try {
        await createCart({userID,products,})
        res.json({
            message:'oke'
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

export default cartRouter
