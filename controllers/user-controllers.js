const { User } = require('../models')
const model = require("../models")
module.exports = {
  getAllUser: async (req, res) => {
    try {
      const response = await User.findAll({
        attributes: ['id', 'nama', 'tgl_lahir', 'jenis_kelamin', 'no_tlp', 'kredensial_id', 'images']
      });
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
  },

  getUserById: async (req, res) => {
    try {
      const id = req.params.id
      const response = await User.findByPk((id), {
        attributes: ['id', 'nama', 'tgl_lahir', 'jenis_kelamin', 'no_tlp', 'kredensial_id', 'images','alamat'],
      });
      res.json(response);
    } catch (error) {
      console.err(error.message);
    }
  },

  addUser: async (req, res) => {
    try {
      let user = await model.User.create({
        nama: req.body.nama,
        tgl_lahir: req.body.tgl_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        no_tlp: req.body.no_tlp,
        kredensial_id: req.body.kredensial_id,
        images: req.file.path
      })
      res.status(201).json({
        message: "Berhasil Membuat User",
        data: user
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  },

  updateUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const {
        nama,
        tgl_lahir,
        no_tlp,
        alamat
      } = req.body;

      let user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: 'User tidak ditemukan' });
      }

      await User.update({
        nama:nama,
        tgl_lahir:tgl_lahir,
        no_tlp:no_tlp,
        alamat:alamat
      },
      {
        where:{
          id:userId
        }
      });
      res.status(200).json({message:"Berhasil Edit Profile"}); // Beri respons dengan user yang telah diperbarui
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  deleteUserById: async (req, res) => {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!user) return res.status(404).json({ message: "User Tidak ditemukan" });
    try {
      await User.destroy({
        where: {
          id: user.id
        }
      });
      res.status(200).json({ message: "Berhasil menghapus User" });
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}