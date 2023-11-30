const {Dokter} = require('../models')
const model = require("../models")
module.exports = {
    getAllDokter: async (req,res) => {
        try {
            const response = await Dokter.findAll({
                attributes:['id','nama', 'spesialis_id', 'instansi_id', 'deskripsi', 'skd', 'pengalaman', 'pendidikan', 'no_tlp', 'status', 'images']
            });
            res.json(response);
          } catch (error) {
            console.log(error.message);
          }
    },

    getDokterById: async (req,res) => {
        try {
            const response = await Dokter.findOne({
                attributes:['id','nama', 'spesialis_id', 'instansi_id', 'deskripsi', 'skd', 'pengalaman', 'pendidikan', 'no_tlp', 'status', 'images'],
              where: {
                id : req.params.id
              }
            });
            res.json(response);
          } catch (error) {
            console.log(error.message);
          }
    },

    addDokter: async (req,res) => {
        try {
            let dokter = await model.Dokter.create({
              nama: req.body.nama,
              spesialis_id: req.body.spesialis_id,
              instansi_id: req.body.instansi_id,
              deskripsi: req.body.deskripsi,
              skd: req.body.skd,
              pengalaman: req.body.pengalaman,
              pendidikan: req.body.pendidikan,
              no_tlp: req.body.no_tlp,
              status: req.body.status,
              images: req.file.path
            })
            res.status(201).json({
              message: "Berhasil Membuat Dokter",
              data: dokter
            })
          } catch (error) {
            res.status(404).json({
              message:error.message
            })
          }
    },

    updateDokterById: async (req,res) => {
      try {
        const dokterId = req.params.id; // Ambil ID dokter dari parameter URL
        const {
          nama,
          spesialis_id,
          instansi_id,
          deskripsi,
          skd,
          pengalaman,
          pendidikan,
          no_tlp,
          status
        } = req.body;
    
        let images; // Variabel untuk menyimpan path gambar baru
    
        // Periksa jika ada file gambar baru di form-data
        if (req.file) {
          images = req.file.path; // Ambil path gambar baru dari form-data
        }
    
        // Cari dokter berdasarkan ID
        let dokter = await Dokter.findByPk(dokterId);
    
        if (!dokter) {
          return res.status(404).json({ message: 'Dokter tidak ditemukan' });
        }
    
        // Perbarui nilai-nilai atribut dokter sesuai dengan data baru
        dokter.nama = nama || dokter.nama;
        dokter.spesialis_id = spesialis_id || dokter.spesialis_id;
        dokter.instansi_id = instansi_id || dokter.instansi_id;
        dokter.deskripsi = deskripsi || dokter.deskripsi;
        dokter.skd = skd || dokter.skd;
        dokter.pengalaman = pengalaman || dokter.pengalaman;
        dokter.pendidikan = pendidikan || dokter.pendidikan;
        dokter.no_tlp = no_tlp || dokter.no_tlp;
        dokter.status = status || dokter.status;
    
        // Jika ada path gambar baru, update nilai images
        if (images) {
          dokter.images = images;
        }
    
        // Simpan perubahan ke database
        await dokter.save();
    
        res.status(200).json(dokter); // Beri respons dengan dokter yang telah diperbarui
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },

    deleteDokterById: async (req,res) => {
        const dokter = await Dokter.findOne({
            where: {
              id : req.params.id
            }
          });
          if(!dokter) return res.status(404).json({message: "Dokter Tidak ditemukan"});
          try {
              await Dokter.destroy({
                  where: {
                      id: dokter.id
                  }
              });
              res.status(200).json({message: "Berhasil menghapus Dokter"});
             } catch (error) {
              res.status(400).json({message: error.message})
             }
    }
}