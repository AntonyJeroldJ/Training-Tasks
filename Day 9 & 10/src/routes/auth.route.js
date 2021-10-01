module.exports = (app) => {
    var value = require("../controllers/auth.controller");
    var joi = require("../middlewares/joi.middleware");

    //Configured with Index Router

    //Forgot Password Router
    app.route("/api/user/forgotpassword").post(value.forgetPwd);

    //Login Router
    app.route("/api/user/login").post(value.login);

}