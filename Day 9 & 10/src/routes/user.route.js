module.exports = (app) => {
    var value = require("../controllers/user.controller");
    var joi = require("../middlewares/joi.middleware");
    const { tokenVerify } = require("../middlewares/jwt.middleware");

    //Router for Adding New User and to display all users
    app.route("/api/user").post(joi.user, value.createUser).get(tokenVerify, value.findUser);

    //Router for Updating User Details
    app.patch("/api/user/:_id", tokenVerify, joi.user, value.updateUser);

    //Router for Deleting Users
    app.delete("/api/user/:_id", tokenVerify, value.deleteUser);

    //Router for getting Selective user
    app.get("/api/user/:name", tokenVerify, value.userSearch);
}

