const express = require("express");
const userLoginRoute = express.Router();

userLoginRoute.get("/", function(req, res) {
    res.render("login", {});
});
userLoginRoute.post("/", function(req, res) {
    console.log(req.body);
    res.send(req.body.login);
});

module.exports = userLoginRoute;