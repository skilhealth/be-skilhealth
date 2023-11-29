const express = require("express")
const { getUjilabByuserId, addUjilab, getUjilabyId, editUjilab } = require("../controllers/ujilab-controllers")
const route = express.Router()

route.get("/",getUjilabByuserId)
route.get("/:id",getUjilabyId)
route.post("/add",addUjilab)
route.post("/:id/edit",editUjilab)

module.exports = route