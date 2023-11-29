const express = require("express");
const route = express.Router();
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images' );
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
    resave: true
});

const upload = multer({storage: storage})


const {
    getAllUser,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById
} = require("../controllers/user-controllers");

route.get("/", getAllUser); // untuk keperluan development bakal dihapus

route.get("/:id",getUserById);
route.post("/",upload.single('images') ,addUser);
route.put("/:id" ,upload.single('images'),updateUserById);

route.delete("/:id", deleteUserById) // untuk keperluan development bakal dihapus

module.exports = route;

