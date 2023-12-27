import express from "express"
import productRouter from "./routes/products.Route.js";
import userRouter from "./routes/users.Route.js"

// import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express()
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

// use external file
app.use(express.static("../client"))

// third party application permission
//app.use(cors())
// middleware for define the json formate
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/", (req, res) => {
    res.status(200).send("<h1>Welcome to the product server</h1>")
})

// middleware to define the product router with application
app.use("/api/v1/products", productRouter)
app.use("/api/v1/users", userRouter);

mongoose
    .connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening in the Port: ${PORT}`)
        })
    })
    .catch((error) => console.log(error))
