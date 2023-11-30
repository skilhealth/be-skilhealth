const express = require("express");
const route = express.Router();


const { Login, Logout, Register } = require("../controllers/auth.controller");

route.post("/register", Register);
route.post("/login", Login);


module.exports = route;