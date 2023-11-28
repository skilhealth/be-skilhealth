const {User_kredensial} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


module.exports = {
    Login: async (req, res) => {
      const user = await User_kredensial.findOne({
        where: {
          email: req.body.email
        }
      });
      if(!user) return res.status(404).json({message: "User tidak ditemukan"});
    const match = await bcrypt.compareSync(user.password, req.body.password);
    if(!match) return res.status(400).json({message: "Password Salah"});
    req.session.userId = user.id;
    const id = user.id;
    const username = user.username;
    const email = user.email;
    const role = user.role;
    res.status(200).json({id, username, email, role});
    },

    Me: async (req, res) => {
      if(!req.session.userId) {
        return res.status(401).json({message: "Silahkan Login ke akun Anda!"});
      }
      const user = await User_kredensial.findOne({
        attributes: ['id', 'username', 'email', 'role'],
        where: {
          id: req.session.userId
        }
      });
      if(!user) return res.status(404).json({message: "User tidak ditemukan"});
      res.status(200).json(user);
    },

    Logout: (req, res) => {
      req.session.destroy((err) => {
        if(err) return res.status(400).json({message: "Tidak dapat logout"});
        res.status(200).json({message: "Anda telah logout"})
      })
    }
      
}