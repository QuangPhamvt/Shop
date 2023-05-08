import  Express  from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()
import mongoDB from "./middleware/mongodb.middleware.js"
import router from "./routes/index.js"


const app = Express()
//morgan
app.use(morgan('tiny'))
//cookieParser
app.use(cookieParser())
//bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//cors
app.use(cors())
//connect mongoDB
mongoDB()
//PORT
const PORT = process.env.PORT || 5000
//router
app.use("/api/v1", router)
app.get("/", (req, res) => {
    console.log(req.headers);
})





app.listen(5000, '127.0.0.1',() => {
    console.log(`Server started on port ${PORT}`);
})
