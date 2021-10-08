const express = require("express");
const mongoose = require("mongoose");
const compression = require('compression');
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: path.join(__dirname, ".env") });
const port = process.env.PORT;
const routes = require('./src/routes/index.route');

app.use(compression());
app.use(helmet());
console.log("Server_1")

process.setMaxListeners(0);
process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception Error", error);
});
process.on("unhandledRejection", (error) => {
    console.log("Unhandled Rejection Error", error);
});
console.log("Server 2")
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    retryWrites: false,
});
console.log("Server_3")
mongoose.connection.once("open", (res) => {
    console.log("Connection Done!");
}); console.log("Server_1")
mongoose.connection.on("error", (error) => {
    console.log(("Connection Error!", error));
});
console.log("Server_4")
app.use(cors());
app.use(express.urlencoded({ limit: "2mb", extended: true }));
app.use(express.json({ limit: "2mb" }));

app.all("*", routes);

var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at ', host, port);
}); console.log("Server_5")

module.exports = { server, mongoose };