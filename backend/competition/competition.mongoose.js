const mongoose = require("mongoose");

var competitionSchema = new mongoose.Schema({
    fullName: String,
    shortName: String,
    dateFrom: Date,
    dateTo: Date,
    phases: [{
        type: {
            type: String,
            enum: ["liga", "puchar"]   
        },
        fullName: String,
        dateFrom: Date,
        dateTo: Date,
        teams: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "club.teams"
        }]
    }],
    priorityLevel: { //according to this, element is displayed
        type: Number,
        match: /^[1-4]$/
    }
});

var Competition = mongoose.model("competition", competitionSchema);

module.exports = {
    competitionSchema: competitionSchema,
    competitionModule: Competition
}