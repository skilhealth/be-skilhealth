const {ujilab}  = require("../models")
module.exports = {
    getUjilabByuserId: async (req, res) => {
        try {
            const data = ujilab.findAll({
                Attribute:[]
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                Message: "Terjadi Kesalahan Internal Server"
            })
        }
    }
}