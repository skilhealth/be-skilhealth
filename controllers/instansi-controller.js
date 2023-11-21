const {Instansi} = require("../models")
const path = require('path');

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

    createInstansi:  (req, res) => {
      if(req.files === null) return res.status(400).json({message: "No File Uploaded"});
      const {nama, alamat, no_tlpn, area, email} = req.body
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      const fileName = file.md5 + ext;
      const url = `${req.protocol}: //${req.get("host")}//images/${fileName}`;
      const allowedType = ['.png', '.jpg', '.jpeg'];

      if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({message: "Invalid Images"});
      if(fileSize > 5000000) return res.status(422).json({message: "Image must be less than 5 MB"});

      file.mv(`./public/images/${fileName}`, async(err) => {
        if (err) return res.status(500).json({message: err.message});
        try {
          await Instansi.create({nama, alamat,no_tlpn,area,email, image:fileName, url: url});
          res.status(201).json({message: "Instansi berhasil ditambahkan"});
        } catch (error) {
          console.log(err.message);
        }
      })

    },

     updateInstansi: async (req, res) => {
     
     },

     deleteInstansi: async (req, res) => {
     
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