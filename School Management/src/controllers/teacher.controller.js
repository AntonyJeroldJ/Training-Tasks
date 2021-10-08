const db = require("../models/index.model");
const commonApi = require("../helpers/commonApi");
const commonService = require("../helpers/commonService");
var controller = "teacher";

//Teacher Creating Controller
exports.addTeacher = async (req, res) => {
    const query = {};
    query.filter = { "schoolname": req.body.schoolname, "class": req.body.class };
    const result = await commonService.getOne(req, res, db.ClassModel, query, controller)
    if (!result) return res.send({ status: 401, message: 'School or Class Not Found' });
    var school_id = result.school_id.toString()
    var class_id = result._id.toString()
    query.body = req.body
    query.body.school_id = school_id;
    query.body.class_id = class_id;
    const addteacher = await commonService.post(req, res, db.TeacherModel, query, controller);
    teacher_id = addteacher[0]._id.toString()
    console.log(teacher_id)
    query.filter = { "schoolname": req.body.schoolname, "class": req.body.class };
    query.body = { "teacher_id": teacher_id }
    const updateclass = await commonService.updateall(req, res, db.ClassModel, query, controller)
    let type = 'success'
    if (!updateclass) type = 'error'
    query.result = { addteacher }
    query.message = 'Teacher added successfully'
    commonApi.responseOnly(res, type, query, controller)
}

//Teacher finding Controller
exports.findTeacher = async (req, res) => {
    const query = {};
    query.filter = req.query;
    query.select = {};
    query.sort = {};
    query.skip = req.query.skip;
    query.limit = req.query.limit;
    commonApi.get(req, res, db.TeacherModel, query, controller);
}

//Teacher Updating Controller 
exports.updateTeacher = async (req, res) => {
    const query = {};
    query.filter = req.params;
    query.body = req.body;
    commonApi.update(req, res, db.TeacherModel, query, controller);
}

//Teacher Deleting Controller
exports.deleteTeacher = async (req, res) => {
    const query = {};
    query.filter = { "schoolname": req.body.schoolname, "class": req.body.class };
    const result = await commonService.getOne(req, res, db.TeacherModel, query, controller)
    if (!result) return res.send({ status: 401, message: 'Teache Not Found' });
    teacher_id = result._id.toString()
    query.filter = { "teacher_id": teacher_id };
    query.body = { "teacher_id": null }
    const updateclass = await commonService.updateall(req, res, db.ClassModel, query, controller)
    query.filter = req.params;
    commonApi.delete(req, res, db.TeacherModel, query, controller);
}

