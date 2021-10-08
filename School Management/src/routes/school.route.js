module.exports = (app) => {
    var value = require("../controllers/school.controller");
    // var joi = require("../middlewares/joi.middleware");
    // const { tokenVerify } = require("../middlewares/jwt.middleware");

    //Router for Adding New School
    app.route("/api/school").post(value.createSchool);

    //Router for Get School Details
    app.get("/api/school", value.findSchool);

    //Router for Updating School Details
    app.patch("/api/school/:_id", value.updateSchool);

    //Router for Deleting School
    app.delete("/api/school/:_id", value.deleteSchool);


}
