const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        match: [/^\S+$/, "Nieprawidłowe imię"]
    },
    lastName: {
        type: String,
        match: [/^\S+$/, "Nieprawidłowy pseudonim"]
    },
    nickName: {
        type: String,
        required: true,
        match: [/^\S+$/, "Nieprawidłowy pseudonim"]
    },
    email: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "Nieprawidłowy adres email"],
        unique: true
    }
});

module.exports = userSchema;