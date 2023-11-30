const express = require("express")
const { searchDoctor, addDoctor, DokterById, GetAllDoctor } = require("../controllers/doctor-controller")
const route = express.Router()

route.post("/search",searchDoctor)//Pencarian Dokter Mobile
route.post("/add",addDoctor) //gimik buat nambahin data nanti diapus lagi
route.get("/:id",DokterById) // buat detail dotor page
route.get("/",GetAllDoctor) // buat nampilin semua dokter
module.exports = route