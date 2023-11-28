const {Forum} = require('../models')

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
  
    getForumById: async (req, res) => {
      try {
        const forumId = req.params.id;
  
        const forum = await Forum.findByPk(forumId, {
          include: Todo,
        });
  
        if (!forum) {
          return res.status(404).json({
            message: "Forum not found",
          });
        }
  
        res.json({
          message: "Successfully retrieved forum by id",
          data: user,
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
          await Forum.create(data);
    
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
  
    deleteForumById: async (req, res) => {
      try {
        const forumId = req.params.id;
  
        const forum = await Forum.findByPk(forumId);
  
        if (!forum) {
          return res.status(404).json({
            message: "Forum not found",
          });
        }
  
        await Forum.destroy();
  
        res.json({
          message: "Successfully deleted forum by id",
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    },
  
    updateForumById: async (req, res) => {
      try {
        const forumId = req.params.id;
  
        const forum = await Forum.findByPk(forumId);
  
        if (!forum) {
          return res.status(404).json({
            message: "Forum not found",
          });
        }
  
        await Forum.update(req.body);
  
        res.json({
          message: "Successfully updated forum by id",
          data: forum,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    },
  };