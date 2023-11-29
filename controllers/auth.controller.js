const { User_kredensial } = require('../models')
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
                username: data.username,
                email: data.email,
                password: hashPassword,
                role: data.role
            });
            await model.User.create({
                nama: req.body.nama,
                tgl_lahir: req.body.tgl_lahir,
                jenis_kelamin: req.body.jenis_kelamin,
                no_tlp: req.body.no_tlp,
                kredensial_id: UserKred.id,
                images: req.file.path
            })
            res.status(201).json({
                message: "Berhasil Melakukan Registrasi",
            })
        } catch (err) {
            console.log(err)
            res.json(500)({
                message: "Terjadi Kesalahan Internal Server"
            })
        }
    },
    Login: async (req, res) => {
        const user = await User_kredensial.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) return res.status(404).json(
            { message: "User tidak ditemukan" });
        const match = await argon2.verify(user.password, req.body.password);
        if (!match) return res.status(400).json(
            { message: "Password Salah" });
        const id = user.id;
        const username = user.username;
        const email = user.email;
        const role = user.role;
        const expiresIn = 3600
        const token = jwt.sign({
            email:email,
            role:role
        },"INTROVERT",{expiresIn})
        res.status(200).json(
            { id, username, email, role ,token });
    },

    Logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) return res.status(400).json({ message: "Tidak dapat logout" });
            res.status(200).json({ message: "Anda telah logout" })
        })
    }
}