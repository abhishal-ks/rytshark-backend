import { asyncHandler } from "../utils/asynHandler.js";


const registerUser = asyncHandler( async (req, res) => {
    res.status(500).json({
        message: "shark aur code"
    })
} )


export {
    registerUser,
}