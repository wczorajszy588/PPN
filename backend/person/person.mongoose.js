const mongoose = require("mongoose");

var personSchema = new mongoose.Schema({
    name: String,
    surname: String,
    secondName: String,
    secondSurname: String,
    dateOfBirth: Date,
    dateOfDeath: Date,
    functions: [{
        name: {
            type: String,
            enum: [
                "piłkarz", 
                "pierwszy trener",
                "asystent trenera",
                "trener bramkarzy",
                "trener przygotowania fizycznego",
                "trener mentalny",
                "skaut",
                "analityk",
                "lekarz",
                "fizjoterapeuta",
                "szef kuchni",
                "kucharz",
                "dietetyk",
                "zaplecze sprzętowe"
            ]
        },
        clubId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "club"
        },
        teamId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "club.teams"
        },
        dateFrom: Date,
        dateTo: Date
    }]
});
var Person = mongoose.model("person", personSchema);

module.exports = Person;