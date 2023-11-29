const {User_kredensial, otp} = require('../models')
const argon2 = require("argon2");


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
       const hashPassword = await argon2.hash(password);
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
      }else{
        hashPassword = await argon2.hash(password);
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
    },
    emailSend: async (req, res) => {
      let data = await User_kredensial.findOne({
        email: req.body.email
      });
      console.log(data)
      const responseType = {};
      if(data){
        let otpcode = Math.floor((Math.random()*10000)+1 );
        let otpData = new otp({
          email: req.body.email,
          code: otpcode,
          expireIn: new Date().getTime() + 300*1000
        })
        let otpResponse = await otpData.save();
        responseType.statusText = 'Succes'
        responseType.message = 'Periksa email Anda untuk kode OTP';
      } else {
        responseType.statusText = 'error'
        responseType.message = 'Email id tidak ada';
      }
      res.status(200).json(responseType);
    },
    changePassword: async (req, res) => {
      let data = await otp.find({email: req.body.email,code:req.body.otpcode}) ;
      const response = {}
      if(data){
        let currentTime = new Date().getTime();
        let diff = data.expireIn - currentTime;
        if(diff < 0){
          response.message = 'Token Expire'
          response.statusText = 'error'
        } else {
          let userKredensial = await User_kredensial.findOne({email: req.body.email})
          userKredensial.password = req.body.password;
          userKredensial.save();
          res.message = 'Password Berhasil di Ubah'
          response.statusText = 'Berhasil'
        }
      } else {
        res.message ='Otp Tidak valid'
        response.statusText = 'error'
      }
    },

   /* const mailer = (email, otp)=> {
      var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        port:587,
        secure: false,
        auth: {
          user: '',
          pass: ''
        }
      });
      var mailOptions = {
        from:'youreemail@gmail.com',
        to:'nayasuna1@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    } */

}