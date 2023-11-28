const express = require('express')
const { getAllForum, getForumById, addForum, updateForumById, deleteForumById } = require('../controllers/forum-controller')
const route = express.Router()

route.get("/", getAllForum)
route.get("/:id", getForumById)
route.post("/", addForum)
route.put("/:id", updateForumById)
route.delete("/", deleteForumById)

module.exports = route