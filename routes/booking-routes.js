const express = require("express")
const { addBooking, getBookingByUserId, getBookingById } = require("../controllers/booking-controllers")
const route = express.Router()

route.post("/",addBooking)
route.get("/",getBookingByUserId)
route.get("/:id",getBookingById)

module.exports = route