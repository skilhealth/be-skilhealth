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
const spesialisRoute = require('./spesialis-route')
const ambulanceRoute = require('./ambulance-routes')
const responRoute = require('./respon-route')

const tokenVerify = require("../middleware/auth")

route.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})


route.use("/forum", forumRoute)
route.use("/doctors", doktorRoutes)
route.use("/bookings", tokenVerify, bookingRoutes)
route.use("/ujilab", tokenVerify, ujilabRoutes)
route.use("/instansi", instansiRoute)
route.use("/user", userRoute)
route.use("/auth", authRoute)
route.use("/users", userKredensial)
route.use("/dokter", dokterRoute)
route.use("/spesialis", spesialisRoute)
route.use("/ambulances", ambulanceRoute)
route.use("/respon", responRoute)


module.exports = route