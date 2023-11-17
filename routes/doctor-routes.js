const express = require("express")
const { searchDoctor, addDoctor } = require("../controllers/doctor-controller")
const route = express.Router()

route.get("/",(req,res)=>{
    res.json({
        message:"ada di endpoint doctors"
    })
})
route.post("/search",searchDoctor)
route.post("/add",addDoctor)
module.exports = route