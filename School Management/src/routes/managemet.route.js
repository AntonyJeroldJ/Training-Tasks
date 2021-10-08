module.exports = (app) => {
    var value = require("../controllers/management.controller");
    var joi = require("../middlewares/joi.middleware");

    //Get Schools with Teachers and Students    
    app.route("/api/sms/schoolwithall").get(value.schoolWithAll);

    //Get Schools with Teachers
    app.route("/api/sms/schoolwithteacher").get(value.schoolWithTeacher);

    //Get Schools with Teachers with Students
    app.route("/api/sms/teacherwithstudent").get(value.teacherWithStudents);

}