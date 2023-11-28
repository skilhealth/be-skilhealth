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