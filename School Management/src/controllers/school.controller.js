const db = require("../models/index.model");
const commonApi = require("../helpers/commonApi");
const commonService = require("../helpers/commonService");
var controller = "school";

//School Creating Controller
exports.createSchool = async (req, res) => {
    console.log("school clled")
    const query = {};
    query.body = req.body;
    commonApi.post(req, res, db.SchoolModel, query, controller);
}

//School finding Controller
exports.findSchool = async (req, res) => {
    const query = {};
    query.filter = req.query;
    query.select = {};
    query.sort = {};
    query.skip = req.query.skip || 0;
    query.limit = req.query.limit || 20;
    commonApi.get(req, res, db.SchoolModel, query, controller);
}

//School Updating Controller
exports.updateSchool = async (req, res) => {
    const query = {};
    query.filter = req.params;
    query.body = req.body;
    console.log(query)
    commonApi.update(req, res, db.SchoolModel, query, controller);
}

//School Deleting Controller
exports.deleteSchool = async (req, res) => {
    const query = {};
    query.filter = { "school_id": req.params };
    let deletestudents = await commonService.deleteall(req, res, db.StudentModel, query, controller);
    let deleteteacher = await commonService.deleteall(req, res, db.TeacherModel, query, controller);
    query.filter = req.params;
    commonApi.delete(req, res, db.SchoolModel, query, controller);
}

