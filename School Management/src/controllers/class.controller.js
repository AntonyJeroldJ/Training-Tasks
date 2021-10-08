const db = require("../models/index.model");
const commonApi = require("../helpers/commonApi");
const commonService = require("../helpers/commonService");
var controller = "class";

//Class Creating Controller
exports.createClass = async (req, res) => {
    console.log("Class clled")
    const query = {};
    query.body = req.body;
    query.filter = { "name": req.body.schoolname }
    query.select = { _id: 1 }
    const school_id = await commonService.getOne(req, res, db.SchoolModel, query, controller)
    if (!school_id) return res.send({ status: 401, message: 'School Not Found' });
    query.body.school_id = (school_id._id.toString())
    console.log(query)
    commonApi.post(req, res, db.ClassModel, query, controller);
}

//Class finding Controller
exports.findClass = async (req, res) => {
    const query = {};
    query.filter = req.query;
    query.select = {};
    query.sort = {};
    query.skip = req.query.skip || 0;
    query.limit = req.query.limit || 20;
    commonApi.get(req, res, db.ClassModel, query, controller);
}

//Class Updating Controller
exports.updateClass = async (req, res) => {
    const query = {};
    query.filter = req.params;
    query.body = req.body;
    console.log(query)
    commonApi.update(req, res, db.ClassModel, query, controller);
}

//Class Deleting Controller
exports.deleteClass = async (req, res) => {
    const query = {};
    query.filter = req.params;
    commonApi.delete(req, res, db.SchoolModel, query, controller);
}

