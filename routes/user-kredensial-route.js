const express = require("express");
const route = express.Router();

const {
    getAllUserKredensial,
    getUserKredensialById,
    addUserKredensial,
    updateUserKredensialById,
    deleteUserKredensial,
    deleteUserKredensialById
} = require("../controllers/user-kredensial");

route.get("/", getAllUserKredensial);
route.get("/:id",getUserKredensialById);
route.post("/" ,addUserKredensial);
route.put("/:id" ,updateUserKredensialById);
route.delete("/", deleteUserKredensial)
route.delete("/:id", deleteUserKredensialById)

module.exports = route;

