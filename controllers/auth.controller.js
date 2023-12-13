const { User_kredensial, User, Dokter } = require('../models')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken');
const dokter = require('../models/dokter');


module.exports = {
    Register: async (req, res) => {
        try {
            const data = req.body
            const user = await User_kredensial.findOne({
                where: {
                    email: data.email
                }
            });
            if (user) return res.status(404).json({
                message: "Email Telah Terdaftar"
            })
            if (data.password !== data.confirmasiPassword) return res.status(400).json({ message: "Password dan Confirmasi Password tidak sama" })
            const hashPassword = await argon2.hash(data.password);
            const UserKred = await User_kredensial.create({
                email: data.email,
                password: hashPassword,
                role: data.role
            });
            await User.create({
                nama: data.nama,
                tgl_lahir: data.tgl_lahir,
                jenis_kelamin: data.jenis_kelamin,
                no_tlp: data.no_tlp,
                kredensial_id: UserKred.id,
                images: data.images
            })
            res.status(201).json({
                message: "Berhasil Melakukan Registrasi",
            })
        } catch (err) {
            console.error(err)
            res.json({
                message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    Login: async (req, res) => {
        try {
            const data = req.body
            const user = await User_kredensial.findOne({
                include: [{
                    model: User,
                }, {
                    model: Dokter,
                }],
                where: {
                    email: req.body.email
                }
            });
            if (!user) return res.status(404).json(
                { message: "User tidak ditemukan" });
            const match = await argon2.verify(user.password, data.password);
            if (!match) return res.status(400).json(
                { message: "Password Salah" });
            let dataUser = {}
            if (user.role === "dokter") {
                dataUser = {
                    id: user.Dokter.id,
                    email: user.email,
                    role: user.role,
                    nama: user.Dokter.nama,
                    status: user.Dokter.status,
                    instansi_id: user.Dokter.instansi_id,
                    spesialis_id: user.Dokter.spesialis_id,
                    no_tlp: user.Dokter.no_tlp,
                    deskripsi: user.Dokter.deskripsi,
                    images:user.Dokter.images,
                    pendidikan:user.Dokter.pendidikan,
                    pengalaman:user.Dokter.pengalaman,
                    skd:user.Dokter.skd
                }
            } else {
                dataUser = {
                    id: user.User.id,
                    nama: user.User.nama,
                    tgl_lahir: user.User.tgl_lahir,
                    jenis_kelamin: user.User.jenis_kelamin,
                    no_tlp: user.User.no_tlp,
                    images: user.User.images,
                    alamat:user.User.alamat,
                    email: user.email,
                    role: user.role
                }
            }
            const email = user.email;
            const role = user.role;
            const expiresIn = 43200
            const token = jwt.sign({
                email: email,
                role: role
            }, process.env.JWT_KEY, { expiresIn })
            res.status(200).json(
                {
                    user: {
                        ...dataUser
                    },
                    token: token
                });
        } catch (err) {
            console.error(err)
            res.json({
                message: "Kesalahan Internal Server"
            })
        }
    },
}