const mongoose = require("mongoose");
const userSchema = require("./mongooseUserSchema");

const model = mongoose.model;
const User = model("User", userSchema); 

module.exports = User;