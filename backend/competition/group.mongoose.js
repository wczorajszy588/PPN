const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var competitionGroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    competitions: [{
        competitionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "competition",
            required: true
        }
    }]
});

var CompetitionGroup = mongoose.model("competitionGroup", competitionGroupSchema);

module.exports = {
    competitionGroupSchema: competitionGroupSchema,
    competitionGroupModule: CompetitionGroup
}