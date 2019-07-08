const mongoose = require("mongoose");
const Club = require("../club.mongoose").clubModel;

function addClubToDatabase(clubJSON) {
    return Club.create({
        name: [{
            commonName,
            shortName,
            hudName,
            officialName,
            dateFrom
        }],
        founded,
        teams: [{
            fullName,
            dateFrom
        }]
    } = clubJSON || {});
}
module.exports = addClubToDatabase;