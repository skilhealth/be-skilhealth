const {User} = require('../models')
const model = require("../models")
module.exports = {
    getAllUser: async (req,res) => {
        try {
            const response = await User.findAll({
                attributes:['id','nama', 'tgl_lahir', 'jenis_kelamin', 'no_tlp', 'kredensial_id', 'images']
            });
            res.json(response);
          } catch (error) {
            console.log(error.message);
          }
    },

    getUserById: async (req,res) => {
        try {
            const response = await User.findOne({
            attributes:['id','nama', 'tgl_lahir', 'jenis_kelamin', 'no_tlp', 'kredensial_id', 'images'],
              where: {
                id : req.params.id
              }
            });
            res.json(response);
          } catch (error) {
            console.log(error.message);
          }
    },

    addUser: async (req,res) => {
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
          message:error.message
        })
      }
    },

    updateUserById: async (req,res) => {
      try {
        const userId = req.params.id; 
        const {
          nama,
          tgl_lahir,
          jenis_kelamin,
          no_tlp,
          kredensial_id
        } = req.body;
    
        let images; // Variabel untuk menyimpan path gambar baru
    
        // Periksa jika ada file gambar baru di form-data
        if (req.file) {
          images = req.file.path; // Ambil path gambar baru dari form-data
        }
    
      
        let user = await User.findByPk(userId);
    
        if (!user) {
          return res.status(404).json({ message: 'User tidak ditemukan' });
        }
    
        // Perbarui nilai-nilai atribut User sesuai dengan data baru
        user.nama = nama || user.nama;
        user.tgl_lahir = tgl_lahir || user.tgl_lahir;
        user.jenis_kelamin = jenis_kelamin || user.jenis_kelamin;
        user.no_tlp = no_tlp || user.no_tlp;
        user.kredensial_id = kredensial_id || user.kredensial_id;
    
        // Jika ada path gambar baru, update nilai images
        if (images) {
          user.images = images;
        }
    
        // Simpan perubahan ke database
        await user.save();
    
        res.status(200).json(user); // Beri respons dengan user yang telah diperbarui
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },

    deleteUserById: async (req,res) => {
        const user = await User.findOne({
            where: {
              id : req.params.id
            }
          });
          if(!user) return res.status(404).json({message: "User Tidak ditemukan"});
          try {
              await User.destroy({
                  where: {
                      id: user.id
                  }
              });
              res.status(200).json({message: "Berhasil menghapus User"});
             } catch (error) {
              res.status(400).json({message: error.message})
             }
    }
}