module.exports = (app) => {
    var value = require("../controllers/student.controller");
    var joi = require("../middlewares/joi.middleware");

    //Router for Adding New Student
    app.route("/api/student").post(value.addStudent);

    //Router for Get Student Details
    app.route("/api/student").get(value.findStudent);

    //Router for Updating Student Details
    app.route("/api/student/:_id").patch(value.updateStudent);

    //Router for Deleting Student
    app.route("/api/student/:_id").delete(value.deleteStudent);





}
