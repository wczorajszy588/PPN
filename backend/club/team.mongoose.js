const mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
    fullName: String,
    shortName: String,
    dateFrom: Date,
    dateTo: Date,
    worldMember: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "world"
    }
});
var Team = mongoose.model("team", teamSchema);

module.exports = {
    teamSchema: teamSchema,
    teamModel: Team 
};