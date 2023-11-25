const express = require("express")
const route = express.Router();
const multer = require('multer');
const app = express();
const path = require("path");

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        cb(null, path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
app.use(multer({storage: fileStorage, fileFilter: fileFilter}). single('image'))


const {
    getInstansi,
    getInstansiById,
    createInstansi,
    updateInstansi,
    deleteInstansi,
    searchInstansiByAlamat,
    searchInstansiByName,
    searchInstansiByJarak,
    searchInstansiByArea
} = require("../controllers/instansi-controller");

route.get("/" ,getInstansi);
route.get("/:id",getInstansiById);
route.post("/" ,createInstansi);
route.put("/:id" ,updateInstansi);
route.delete("/:id" ,deleteInstansi);
route.get("/:alamat" ,searchInstansiByAlamat);
route.get("/:name" ,searchInstansiByName);
route.get("/:jarak" ,searchInstansiByJarak);
route.get("/:area" ,searchInstansiByArea);

module.exports = route;



