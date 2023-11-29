const {User_kredensial} = require('../models')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken');


module.exports = {
    Login: async (req, res) => {
      const user = await User_kredensial.findOne({
        where: {
          email: req.body.email
        }
      });
      if(!user) return res.status(404).json({message: "User tidak ditemukan"});
     const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({message: "Password Salah"});
    //req.session.id = user.id;
    const id = user.id;
    const username = user.username;
    const email = user.email;
    const role = user.role;
    res.status(200).json({id, username, email, role});
    },

    Logout: (req, res) => {
      req.session.destroy((err) => {
        if(err) return res.status(400).json({message: "Tidak dapat logout"});
        res.status(200).json({message: "Anda telah logout"})
      })
    }
      
}