require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./users/user.router")

app.use(express.json());
app.use("/user", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("server up and running", process.env.APP_PORT);
});