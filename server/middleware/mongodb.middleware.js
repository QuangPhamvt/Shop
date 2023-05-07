import mongoose from "mongoose";
import * as dotenv from "dotenv"
dotenv.config()



const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.mongoDB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        })
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}


export default mongoDB
