const express = require("express");
const deleteClubRoute = express.Router();

deleteClubRoute.delete("/", function(req, res) {
    res.send("Delete club request");
});

module.exports = deleteClubRoute;