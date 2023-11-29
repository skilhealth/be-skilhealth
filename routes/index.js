const express = require("express")
const route = express.Router()
const doktorRoutes = require("./doctor-routes")
const bookingRoutes = require("./booking-routes")
const ujilabRoutes = require("./ujilab-routes")
const forumRoute = require('./forum-route')
const instansiRoute = require('./instansi-routes');
const userRoute = require('./user-routes');
const userKredensial = require('./user-kredensial-route');
const authRoute = require('./auth.route');
const dokterRoute = require('./dokter-route')

const tokenVerify = require("../middleware/auth")

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
route.use("/user", userRoute)
route.use("/auth", authRoute)
route.use("/users", userKredensial)
route.use("/dokter", dokterRoute)

module.exports = route