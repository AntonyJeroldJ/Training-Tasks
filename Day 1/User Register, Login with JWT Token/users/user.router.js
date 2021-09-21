const router = require("express").Router();

const { application } = require("express");
const { createUser,login, getUsers } = require("./user.controller");



router.post("/",createUser);
router.post("/login", login);
router.get("/", getUsers);


module.exports = router;

