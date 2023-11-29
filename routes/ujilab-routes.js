const express = require("express")
const { getUjilabByuserId, addUjilab, getUjilabyId } = require("../controllers/ujilab-controllers")
const route = express.Router()

route.get("/",getUjilabByuserId)
route.get("/:id",getUjilabyId)
route.post("/add",addUjilab)

module.exports = route