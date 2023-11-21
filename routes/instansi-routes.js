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
route.get("/:alamat" ,searchInstansiByAlamat);
route.get("/:name" ,searchInstansiByName);
route.get("/:jarak" ,searchInstansiByJarak);
route.get("/:area" ,searchInstansiByArea);

module.exports = route;



