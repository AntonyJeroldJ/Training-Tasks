var mongoose = require("mongoose");

//Configuring Models 
var { UserSchema } = require("./users.model");


let data = {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false,
    versionKey: false
};
var db = {};

db.userModel = mongoose.model("users", mongoose.Schema(UserSchema, data));

module.exports = db;