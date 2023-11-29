const express = require("express")
const route = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage})


const {
    getInstansi,
    getInstansiById,
    getInstansiByNama,
    getInstansiByAlamat,
    getInstansiByArea,
    createInstansi,
    updateInstansi,
    deleteInstansiById
} = require("../controllers/instansi-controller");

route.get("/" ,getInstansi);

route.get("/:id",getInstansiById);//  Ini untuk development nanti bakal di hapus

route.get("/search-by-name" ,getInstansiByNama)
route.get("/search-by-alamat" ,getInstansiByAlamat)
route.get("/search-by-area" ,getInstansiByArea)
route.post("/",upload.single('image') ,createInstansi);

route.put("/:id" ,updateInstansi); // Ini untuk development nanti bakal di hapus
route.delete("/:id" ,deleteInstansiById); // Ini untuk development nanti bakal di hapus

module.exports = route;



