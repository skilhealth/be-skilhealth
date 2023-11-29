const express = require("express")
const route = express.Router()
const doktorRoutes = require("./doctor-routes")
const bookingRoutes = require("./booking-routes")
const ujilabRoutes = require("./ujilab-routes")
const forumRoute = require('./forum-route')
const instansiRoute = require('./instansi-routes');
const { Instansi, Spesialis, Jadwal } = require("../models")
const { DATE } = require("sequelize")

route.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})


route.use("/forum", forumRoute)
route.use("/doctors", doktorRoutes)
route.use("/bookings", bookingRoutes)
route.use("/ujilab", ujilabRoutes)
route.use("/ujilab", ujilabRoutes)
route.use("/instansi", instansiRoute)

module.exports = route