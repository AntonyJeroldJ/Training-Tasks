module.exports = (app) => {
    var value = require("../controllers/sheet.controller");
    var joi = require("../middlewares/joi.middleware");

    //Configured with Index Router

    //Sheet Router
    app.route("/api/user/sheet").post(value.sheet);



}