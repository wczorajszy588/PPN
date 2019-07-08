const express = require("express");
const appRoute = express.Router();

appRoute.get("/", function(req, res) {
    res.send("root");
});

const loginRoute = require("./login");
const registerRoute = require("./register");
const userRoute = require("./../user/routes/index");
const clubRoute = require("./../club/routes/index");
const personRoute = require("./../person/routes/index");

appRoute.use("/login", loginRoute);
appRoute.use("/register", registerRoute);
appRoute.use("/user", userRoute);
appRoute.use("/club", clubRoute);
appRoute.use("/person", personRoute);

module.exports = appRoute;