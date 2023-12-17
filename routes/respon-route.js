const express = require("express")
const { getAllRespon, getResponById, getResponByInstansi, createRequest, giveRespon } = require("../controllers/respon-controllers")
const route = express.Router()

route.get("/",getAllRespon)
route.get("/instansi",getResponByInstansi)
route.get("/:id",getResponById)
route.post("/",createRequest)
route.put("/",giveRespon)

module.exports = route