const express = require("express")
const { searchDoctor, addDoctor, DokterById } = require("../controllers/doctor-controller")
const route = express.Router()

route.get("/",(req,res)=>{
    res.json({
        message:"ada di endpoint doctors"
    })
})
route.post("/search",searchDoctor)
route.post("/add",addDoctor)
route.get("/:id",DokterById)
module.exports = route