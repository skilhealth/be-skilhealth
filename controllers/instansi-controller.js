const {Instansi} = require("../models")
const model = require("../models")
const {Op} = require("sequelize")

module.exports = {
   getInstansi: async (req, res) => {
    try {
      const response = await Instansi.findAll();
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
   },

   getInstansiById: async (req, res) => {
    try {
      const response = await Instansi.findOne({
        where: {
          id : req.params.id
        }
      });
      res.json(response);
    } catch (error) {
      console.error(error.message);
    }
    },

    createInstansi: async (req, res) => {
      try {
        let instansi = await model.Instansi.create({
          nama: req.body.nama,
          alamat: req.body.alamat,
          no_tlp: req.body.no_tlp,
          area: req.body.area,
          email: req.body.email,
          image: req.file.path 
        })
        res.status(201).json({
          message: "Berhasil Membuat Instansi",
          data: instansi
        })
      } catch (error) {
        res.status(404).json({
          message:error.message
        })
      }
    },

     updateInstansi: async (req, res) => {
      const instansi = await Instansi .findOne({
        where: {
          id: req.params.id
        }
      });
      if(!instansi) return res.status(404).json({message: "No Data Found"});
      try{
        await Instansi.findOne({
          where: {
            id : instansi.id
          }
        });
        res.status(200).json({message: "Berhasil mengUpdate Instansi"});
      } catch (error) {
        res.status(400).json({message: error.message})
      }
     },

     deleteInstansiById: async (req, res) => {
      const instansi = await Instansi.findOne({
        where: {
          id: req.params.id
        }
      });
      if(!instansi) return res.status(404).json({message: "Instansi tidak di temukan"});
      try {
        await Instansi.destroy({
          where: {
            id: instansi.id
          }
        });
        res.status(200).json({message: "Berhasil menghapus Instansi"});
      } catch (error) {
        res.status(400).json({message: error.message})
      }
     },

     getInstansiByNama: async (req, res) => {
      const {nama} =req.query;
      try {
        const instansi = await Instansi.findAll({
          where: {
            nama: {
              [Op.like]: `%${nama}%`
            }
          }
        });
        res.json(instansi);
      } catch (error){
        res.status(500).json({message: error.message});
      }
     },

     getInstansiByAlamat: async (req, res) => {
      const {alamat} =req.query;
      try {
        const instansi = await Instansi.findAll({
          where: {
            alamat: {
              [Op.like]: `%${alamat}%`
            }
          }
        });
        res.json(instansi);
      } catch (error){
        res.status(500).json({message: error.message});
      }
     },

     getInstansiByArea: async (req, res) => {
      const {area} =req.query;
      try {
        const instansi = await Instansi.findAll({
          where: {
            area: {
              [Op.like]: `%${area}%`
            }
          }
        });
        res.json(instansi);
      } catch (error){
        res.status(500).json({message: error.message});
      }
     }
}   