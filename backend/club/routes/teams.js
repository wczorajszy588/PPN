const express = require("express");
const clubTeamsRoute = express.Router();

clubTeamsRoute.get("/", function(req, res) {
    res.send("List of all club teams");
});

module.exports = clubTeamsRoute;