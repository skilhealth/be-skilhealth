const express = require("express")
const route = express.Router();

const {
    getAllInstansi,
    getInstansiById,
    createInstansi,
    updateInstansi,
    deleteInstansi,
    searchInstansiByAlamat,
    searchInstansiByName,
    searchInstansiByJarak,
    searchInstansiByArea
} = require("../controllers/instansi-controller");

route.get("/" ,getAllInstansi);
route.get("/:id",getInstansiById);
route.post("/" ,createInstansi);
route.put("/" ,updateInstansi);
route.delete("/" ,deleteInstansi);
route.post("/:alamat" ,searchInstansiByAlamat);
route.post("/:name" ,searchInstansiByName);
route.post("/:jarak" ,searchInstansiByJarak);
route.post("/:area" ,searchInstansiByArea);

module.exports = route;



