const express = require('express');
const route = express.Router()

const forumRoute = require('./forum-route')

route.use("/forum", forumRoute)

module.exports = route