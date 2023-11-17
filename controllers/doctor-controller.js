const { Jadwal, Dokter, Instansi, Spesialis } = require("../models")
const { Sequelize, Op, where } = require("sequelize");
module.exports = {
    searchDoctor: async (req, res) => {
        try {
            const data = req.body
            let { Lanjutan } = req.body
            if (data.nama !==undefined) {
                Lanjutan = {
                    ...Lanjutan,
                    "$Dokter.nama$": { [Op.like]: `%${data.nama}%` }
                }
            }
            if (data.hari!==undefined) {
                Lanjutan = {
                    ...(data.hari !== "" && { date: Sequelize.literal(`DAYNAME(date) = '${data.hari}'`) }),
                    ...Lanjutan,
                }
            }

            console.log(Lanjutan)
            const doctors = await Jadwal.findAll({
                attributes: [
                    "dokter_id"],
                where: Lanjutan,
                include: [{
                    model: Dokter,
                    required: true,
                    attributes: ['nama', 'id', 'status'],
                    include: [{
                        model: Instansi,
                        required: true,
                        attributes: ['nama']
                    }, {
                        model: Spesialis,
                        as: "Spesiali",
                        required: true,
                        attributes: ['nama']
                    }]
                }]
            })
            if (doctors.length === 0)
                return res.status(200).json({
                    message: "Dokter Tidak Ditemukan"
                })
            res.status(200).json({
                message: "Dokter Berhasil ditemukan",
                todos: doctors
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    addDoctor: async (req, res) => {
        try {
            const data = req.body
            const doctor = await Dokter.create({
                nama: data.nama,
                spesialis_id: data.spesialis_id,
                instansi_id: data.instansi_id,
                deskripsi: data.deskripsi,
                skd: data.skd,
                pengalaman: data.pengalaman,
                pendidikan: data.pendidikan,
                no_tlp: data.no_tlp,
                status: data.status,
                images: data.images
            })
            res.json({
                message: "Berhasil Menambahkan Dokter",
                data: doctor
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    searcshDoctor: async (req, res) => {
        try {

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    seasrchDoctor: async (req, res) => {
        try {

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
}