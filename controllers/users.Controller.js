import USERS from "../models/users.Schema.js"
// get all user
export const getAllUser = async (req, res) => {
    try {
        const allUsers = await USERS.find()
        res.status(200).json({ success: true, data: allUsers })
    } catch (error) {
        res.status(400).json({ success: false, message: `Something went wrong ! Error is : ${error}` })
    }
}

// get dingle user
export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    const singleUser = await USERS.findById(id)

    if (!singleUser) {
        res.status(200).send({ success: true, message: `User not fount in the id : ${id}` })
    } else {
        res.status(200).json({ success: true, data: singleUser })
    }
}

// create users
export const createUser = async (req, res) => {
    new USERS(req.body)
        .save()
        .then((user) => {
            return res.status(201).json({
                success: true, message: `Your Product successfully created wit the id : ${user._id}`
            })
        })
        .catch((error) => {
            res.status(400).json({
                success: false, message: `Something went wrong ! error is : ${error}`
            })
        })
}

// update existing users
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const findUser = await USERS.findById(id);
    if (!findUser) {
        res
            .status(200)
            .json({ success: true, message: `User with the id: ${id} not found` });
    } else {
        await USERS.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            success: true,
            message: `Product with the id: ${id} updated successfully`,
        });
    }
}

// delete user
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const findUser = await USERS.findById(id)

    if (!findUser) {
        res.status(200).json({ success: true, message: `User with the id: ${id} is not found` })
    } else {
        await USERS.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "User deleted successfully!" })
    }
}