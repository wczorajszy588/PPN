const express = require("express");
const editClubRoute = express.Router();

editClubRoute.get("/", function(req, res) {
    res.send("Form for club to edit");
});

editClubRoute.put("/", function(req, res) {
    res.send("Send edited club to server");
});

module.exports = editClubRoute;