module.exports = (app) => {
    var value = require("../controllers/teacher.controller");
    // var joi = require("../middlewares/joi.middleware");
    // const { tokenVerify } = require("../middlewares/jwt.middleware");

    //Router for Adding New Teacher
    app.route("/api/teacher").post(value.addTeacher);

    //Router for Adding New Teacher
    app.route("/api/teacher").get(value.findTeacher);

    //Router for Updating Teacher Details
    app.route("/api/teacher/:_id").patch(value.updateTeacher);

    //Router for Deleting Teacher
    app.route("/api/teacher/:_id").delete(value.deleteTeacher);

}
