const {User_kredensial} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


module.exports = {
    Login: async (req, res) => {
      try{
        const userKredensial = await User_kredensial.findAll({
          where:{
            email: req.body.email,
          }
        });
        if(!userKredensial) return res.status(404).json({message: "User tidak ditemukan"});
        const match = await bcrypt.compareSync(userKredensial.password, req.body.password);
        if(!match) return res.status(400).json({message: "Password salah"});
        const userKredensialId = userKredensial[0].id;
        const username = userKredensial[0].username;
        const email = userKredensial[0].email;
        const role = userKredensial[0].role
        const accessToken =jwt.sign({userKredensialId,username,email,password, role},process.env.JWT_KEY ) 
           res.json({
            message: "berhasil login",
            userKredensialId,
            accessToken,
            role
           })
      }catch (error) {
        res.json(error.message)
      }
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
    },
      
  }