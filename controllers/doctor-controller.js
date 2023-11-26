const { Jadwal, Dokter, Instansi, Spesialis } = require("../models")
const { Sequelize, Op, where } = require("sequelize");
module.exports = {
    searchDoctor: async (req, res) => {
        try {
            const data = req.body
            let { Lanjutan } = req.body
            if (data.nama !== undefined) {
                Lanjutan = {
                    ...Lanjutan,
                    "$Dokter.nama$": { [Op.like]: `%${data.nama}%` }
                }
            }
            if (data.hari !== undefined) {
                Lanjutan = {
                    ...(data.hari !== "" && { date: Sequelize.literal(`DAYNAME(date) = '${data.hari}'`) }),
                    ...Lanjutan,
                }
            }
            const doctors = await Jadwal.findAll({
                attributes: [
                    "dokter_id"],
                where: Lanjutan,
                include: [{
                    model: Dokter,
                    required: true,
                    attributes: ['nama', 'id', 'status', 'images'],
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
                data: doctors
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
    DokterById: async (req, res) => {
        try {
            const { id } = req.params
            const doctors = await Dokter.findByPk((id), {
                attributes: ['nama', 'id', 'status', 'deskripsi', 'skd', 'pengalaman', 'images', 'pendidikan'],
                include: [{
                    model: Instansi,
                    required: true,
                    attributes: ['nama']
                }, {
                    model: Spesialis,
                    as: "Spesiali",
                    required: true,
                    attributes: ['nama']
                },
                {
                    model: Jadwal,
                    required: false,
                    attributes: ['date', 'tipe', 'status'],
                }
                ]
            })
            if (!doctors)
                return res.status(200).json({
                    message: "Dokter Tidak Ditemukan"
                })
            res.status(200).json({
                message: "Dokter Berhasil ditemukan",
                data: doctors
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    GetAllDoctor: async (req, res) => {
        try {
            const doctors = await Dokter.findAll({
                attributes: ['id', 'nama', 'images', 'status'],
                include: [{
                    model: Instansi,
                    required: true,
                    attributes: ['nama']
                }, {
                    model: Spesialis,
                    as: "Spesiali",
                    required: true,
                    attributes: ['nama']
                },]
            })
            if (!doctors)
                return res.status(200).json({
                    message: "Tidak ada data Dokter"
                })
            res.status(200).json({
                message: "Dokter Berhasil ditemukan",
                data: doctors
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
}