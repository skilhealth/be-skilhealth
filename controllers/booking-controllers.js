const { Antrian, User, Dokter, Instansi, Spesialis } = require("../models")

module.exports = {
    addBooking: async (req, res) => {
        try {
            function generateToken(length) {
                var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var resultToken = '';
                for (var i = 0; i < length; i++) {
                    var randomIndex = Math.floor(Math.random() * charset.length);
                    resultToken += charset.charAt(randomIndex);
                }
                return resultToken;
            }
            const data = req.body
            const antrian = Antrian.create({
                user_id: data.user_id,
                jadwal_id: data.jadwal_id,
                status: false,
                token: generateToken(6),
                keterangan: data.keterangan
            })
            res.json({
                message: "Berhasil Menambahkan Antrian",
                data: antrian
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    getBookingByUserId: async (req, res) => {
        try {
            const id = req.query.user 
            const antrian = await Antrian.findAll({
                where:{
                    "$User.id$":id
                },
                attributes: ['id', 'status'],
                include: [{
                    model:User,
                    required:true,
                    attributes:['id']
                },
                {
                    model: Jadwal,
                    required: true,
                    attributes: ["date", "tipe"]
                }, {
                    model: Dokter,
                    required: true,
                    attributes: ["id","nama","images"],
                    include: [{
                        model: Spesialis,
                        required: true,
                        attributes: ['nama']
                    }, {
                        model: Instansi,
                        required: true,
                        attributes: ['nama']
                    }]
                }]
            })
            if (antrian.length === 0)
                return res.status(200).json({
                    message: "Antrian Kosong"
                })
            res.status(200).json({
                message: "Menampilkan Antrian",
                data: antrian
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    raddBooking: async (req, res) => {
        try {

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    apddBooking: async (req, res) => {
        try {

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
}