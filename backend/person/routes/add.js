const express = require("express");
const addPersonRoute = express.Router();

addPersonRoute.get("/", function(req, res) {
    res.send("Add football person form");
});

addPersonRoute.post("/", function(req, res) {
    res.send("Add football person server request");
});

module.exports = addPersonRoute;