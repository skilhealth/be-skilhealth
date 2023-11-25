const express = require("express")
const route = express.Router()

const instansiRoute = require('./instansi-routes');

route.get ("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})

route.use("/instansi", instansiRoute)


module.exports = route




