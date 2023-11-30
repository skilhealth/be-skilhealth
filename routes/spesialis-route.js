const express = require("express")
const { getAllSpesialis } = require("../controllers/spesialis-controller")
const route = express.Router()

route.get('/', getAllSpesialis)

module.exports = route