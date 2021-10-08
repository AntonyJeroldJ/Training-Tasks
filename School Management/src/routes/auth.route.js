module.exports = (app) => {
    var value = require("../controllers/auth.controller");
    var joi = require("../middlewares/joi.middleware");

    //Forgot Password Router
    app.route("/api/user/forgotpassword").post(value.forgetPwd);

    //Password Reset User
    app.route("/api/user/resetpassword").post(value.resetPwd);

    //Login Router
    app.route("/api/user/login").post(value.login);

    //Account Verify Router
    app.route("/api/user/verifyaccount").post(value.verifyAccount);

}