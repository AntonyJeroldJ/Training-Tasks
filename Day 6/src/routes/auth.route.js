const { tokenVerify, generateToken } = require("../middlewares/jwt.middleware");
module.exports = (app) => {
    var value = require("../controllers/auth.controller");
    var joi = require("../middlewares/joi.middleware");
    console.log("auth_routers_1");
    app.route("/api/user").get(value.findUser).post(value.createUser).patch(value.updateUser).delete(value.deleteUser);
    app.route("/api/user/email").post(value.sentemail);
    app.route("/api/user/login").post(value.login);
}