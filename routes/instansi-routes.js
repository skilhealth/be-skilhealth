const express = require("express")
const route = express.Router();

const {
    getAllHospitals,
    getHospitalsById,
    createHospitals,
    updateHospitals,
    deleteHospitals,
    searchHospitalByAlamat,
    searchHospitalByName,
    searchHospitalByJarak,
    searchHospitalByArea
} = require("../controllers/instansi-controller");

route.get("/" ,getAllHospitals);
route.get("/:id",getHospitalsById);
route.post("/" ,createHospitals);
route.put("/" ,updateHospitals);
route.delete("/" ,deleteHospitals);
route.post("/:alamat" ,searchHospitalByAlamat);
route.post("/:name" ,searchHospitalByName);
route.post("/:jarak" ,searchHospitalByJarak);
route.post("/:area" ,searchHospitalByArea);

module.exports = route;



