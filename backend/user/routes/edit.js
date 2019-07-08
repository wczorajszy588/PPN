const express = require("express");
const userEditRoute = express.Router();

userEditRoute.put("/", function(req, res) {
    res.send("Żądanie edycji użytkownika");
});

userEditRoute.get("/", function(req, res) {
    res.send("Formularz edycji użytkownika"  + req.body.userId);
});

module.exports = userEditRoute;