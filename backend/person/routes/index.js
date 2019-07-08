const express = require("express");
const personRoute = express.Router();

personRoute.get("/:personId([a-z0-9]{24})", function(req, res) {
    res.send("Football person profile");
});

const addPersonRoute = require("./add");
const editPersonRoute = require("./edit");

personRoute.use("/add", addPersonRoute);
personRoute.use("/:personId([a-z0-9]{24})/edit", editPersonRoute);

module.exports = personRoute;