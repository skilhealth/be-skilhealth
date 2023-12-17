const express = require("express");
const { getAllAmbulance, getAmbulanceById, getAmbulanceByInstansi } = require("../controllers/ambulance-controllers");
const route = express.Router();


route.get("/",getAllAmbulance);
route.get("/rumahsakit", getAmbulanceByInstansi);
route.get("/:id", getAmbulanceById);


module.exports = route;