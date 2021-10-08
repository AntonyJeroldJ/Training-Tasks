module.exports = (app) => {
    var value = require("../controllers/class.controller");
    // var joi = require("../middlewares/joi.middleware");
    // const { tokenVerify } = require("../middlewares/jwt.middleware");

    //Router for Adding New Class
    app.route("/api/class").post(value.createClass);

    //Router for Get Class Details
    app.get("/api/class", value.findClass);

    //Router for Updating Class Details
    app.patch("/api/class/:_id", value.updateClass);

    //Router for Deleting Class
    app.delete("/api/class/:_id", value.deleteClass);


}
