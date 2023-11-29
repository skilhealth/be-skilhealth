const express = require("express");
const route = express.Router();
const tokenVerify = require("../middleware/auth") //taruh ini buat setiap akses endpoint perlu cek token


const {
    getUser,
    getUserKredensialById,
    addUserKredensial,
    updateUserKredensialById,
    deleteUserKredensialById,
    emailSend,
    changePassword
} = require("../controllers/user-kredensial");

route.get("/", getUser);
route.get("/:id",getUserKredensialById);
route.post("/" ,addUserKredensial);
route.put("/:id" ,updateUserKredensialById);
route.delete("/:id", deleteUserKredensialById)
route.post("/email-send", emailSend)
route.post("/change-password",tokenVerify, changePassword)

module.exports = route;

