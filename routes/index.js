const express = require("express")
const route = express.Router()
const doktorRoutes = require("./doctor-routes")
const { Instansi, Spesialis, Jadwal } = require("../models")
const { DATE } = require("sequelize")

route.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})
route.use("/doctors", doktorRoutes)
route.post("/rs", async (req, res) => {
    const data = await Instansi.create({
        nama: "Skilvul Hospital Jakarta",
        alamat: "Jakarta",
        no_tlp: "0123",
        area: "Jabodetabek",
        email: "@gmail.com"
    })
    res.json({
        message: "Berhasil",
        data: data
    })
})
route.post("/sp", async (req, res) => {
    const data = await Spesialis.create({
        nama: "Ahli Kandungan",
        keterangan: "-",
    })
    res.json({
        message: "Berhasil",
        data: data
    })
})
route.post("/jd", async (req, res) => {
    const data = await Jadwal.create({
        dokter_id: 2,
        date:"2023-11-17",
        tipe: "homecare",
        keterangan:"-",
        status: false
    })
    res.json({
        message: "Berhasil",
        data: data
    })
})

module.exports = route