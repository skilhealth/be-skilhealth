const express = require("express");
const route = express.Router();


const { Login, Logout } = require("../controllers/auth.controller");

route.post("/login", Login);
route.delete("/logout", Logout);


module.exports = route;