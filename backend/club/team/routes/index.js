const express = require("express");
const clubTeamRoute = express.Router();

clubTeamRoute.get("/:teamId([0-9]+)", function(req, res) {
    res.send("Specific club team page");
});

const addClubTeamRotue = require("./add");
clubTeamRoute.use("/add", addClubTeamRotue); 

module.exports = clubTeamRoute;