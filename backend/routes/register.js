const express = require("express");
const userRegisterRoute = express.Router();

userRegisterRoute.get("/", function(req, res) {
    res.send("User registration form");
});

userRegisterRoute.post("/", function(req, res) {
    res.send("User registration request to server");
})

module.exports = userRegisterRoute;