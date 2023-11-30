const express = require('express')
const { getAllForum, getForumById, addForum, updateForumById, deleteForumById } = require('../controllers/forum-controller')
const tokenVerify = require('../middleware/auth')
const route = express.Router()

route.get("/", getAllForum)
route.post("/",tokenVerify ,addForum)
route.put("/:id",tokenVerify ,updateForumById)

module.exports = route