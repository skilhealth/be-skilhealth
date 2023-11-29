const express = require("express")
const route = express.Router()

const userRoute = require('./user-routes');
const userKredensial = require('./user-kredensial-route');
const authRoute = require('./auth.route');
const dokterRoute = require('./dokter-route')

const tokenVerify = require("../middleware/auth") //taruh ini buat setiap akses endpoint perlu cek token

route.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})

route.use("/user", userRoute)
route.use("/auth", authRoute)
route.use("/users", userKredensial)
route.use("/dokter", dokterRoute)





module.exports = route




