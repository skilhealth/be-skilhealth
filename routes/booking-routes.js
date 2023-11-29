const express = require("express")
const { addBooking, getBookingByUserId, getBookingById, editBooking, refundBooking, getBookingByDokterId } = require("../controllers/booking-controllers")
const route = express.Router()

route.post("/",addBooking) //nambah booking yang ada di halaman detailpage
route.get("/",getBookingByUserId) // buat nampilin list booking yang dibuat pasien dihalaman list-booking dan diurutkan berdasarkan waktu terdekat dan status blum mulai
route.get("/doctor",getBookingByDokterId) // buat nampilin list booking yang dibuat pasien dihalaman list-booking dan diurutkan berdasarkan waktu terdekat dan status blum mulai
route.get("/:id",getBookingById) // buat nampilin salah satu detail booking yang dipesan pengguna
route.patch("/:id/edit",editBooking)  // buat edit janji temu ad di halaman editbooking
route.delete("/:id/edit",refundBooking) // buat delet booking ada di halaman refund booking


module.exports = route