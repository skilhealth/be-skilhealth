const { Respon } = require("../models")

module.exports = {
    getAllRespon: async (req, res) => {
        try {
            const response = await Respon.findAll();
            res.json({
                message: "Berhasil Mendapatkan Semua Respon",
                data: response
            })
        } catch (err) {
            console.error(err)
            res.json({
                message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    getResponById: async (req, res) => {
        try {
            const response = await Respon.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (!response)
                return res.json({
                    message: "Request tidak ditemukan"
                })
            res.json({
                message: "Berhasil Mendapatkan data Request",
                data: response
            })
        } catch (err) {
            console.error(err)
            res.json({
                message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    getResponByInstansi: async (req, res) => {
        try {
            const response = await Respon.findAll({
                where: {
                    instansi_id: req.query.id,
                    ambulan_id: null
                },
            });
            if (!response)
                return res.json({
                    message: "Request tidak ditemukan"
                })
            res.json({
                message: "Berhasil Mendapatkan Respon Instansi",
                data: response
            })
        } catch (err) {
            console.error(err)
            res.json({
                message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    createRequest: async (req, res) => {
        try {
            const data = req.body
            const response = await Respon.create(
                {
                    instansi_id: data.instansi_id,
                    alamat: data.alamat,
                    tingkat: data.tingkat,
                    kejadian: data.kejadian,
                    user_id: data.user_id,
                })
            res.json({
                message: "Berhasil Membuat Request",
                data: response
            })
        } catch (err) {
            console.error(err)
            res.json({
                message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    giveRespon: async (req, res) => {
        try {
            const data = req.body
            await Respon.update({ambulan_id:data.ambulan_id},{
                where :{
                    id:data.id
                }
            })
            res.json({
                message:"Request Berhasil diberi Respon"
            })
        } catch (err) {
            console.error(err)
            res.json({
                message: "Terjadi Kesalahan Internal Server"
            })
        }
    }
}