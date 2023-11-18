const express = require("express")
const { addBooking, getBookingByUserId } = require("../controllers/booking-controllers")
const route = express.Router()

route.post("/",addBooking)
route.get("/",getBookingByUserId)

module.exports = route