const express = require("express")
const route = express.Router()

const userRoute = require('./user-routes');
const userKredensial = require('./user-kredensial-route');
const authRoute = require('./auth.route');

route.get ("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})

route.use("/user", userRoute)
route.use("/auth", authRoute)
route.use("/users", userKredensial)





module.exports = route




