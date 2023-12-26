import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        minLength: [7, "Username must be atleast 5 characters"]
    },
    email: {
        type: String,
        trim: true,
        required: true,
        minLength: [5, "Email must be Create formate !"]
    },
    phoneNumber: {
        type: Number,
        trim: true,
        required: true,
        minLength: [10, "Phone Number must be atleast 10 digits"]
    }
})

const USERS = mongoose.model("Users", userSchema)

export default USERS;