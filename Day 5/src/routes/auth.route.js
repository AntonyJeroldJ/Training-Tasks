module.exports = (app) => {
    var value = require("../controllers/auth.controller");
    var joi = require("../middlewares/joi.middleware");
    console.log("auth_routers_1");
    app.route("/api/user").get(value.findUser).post(value.createUser).patch(value.updateUser).delete(value.deleteUser);
}