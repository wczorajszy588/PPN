const express = require("express");
const userRoute = express.Router();

userRoute.get("/:userId", function(req, res) {
    res.send("Profil użytkownika");
});

const userEditRoute = require("./edit");
userRoute.use("/:userId/edit/", userEditRoute);

module.exports = userRoute;