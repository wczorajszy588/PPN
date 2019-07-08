const mongoose = require("mongoose");
const UserModel = require("./mongooseUserModel");

function addUserToDatabase(userJSON) {
    return UserModel.create({
        firstName,
        lastName,
        email,
        nickName
    } = userJSON || {});
}
module.exports = addUserToDatabase;