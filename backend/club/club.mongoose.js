const mongoose = require("mongoose");
const teamSchema = require("./team.mongoose").teamSchema;

var clubSchema = new mongoose.Schema({
    name: [{
        commonName: { //eg. "Piast Gliwice"
            type: String,
            required: true
        },
        shortName: String, //eg. "Piast" (for narrows)
        hudName: { ///eg. "PIA"
            type: String,
            match: [/^[A-Z]{3}$/]
        },
        officialName: {// eg. "Gliwicki Klub Sportowy Piast Spółka Akcyjna"
            type: String
        },
        dateFrom: Date
    }],
    founded: Date,
    teams: [teamSchema]
});

var Club = mongoose.model("club", clubSchema);

module.exports = {
    clubSchema: clubSchema,
    clubModel: Club
};