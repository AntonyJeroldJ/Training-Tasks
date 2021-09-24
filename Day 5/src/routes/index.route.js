const app = require('express')();
const { tokenVerify } = require("../middlewares/jwt.middleware");

require("./auth.route")(app);
console.log("index_route_1");
module.exports = app;

// Incase of token verification needed, Kindly use
// app.use(tokenVerify)