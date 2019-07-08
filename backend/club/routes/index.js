const express = require("express");
const clubRoute = express.Router();

clubRoute.get("/:clubId([a-z0-9]{24})", function(req, res) {
    res.send("Specific club page");
})

const addClubRoute = require("./add");
const deleteClubRoute = require("./delete");
const editClubRoute = require("./edit");
const clubTeamsRoute = require("./teams");
const clubTeamRoute = require("./../team/routes/index");

clubRoute.use("/add", addClubRoute);
clubRoute.use("/:clubId([a-z0-9]{24})/delete", deleteClubRoute);
clubRoute.use("/:clubId([a-z0-9]{24})/edit", editClubRoute);
clubRoute.use("/:clubId([a-z0-9]{24})/teams", clubTeamsRoute);
clubRoute.use("/:clubId([a-z0-9]{24})/team", clubTeamRoute);

module.exports = clubRoute;