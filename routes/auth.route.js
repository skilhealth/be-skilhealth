const express = require("express");
const route = express.Router();


const { Login, Logout, Me } = require("../controllers/auth.controller");

route.post("/login", Login);
route.delete("/logout", Logout);
route.get("/me", Me);

module.exports = route;