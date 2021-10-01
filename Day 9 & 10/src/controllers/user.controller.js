const db = require("../models/index.model");
const commonApi = require("../helpers/commonApi");
var controller = "user";
const saltdata = require("../helpers/saltdata");

//User Creating Controller
exports.createUser = async (req, res) => {
    const query = {};
    const pass = await saltdata.encrypt(req.body.password);
    req.body.password = pass;
    query.body = req.body;
    commonApi.post(req, res, db.userModel, query, controller);
}

//User finding Controller
exports.findUser = async (req, res) => {
    const query = {};
    query.filter = req.query;
    query.select = {};
    query.sort = {};
    query.skip = req.query.skip || 0;
    query.limit = req.query.limit || 20;
    commonApi.get(req, res, db.userModel, query, controller);
}

//User Updating Controller
exports.updateUser = async (req, res) => {
    const query = {};
    query.filter = req.query;
    const pass = await saltdata.encrypt(req.body.password);
    req.body.password = pass;
    query.body = req.body;
    commonApi.update(req, res, db.userModel, query, controller);
}

//User Deleting Controller
exports.deleteUser = async (req, res) => {
    const query = {};
    query.filter = req.query;
    commonApi.delete(req, res, db.userModel, query, controller);
}

//User Selective Search Controller
exports.userSearch = async (req, res) => {
    console.log('hi')
    const query = {};
    query.filter = { "email": { $regex: req.params.name } };
    query.select = { _id: 1, username: 1, email: 1, phone: 1 };
    console.log(query)
    commonApi.userget(req, res, db.userModel, query, controller);

}