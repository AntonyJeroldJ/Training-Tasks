var mongoose = require("mongoose");
console.log("model_1");
var { authSchema } = require("./auth.model");


let data = {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false,
    versionKey: false
};


var db = {};
db.authModel = mongoose.model("jerold", mongoose.Schema(authSchema, data));


module.exports = db;