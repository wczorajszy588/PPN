const express = require("express");
const editPersonRoute = express.Router();

editPersonRoute.get("/", function(req, res) {
    res.send("Edit football person form");
});

editPersonRoute.put("/", function(req, res) {
    res.send("Edit football person server request");
});

module.exports = editPersonRoute;