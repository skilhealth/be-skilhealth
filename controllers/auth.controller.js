const {User_kredensial} = require('../models')
const bcrypt = require('bcrypt')


module.exports = {
    Login: async (req, res) => {
        const userKredensial = await User_kredensial.findOne({
            where: {
              email : req.body.email
            }
          });
          if(!userKredensial) return res.status(404).json({message: "User Tidak ditemukan"});
          const match = await bcrypt.compare(req.body.password, userKredensial.password);
          if (!match) return res.status(400).json({message: "Password Salah"});
         // req.session.userKredensialId =  userKredensial.id;
         const id = userKredensial.id;
         const username = userKredensial.username;
         const email = userKredensial.email;
         const role = userKredensial.role;
          res.status(200).json(id, username, email, role);
    },

    Me: async (req, res) => {
        if(!req.session.userKredensialId){
            return res.status(401).json({message: "Silahkan login ke Akun Anda"});
        }
        const userKredensial = await User_kredensial.findOne({
            attributes: ['id', 'username', 'email', 'role'],
            where: {
              id : req.session.userKredensialId
            }
          });
          if(!userKredensial) return res.status(404).json({message: "User Tidak ditemukan"});
          res.status(200).json(userKredensial)
    },


    Logout: (req, res) => {
        req.session.destroy((err) => {
            if(err) return res.status(400).json({message: "Tidak dapat logout"});
            res.status(200).json({message: "Anda telah logout"});
        })
    }
      
  }