const World = require("./world.mongoose").worldModel;

function addWorldToDatabase(worldJSON) {
    return World.create({
        name,
        suffix,
        competitionGroups: [{
            name,
            competitions: [{
                competitionId
            }]
        }]
    } = worldJSON || {});
};
module.exports = addWorldToDatabase;