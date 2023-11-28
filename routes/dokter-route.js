const express = require("express");
const route = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images' );
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage})


const {
    getAllDokter,
    getDokterById,
    addDokter,
    updateDokterById,
    deleteDokterById
} = require("../controllers/dokter-controller");

route.get("/", getAllDokter);
route.get("/:id",getDokterById);
route.post("/",upload.single('images') ,addDokter);
route.put("/:id" ,updateDokterById);
route.delete("/:id", deleteDokterById)

module.exports = route;

