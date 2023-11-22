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

    createInstansi: (req, res) => {
      if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
      const nama = req.body.title;
      const alamat = req.body.alamat;
      const no_tlp = req.body.no_tlpn;
      const area = req.body.area;
      const file = req.files.file;
      const filesize = file.data.length;
      const ext = path.extname(file.name);
      const fileName = file.md5 + ext;
      const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
      const allowedType = ['.png','.jpg','.jpeg'];
  
      if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
      if(filesize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
  
      file.mv(`./public/images/${fileName}`, async(err)=>{
          if(err) return res.status(500).json({msg: err.message});
          try {
              await Instansi.create({
                name: nama, 
                alamat: alamat,
                no_tlp: no_tlp,
                area: area,
                image: fileName, 
                url: url
              });
              res.status(201).json({msg: "Instansi Created Successfuly"});
          } catch (error) {
              console.log(error.message);
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