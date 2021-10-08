const app = require('express')();
// const { tokenVerify } = require("../middlewares/jwt.middleware");

//Authentication Router is configured
require("./auth.route")(app);

//User Control Router Configured
require("./user.route")(app);

//School Router Configured
require("./school.route")(app);

//Teacher Router Configured
require("./teacher.route")(app);

//Student Router Configured
require("./student.route")(app);

//SMS Router Configured
require("./management.route")(app);

//Class Router Configured
require("./class.route")(app);

module.exports = app;

