const {Users} = require('../models/user_kredensial')

module.exports = {
    getAllUserKredensial: async (req,res) => {
       try {
        const users = await Users.findAll();
        res.json(users);
       } catch (error) {
         console.log(error);
       }
    },

    getUserKredensialById: async (req,res) => {
        
    },

    addUserKredensial: async (req,res) => {
       
    },

    updateUserKredensialById: async (req,res) => {
       
    },

    deleteUserKredensial: async (req,res) => {
        
    },

    deleteUserKredensialById: async (req,res) => {
        
    },


}