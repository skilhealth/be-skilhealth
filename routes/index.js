const express = require("express")
const route = express.Router()
const doktorRoutes = require("./doctor-routes")
const bookingRoutes = require("./booking-routes")
const { Instansi, Spesialis, Jadwal } = require("../models")
const { DATE } = require("sequelize")

route.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})
route.use("/doctors", doktorRoutes)
route.use("/bookings", bookingRoutes)
route.post("/rs", async (req, res) => {
    const data = await Instansi.create({
        nama: "Skilvul Hospital Surabaya",
        alamat: "Surabaya",
        no_tlp: "0123",
        area: "Jawa Timur",
        email: "@gmail.com"
    })
    res.json({
        message: "Berhasil",
        data: data
    })
})
route.post("/sp", async (req, res) => {
    const data = await Spesialis.create({
        nama: "Ahli THT",
        keterangan: "-",
    })
    res.json({
        message: "Berhasil",
        data: data
    })
})
route.post("/jd", async (req, res) => {
    const data = await Jadwal.create({
        dokter_id: 5,
        date:"2023-11-25",
        tipe: "daring",
        keterangan:"-",
        status: true,
        harga:46000
    })
    res.json({
        message: "Berhasil",
        data: data
    })
})

module.exports = route