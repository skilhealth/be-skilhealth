const {Instansi} = require("../models")
const model = require("../models")

module.exports = {
   getInstansi: async (req, res) => {
    try {
      const response = await Instansi.findAll();
      res.json(response);
    } catch (error) {
      console.log(error.message);
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
      console.log(error.message);
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

     searchInstansiByAlamat: async (req, res) => {
     
     },
     searchInstansiByName: async (req, res) => {
     
     },
     searchInstansiByJarak: async (req, res) => {
     
     },
     searchInstansiByArea: async (req, res) => {
     
     }
}   