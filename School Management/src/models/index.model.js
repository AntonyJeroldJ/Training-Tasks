var mongoose = require("mongoose");

//Configuring Models 
var { UserSchema } = require("./users.model");
var { SchoolSchema } = require("./school.model");
var { TeacherSchema } = require("./teacher.model");
var { StudentSchema } = require("./student.model");
var { ClassSchema } = require("./class.model");

let data = {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: false,
    versionKey: false
};
var db = {};

db.userModel = mongoose.model("users", mongoose.Schema(UserSchema, data));
db.SchoolModel = mongoose.model("schools", mongoose.Schema(SchoolSchema, data));
db.TeacherModel = mongoose.model("teachers", mongoose.Schema(TeacherSchema, data));
db.StudentModel = mongoose.model("students", mongoose.Schema(StudentSchema, data));
db.ClassModel = mongoose.model("classes", mongoose.Schema(ClassSchema, data));

module.exports = db;