const { User_kredensial } = require('../models')
const argon2 = require("argon2");


module.exports = {
  getUser: async (req, res) => {
    try {
      const response = await User_kredensial.findAll({
        attributes: ['id', 'username', 'email', 'role']
      });
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
  },

  getUserKredensialById: async (req, res) => {
    try {
      const response = await User_kredensial.findOne({
        attributes: ['id', 'username', 'email', 'role'],
        where: {
          id: req.params.id
        }
      });
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
  },

  addUserKredensial: async (req, res) => {
    const { username, email, password, confirmasiPassword, role } = req.body;
    if (password !== confirmasiPassword) return res.status(400).json({ message: "Password dan Confirmasi Password tidak sama" })
    const hashPassword = await argon2.hash(password);
    try {
      await User_kredensial.create({
        username: username,
        email: email,
        password: hashPassword,
        role: role
      });
      res.status(201).json({ message: "Berhasil membuat user" });
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },

  updateUserKredensialById: async (req, res) => {
    const userKredensial = await User_kredensial.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!userKredensial) return res.status(404).json({ message: "User Tidak ditemukan" });
    const { username, email, password, confirmasiPassword, role } = req.body;
    let hashPassword;
    if (password === "" || password === null) {
      hashPassword = userKredensial.password
    } else {
      hashPassword = await argon2.hash(password);
    }
    if (password !== confirmasiPassword) return res.status(400).json({ message: "Password dan Confirmasi Password tidak sama" })
    try {
      await User_kredensial.update({
        username: username,
        email: email,
        password: hashPassword,
        role: role
      }, {
        where: {
          id: userKredensial.id
        }
      });
      res.status(200).json({ message: "Berhasil mengupdate User" });
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  deleteUserKredensialById: async (req, res) => {
    const userKredensial = await User_kredensial.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!userKredensial) return res.status(404).json({ message: "User Tidak ditemukan" });
    try {
      await User_kredensial.destroy({
        where: {
          id: userKredensial.id
        }
      });
      res.status(200).json({ message: "Berhasil menghapus User" });
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  emailSend: async (req, res) => {
    let data = await User_kredensial.findOne({
      where:{
        email: req.body.email
      }
    });
    if (data) {
      res.status(200).json({
        message: "Email Terdaftar"
      });
    } else {
      res.status(200).json({
        message: "Email tidak Terdaftar"
      });
    }
  },
  changePassword: async (req, res) => {
    const data = req.body
    if (data.password !== data.confirmasiPassword)
      return res.status(400).json({ message: "Password dan Confirmasi Password tidak sama" });
    const hashPassword = await argon2.hash(data.password);
    await User_kredensial.update(
      { password: hashPassword },
      {
        where: {
          email: data.email
        }
      }
    )
    res.status(200).json({
      message: "Berhasil Ganti password",
      hashPassword
    });
  },

}