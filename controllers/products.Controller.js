import { products } from "../data.js"
import Products from "../models/products.Schema.js"

// get all products
export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Products.find()
        res.status(200).json({ success: true, data: allProducts })
    } catch (error) {
        res.status(400).json({ success: false, message: `Something went wrong ! Error is : ${error}` })
    }
}

// get single product
export const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    const singleProduct = await Products.findById(id)

    if (!singleProduct) {
        res.status(200).send({ success: true, message: `Product not fount in the id : ${id}` })
    } else {
        res.status(200).json({ success: true, data: singleProduct })
    }
}

// create new product
export const createProduct = (req, res) => {
    // body is the inbuilt keyword for req
    // console.log(req.body)
    // const id = Math.random().toString(16).slice(2)
    // const newProduct = {
    //     id,
    //     ...req.body
    // }
    // console.log(newProduct)

    new Products(req.body)
        .save()
        .then((product) => {
            return res.status(201).json({
                success: true, message: `Your product successfully created wit the id : ${product._id}`
            })
        })
        .catch((error) => {
            res.status(400).json({
                success: false, message: `Something went wrong ! error is : ${error}`
            })
        })
}

// update existing product
export const updateProduct = async (req, res) => {
    // const { id } = req.params;
    // const findProduct = products.find((product) => product.id === Number(id))

    // if (!findProduct) {
    //     res.status(200).send({ success: true, message: `Product not fount in the id : ${id}` })
    // } else {
    //     const newProduct = {
    //         id: findProduct.id,
    //         ...req.body,
    //     }

    //     const updatedProducts = products.map((product) => {
    //         if (product.id === Number(id)) {
    //             return {
    //                 id: product.id,
    //                 title: newProduct.title,
    //                 description: newProduct.description,
    //                 price: newProduct.price,
    //                 category: newProduct.category,
    //                 image: newProduct.image
    //             }
    //         } else {
    //             return product;
    //         }
    //     })
    //     res.status(200).json({ success: true, message: `Product Updated Successfully with the id ${id}!`, data: updatedProducts })
    // }

    const { id } = req.params;
    const findProduct = await Products.findById(id);
    if (!findProduct) {
        res
            .status(200)
            .json({ success: true, message: `Product with the id: ${id} not found` });
    } else {
        await Products.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            success: true,
            message: `Product with the id: ${id} updated successfully`,
        });
    }
}

// delete product
export const deleteProduct = async (req, res) => {
    // const { id } = req.params;
    // const findProduct = products.find((product) => product.id === Number(id))

    // if (!findProduct) {
    //     res.status(200).json({ success: true, message: `Product with the id: ${id} is not found` })
    // } else {
    //     const updatedProducts = products.filter((product) => product.id !== Number(id))
    //     res.status(200).json({ success: true, message: "Product deleted successfully!", data: updatedProducts })
    // }

    try {
        const { id } = req.params;
        const findProduct = await Products.findById(id)
        // console.log(findProduct)

        if (!findProduct) {
            res.status(200).json({ success: true, message: `Product with the id: ${id} is not found` })
        } else {
            await Products.findByIdAndDelete(id)
            res.status(200).json({ success: true, message: "Product deleted successfully!" })
        }


    } catch (error) {
        res.status(400).json({ success: false, message: `Something went wrong ! Error is : ${error}` })
    }
}