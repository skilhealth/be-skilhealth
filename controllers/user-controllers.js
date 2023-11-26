const {User} = require('../models')

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
    const {nama, tgl_lahir, jenis_kelamin, no_tlp, kredensial_id, images} = req.body;
       try {
        await User.create({
            nama: nama,
            tgl_lahir: tgl_lahir,
            jenis_kelamin: jenis_kelamin,
            no_tlp: no_tlp,
            kredensial_id: kredensial_id,
            images: images
        });
        res.status(201).json({message: "Berhasil membuat user"});
       } catch (error) {
        res.status(400).json({message: error.message})
       }
    },

    updateUserById: async (req,res) => {
        const id = req.params.id;

    req.body.tgl_lahir = new Date(req.body.tgl_lahir)

    User.findByPk(id, req.body, {userFindAndModify: false})
    .then(data => {
      if (!data) {
        res.status(404).send({message:"Tidak dapat mengupdate data"})
      }
      res.send({message: "Data berhasil di update"})
    })
    .catch(err => res.status(500).send({message: err.message}))
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