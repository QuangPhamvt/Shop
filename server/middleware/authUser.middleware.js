import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()




const authUserMiddleware = async ( req, res, next ) => {
    const  authToken  = req.headers["authorization"] ? req.headers["authorization"].split(" ")[1] : null
    try {
        if(!authToken)
            return res.status(401).json({ success: false, message: "NOt authentication" })
        const isVerify = jwt.verify(authToken, process.env.JWT_SECRETKEY)
        req.userId = isVerify
        next()
    } catch (error) {
        res.json({ message: error.message })
    }
}

export default authUserMiddleware


