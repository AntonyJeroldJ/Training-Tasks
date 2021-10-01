const app = require('express')();
const { tokenVerify } = require("../middlewares/jwt.middleware");

//Authentication Router is configured
require("./auth.route")(app);

//User Control Router Configured
require("./user.route")(app);

//Upload Router Configuration
require("./upload.route")(app);

//Sheet Router Configuration
require("./sheet.route")(app);


module.exports = app;

// Incase of token verification needed, Kindly use 
// app.use(tokenVerify)