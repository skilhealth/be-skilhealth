const express = require("express");
const route = express.Router();


const {
    getAllUser,
    getUserById,
    addUser,
    updateUserById,
    deleteUser,
    deleteUserById
} = require("../controllers/user-controllers");

route.get("/", getAllUser);
route.get("/:id",getUserById);
route.post("/" ,addUser);
route.put("/:id" ,updateUserById);
route.delete("/", deleteUser)
route.delete("/:id", deleteUserById)

module.exports = route;

