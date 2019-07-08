const mongoose = require("mongoose");
const competitionGroupSchema = require("./group.mongoose").competitionGroupSchema;

const worldSchema = mongoose.Schema({
    name: String,
    suffix: String, //eg. "U19"
    competitionGroups: [competitionGroupSchema]
});

const World = mongoose.model("world", worldSchema);

module.exports = {
    worldSchema: worldSchema,
    worldModel: World
}