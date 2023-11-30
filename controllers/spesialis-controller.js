const {Spesialis} = require('../models')
module.exports = {
    getAllSpesialis: async (req, res) => {
        try {
          const spesialis = await Spesialis.findAll()
          res.json({
            message: "Successfully retrieved all forums",
            data: spesialis,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({
            message: "Internal Server Error",
          });
        }
      },
}