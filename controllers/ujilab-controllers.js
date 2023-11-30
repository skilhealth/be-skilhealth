const { ujilab, Dokter } = require("../models")
module.exports = {
    getUjilabByuserId: async (req, res) => {
        try {
            const id = req.query.user
            console.log(id)
            const Ujilab = await ujilab.findAll({
                attributes: { exclude: ['updatedAt'] },
                where: {
                    "user_id": id
                },
                include: [{
                    model: Dokter,
                    attributes: ['id', 'nama'],
                }],
                order: [['createdAt', 'DESC']]
            })
            if (Ujilab.length === 0)
                return res.status(200).json({
                    message: "Ujilab Kosong"
                })
            res.status(200).json({
                message: "Menampilkan Ujilab",
                data: Ujilab
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    getUjilabyId: async (req, res) => {
        try {
            const { id } = req.params
            const Ujilab = await ujilab.findByPk((id), {
                attributes: { exclude: ['updatedAt'] },
                include: [{
                    model: Dokter,
                    attributes: ['id', 'nama'],
                }],
                order: [['createdAt', 'DESC']]
            })
            if (Ujilab.length === 0)
                return res.status(200).json({
                    message: "Ujilab Kosong"
                })
            res.status(200).json({
                message: "Menampilkan Ujilab",
                data: Ujilab
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    addUjilab: async (req, res) => {
        try {
            const data = req.body
            const Ujilab = await ujilab.create({
                antrian_id: data.antrian_id,
                user_id: data.user_id,
                dokter_id: data.dokter_id,
                judul: data.judul,
                keluhan: data.keluhan,
                diagnosa: data.diagnosa,
                catatan: data.catatan,
            })
            res.json({
                message: "Berhasil Menambahkan Ujilab",
                data: Ujilab
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    editUjilab: async (req, res) => {
        try {
            const { id } = req.params
            const data = req.body
            await ujilab.update({
                judul: data.judul,
                keluhan: data.keluhan,
                diagnosa: data.diagnosa,
                catatan: data.catatan,
                dokumen: data.dokumen
            },{
                where:{
                    id:id
                }
            })
            res.json({
                message: "Berhasil edit Ujilab",
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },

}