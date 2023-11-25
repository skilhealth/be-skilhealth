const express = require("express")
const route = express.Router()

const userRoute = require('./user-routes');
const userKredensial = require('./user-kredensial-route');

route.get ("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})

route.use("/user", userRoute)

route.use("/users", userKredensial)



module.exports = route




