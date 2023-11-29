const { Forum } = require("../models");

module.exports = {
  getAllForum: async (req, res) => {
    try {
      const forums = await Forum.findAll();

      res.json({
        message: "Successfully retrieved all forums",
        data: forums,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  addForum: async (req, res) => {
    let data = req.body;

    try {
      await Forum.create({
        user_id: data.user_id,
        judul: data.judul,
        pertanyaan: data.pertanyaan,
        status: false,
      });

      res.status(201).json({
        message: "Berhasil menambahkan forum",
      });
    } catch (error) {
      res.json({
        message: "Gagal menambahkan forum",
        error: error.message,
      });
    }
  },

  updateForumById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      if (!data) {
        return res.status(404).json({
          message: "Forum not found",
        });
      }

      await Forum.update(
        {
          dokter_id: data.dokter_id,
          jawaban: data.jawaban,
        },
        {
          where: {
            id: id,
          },
        }
      );
      console.log(id);
      res.json({
        message: "Successfully updated forum by id",
        data: data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
