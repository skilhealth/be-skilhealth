const {User_kredensial} = require('../models')
const bcrypt = require('bcrypt')


module.exports = {
    getUser: async (req,res) => {
       try {
        const response = await User_kredensial.findAll({
            attributes:['id','username', 'email', 'role']
        });
        res.json(response);
      } catch (error) {
        console.log(error.message);
      }
    },

    getUserKredensialById: async (req,res) => {
        try {
            const response = await User_kredensial.findOne({
            attributes:['id','username', 'email', 'role'],
              where: {
                id : req.params.id
              }
            });
            res.json(response);
          } catch (error) {
            console.log(error.message);
          }
    },

    addUserKredensial: async (req,res) => {
       const {username, email, password, confirmasiPassword, role} = req.body;
       if(password !== confirmasiPassword ) return res.status(400).json({message: "Password dan Confirmasi Password tidak sama"})
       const salt = await bcrypt.genSalt();
       const hashPassword = await bcrypt.hash(password, salt);
       try {
        await User_kredensial.create({
            username: username,
            email: email,
            password: hashPassword,
            role: role
        });
        res.status(201).json({message: "Berhasil membuat user"});
       } catch (error) {
        res.status(400).json({message: error.message})
       }
    },

    updateUserKredensialById: async (req,res) => {
        const userKredensial = await User_kredensial.findOne({
              where: {
                id : req.params.id
              }
            });
            if(!userKredensial) return res.status(404).json({message: "User Tidak ditemukan"});
            const {username, email, password, confirmasiPassword, role} = req.body;
            let hashPassword;
            if(password === "" || password === null){
                hashPassword = userKredensial.password
            } else {
                const salt = await bcrypt.genSalt();
                hashPassword = await bcrypt.hash(password, salt);
            }
            if(password !== confirmasiPassword ) return res.status(400).json({message: "Password dan Confirmasi Password tidak sama"})
            try {
                await User_kredensial.update({
                    username: username,
                    email: email,
                    password: hashPassword,
                    role: role
                },{
                    where: {
                        id: userKredensial.id
                    }
                });
                res.status(200).json({message: "Berhasil mengupdate User"});
               } catch (error) {
                res.status(400).json({message: error.message})
               }
    },  



    deleteUserKredensialById: async (req,res) => {
        const userKredensial = await User_kredensial.findOne({
            where: {
              id : req.params.id
            }
          });
          if(!userKredensial) return res.status(404).json({message: "User Tidak ditemukan"});
          try {
              await User_kredensial.destroy({
                  where: {
                      id: userKredensial.id
                  }
              });
              res.status(200).json({message: "Berhasil menghapus User"});
             } catch (error) {
              res.status(400).json({message: error.message})
             }
    }
}