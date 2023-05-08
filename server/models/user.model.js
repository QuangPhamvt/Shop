import { Schema, model } from "mongoose";



const addressSchema = new Schema({
    address: String,
    city: String,
})
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    age: Number,
    gender: {
        type: String,
        enum: ['male','female']
    },
    createAt: {
        type: Date,
        default: () => Date.now()
    },
    image: String,
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }
})


export const Address = model("Address", addressSchema)
const User = model("User", userSchema)
export default User
