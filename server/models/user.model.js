import { Schema, model } from "mongoose";



const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    number: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    createAt: {
        type: Date,
        default: () => Date.now()
    }
})


const User = model("User", userSchema)
export default User
