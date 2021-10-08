const db = require("../models/index.model");
const commonApi = require("../helpers/commonApi");
const saltdata = require("../helpers/saltData");
const commonService = require("../helpers/commonService");
var controller = "user";

//Student Creating Controller
exports.addStudent = async (req, res) => {
    const query = {};
    query.filter = { "schoolname": req.body.schoolname, "class": req.body.class };
    query.select = { name: 1 };
    const result = await commonService.getOne(req, res, db.ClassModel, query, controller)
    console.log(result)
    if (!result) return res.send({ status: 401, message: 'School or class Not Found ' });
    const school_id = result._id.toString()
    query.body = req.body
    query.body.school_id = school_id;
    commonApi.post(req, res, db.StudentModel, query, controller);
}

//Student finding Controller
exports.findStudent = async (req, res) => {
    const query = {};
    query.filter = req.query;
    query.select = {};
    query.sort = {};
    query.skip = req.query.skip;
    query.limit = req.query.limit;
    commonApi.get(req, res, db.StudentModel, query, controller);
}

//Student Updating Controller
exports.updateStudent = async (req, res) => {
    const query = {};
    query.filter = req.params;
    query.body = req.body;
    commonApi.update(req, res, db.StudentModel, query, controller);
}

//Student Deleting Controller
exports.deleteStudent = async (req, res) => {
    const query = {};
    query.filter = req.params;
    commonApi.delete(req, res, db.StudentModel, query, controller);
}

