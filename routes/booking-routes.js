const express = require("express")
const { addBooking } = require("../controllers/booking-controllers")
const route = express.Router()

route.post("/",addBooking)

module.exports = route