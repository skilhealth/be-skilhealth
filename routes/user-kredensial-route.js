const express = require("express");
const route = express.Router();

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
route.post("/change-password", changePassword)

module.exports = route;

