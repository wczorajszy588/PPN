const express = require("express");
const addClubRoute = express.Router();

addClubRoute.get("/", function(req, res) {
    res.send("Form for new club");
});

addClubRoute.post("/", function(req, res) {
    res.send("Add new club request");
});

module.exports = addClubRoute;