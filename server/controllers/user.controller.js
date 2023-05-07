import argon2 from 'argon2'
import jwt  from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
import User from '../models/user.model.js'
import cookieParser from 'cookie-parser'


const userController = {
    getUser: () => {

    },
    loginUser: async(req, res) => {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email })
            if(!user)
                res
                    .status(400)
                    .json({
                        success: false,
                        message: "Not exist User or correct password"
                    })
            else if(! await argon2.verify(user.password, password))
                res
                    .status(400)
                    .json({
                        success: false,
                        message: "Not exist User or correct password"
                    })
            else{
                const authToken = jwt.sign(user._id.toJSON(), process.env.JWT_SECRETKEY)
                res.cookie('authToken', authToken, {
                    maxAge: 360*24*60*60*100,
                    httpOnly: true,
                })
                res.status(200).json({
                    success: true,
                    message: 'Love Thu forever'
                })
            }
                
        } catch (error) {
            
        }
    },
    registerUser: async (req, res) => {
        const {
            name,
            email,
            password,
            number,
        } = req.body
        try {

            if( await User.findOne({ $or: [{email}, {number}] }))
                res.status(400).json({
                    success: false,
                    message: 'Exist email or number'
                })
            else{
                const user = await User.create({
                    name,
                    email,
                    password: await argon2.hash(password),
                    number,
                })
                const authToken = jwt.sign(user._id.toJSON(), process.env.JWT_SECRETKEY)
                res.cookie('authToken', authToken, {
                    maxAge: 360*24*60*60*100,
                    httpOnly: true,
                })
                res.status(200).json({
                    success: true,
                    message: 'Love Thu forever'
                })
            }
        } catch (error) {
            res.json({ success: false, message: error.message })
        }
    }
}


export default userController
