const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
 firstName : {
    type : String
 },
 lastName : {type : String},
 email : {type : String},
 phone : {type : Number},
 message : {type : String},
});

const UsersModul = mongoose.model("senders", UserSchema);

module.exports = UsersModul


