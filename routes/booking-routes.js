const express = require("express")
const { addBooking, getBookingByUserId, getBookingById, editBooking, refundBooking } = require("../controllers/booking-controllers")
const route = express.Router()

route.post("/",addBooking)
route.get("/",getBookingByUserId)
route.get("/:id",getBookingById)
route.patch("/:id/edit",editBooking)
route.delete("/:id/edit",refundBooking)


module.exports = route