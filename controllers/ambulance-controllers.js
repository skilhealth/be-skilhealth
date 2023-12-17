const { Ambulance } = require("../models")

module.exports = {
    getAllAmbulance: async (req, res) => {
        try {
            const response = await Ambulance.findAll();
            res.json({
                message: "Berhasil Mendapatkan Semua Ambulance",
                data: response
            })
        } catch (err) {
            console.error(err)
            res.json({
                message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    getAmbulanceById: async (req, res) => {
        try {
            const response = await Ambulance.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (!response)
                return res.json({
                    message:"Ambulan tidak ditemukan"
                })
            res.json({
                message: "Berhasil Mendapatkan data Ambulance",
                data: response
            })
        } catch (error) {
            console.error(error.message);
        }
    },
    getAmbulanceByInstansi: async (req, res) => {
        try {
            console.log(req.query)
            const response = await Ambulance.findAll({
                where: {
                    instansi_id: req.query.id
                },
            });
            if (!response)
            return res.json({
                message:"Ambulan tidak ditemukan"
            })
            res.json({
                message: "Berhasil Mendapatkan Ambulance Instansi",
                data: response
            })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
}