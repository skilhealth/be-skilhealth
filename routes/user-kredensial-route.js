const express = require("express");
const route = express.Router();

const {
    getUser,
    getUserKredensialById,
    addUserKredensial,
    updateUserKredensialById,
    deleteUserKredensialById
} = require("../controllers/user-kredensial");

route.get("/", getUser);
route.get("/:id",getUserKredensialById);
route.post("/" ,addUserKredensial);
route.put("/:id" ,updateUserKredensialById);
route.delete("/:id", deleteUserKredensialById)

module.exports = route;

