const db = require("../models/index.model");
const commonApi = require("../helpers/commonApi");

var controller = "Auth";
console.log("auth_controller_1 ")

exports.createUser = async (req, res) => {
    const query = {};
    query.body = req.body;
    commonApi.post(req, res, db.authModel, query, controller);
}
console.log("auth_controller_2 ")
exports.findUser = async (req, res) => {
    const query = {};
    query.filter = req.query;
    query.select = {};
    query.sort = {};
    query.skip = req.query.skip;
    query.limit = req.query.limit;
    console.log("commonapi_1 s");
    commonApi.get(req, res, db.authModel, query, controller);
}
console.log("auth_controller_3 ")
exports.updateUser = async (req, res) => {
    console.log("fjdfhdj")
    const query = {};
    query.filter = req.query;
    query.body = req.body;
    console.log(query.filter)

    commonApi.update(req, res, db.authModel, query, controller);
}
console.log("auth_controller_4 ")
exports.deleteUser = async (req, res) => {
    const query = {};
    query.filter = req.query;

    commonApi.delete(req, res, db.authModel, query, controller);
}
console.log("auth_controller_5 ")
exports.customize = async (req, res) => {
    const query = {};
    try {
        query.results = {};
        query.message = {};
        type = "success";
        commonApi.responseOnly(res, type, query, controller);
    } catch (error) {
        type = "error";
        query.message = {};
        query.error = {};
        commonApi.responseOnly(res, type, query, controller);

    }
}