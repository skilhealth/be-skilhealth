const User = require('../models/user');


module.exports = {
    getAllUser: async (req,res) => {
        const users = await User.find()

        res.json({
            message: "Berhasil mendapatkan data user",
            data: users
        })
    },

    getUserById: async (req,res) => {
        const users = await User.find()

        res.json({
            message: "Berhasil mendapatkan data user",
            data: users
        })
    },

    addUser: async (req,res) => {
        const users = await User.find()

        res.json({
            message: "Berhasil mendapatkan data user",
            data: users
        })
    },

    updateUserById: async (req,res) => {
        const users = await User.find()

        res.json({
            message: "Berhasil mendapatkan data user",
            data: users
        })
    },

    deleteUserById: async (req,res) => {
        const users = await User.find()

        res.json({
            message: "Berhasil mendapatkan data user",
            data: users
        })
    },

    deleteUser: async (req,res) => {
        const users = await User.find()

        res.json({
            message: "Berhasil mendapatkan data user",
            data: users
        })
    },


}