const express = require("express")
const route = express.Router()

const userRoute = require('./user-routes');

route.get ("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})

route.use("/user", userRoute)


module.exports = route




