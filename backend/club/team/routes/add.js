const express = require("express");
const addClubTeamRoute = express.Router();

addClubTeamRoute.get("/", function(req, res) {
    res.send("Form for new club team");
});

addClubTeamRoute.post("/", function(req, res) {
    res.send("Add new club team request");
});

module.exports = addClubTeamRoute;