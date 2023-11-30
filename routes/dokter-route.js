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
    getAllDokter,
    getDokterById,
    addDokter,
    updateDokterById,
    deleteDokterById
} = require("../controllers/dokter-controller");

route.get("/", getAllDokter); // untuk keperluan development bakal dihapus

route.get("/:id",getDokterById);
route.post("/",upload.single('images') ,addDokter);
route.put("/:id" ,upload.single('images'),updateDokterById);

route.delete("/:id", deleteDokterById) // untuk keperluan development bakal dihapus

module.exports = route;

