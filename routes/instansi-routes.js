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
    createInstansi,
    updateInstansi,
    deleteInstansiById,
    searchInstansiByAlamat,
    searchInstansiByName,
    searchInstansiByJarak,
    searchInstansiByArea
} = require("../controllers/instansi-controller");

route.get("/" ,getInstansi);
route.get("/:id",getInstansiById);
route.post("/",upload.single('image') ,createInstansi);
route.put("/:id" ,updateInstansi);
route.delete("/:id" ,deleteInstansiById);
route.get("/:alamat" ,searchInstansiByAlamat);
route.get("/:name" ,searchInstansiByName);
route.get("/:jarak" ,searchInstansiByJarak);
route.get("/:area" ,searchInstansiByArea);

module.exports = route;



