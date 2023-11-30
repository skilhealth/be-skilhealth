const { User_kredensial, User } = require('../models')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken');


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
            console.log(err)
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
                    require: true,
                }],
                where: {
                    email: req.body.email
                }
            });
            if (!user) return res.status(404).json(
                { message: "User tidak ditemukan" });
            const match = await argon2.verify(user.password,data.password);
            if (!match) return res.status(400).json(
                { message: "Password Salah" });
            const id = user.id;
            const email = user.email;
            const role = user.role;
            const expiresIn = 3600
            const token = jwt.sign({
                email: email,
                role: role
            }, "INTROVERT", { expiresIn })
            res.status(200).json(
                {
                    user: {
                        id: user.User.id,
                        nama:user.User.nama,
                        tgl_lahir:user.User.tgl_lahir,
                        jenis_kelamin:user.User.jenis_kelamin,
                        no_tlp:user.User.no_tlp,
                        images:user.images,
                        email:user.email,
                        role:user.role
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