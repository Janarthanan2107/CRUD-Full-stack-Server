import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        minLength: [5, "Title must be atleast 5 characters"]
    },
    description: {
        type: String,
        trim: true,
        required: true,
        minLength: [5, "Description must be atleast 5 characters"]
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    category: {
        type: String,
        trim: true,
        required: true,
        minLength: [5, "Category must be atleast 5 characters"]
    },
    image: {
        type: String,
        trim: true,
        required: true,
    }
}, {
    timestamps: true,
})

// assign as a constructor in a model mongoose method 
// assign a name and schema as a parameter
const Products = mongoose.model("Products", productsSchema)

export default Products;