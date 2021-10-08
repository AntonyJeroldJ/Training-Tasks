const db = require("../models/index.model");
const commonApi = require("../helpers/commonApi");
const commonService = require("../helpers/commonService");
var controller = "sms";

//Respon schools with teachers Controller
exports.schoolWithTeacher = async (req, res) => {
    const query = [
        { $match: { name: req.body.schoolname } },
        {
            $lookup:
            {
                from: "teachers",

                pipeline: [
                    { $match: { schoolname: req.body.schoolname } }
                ],
                as: "Teachers"
            }
        }

    ];

    let teachersd = await commonService.aggregate(req, res, db.SchoolModel, query, controller)
    query.result = teachersd
    query.message = "List Successfull"
    commonApi.responseOnly(res, 'success', query, controller)

}

//Display schools with teachers and students Controller
exports.schoolWithAll = async (req, res) => {
    let query
    if (req.body.class) {
        console.log("hello")
        query = [

            { $match: { name: req.body.schoolname } },
            {
                $lookup:
                {
                    from: "teachers",
                    pipeline: [{
                        $match: { schoolname: req.body.schoolname, class: req.body.class }
                    },
                    {
                        $lookup: {
                            from: "students",

                            pipeline: [
                                { $match: { schoolname: req.body.schoolname, class: req.body.class } }
                            ],

                            as: "Students"

                        }
                    }
                    ],
                    as: "teachers"
                }
            }

        ];
    }
    else {

        query = [

            { $match: { name: req.body.schoolname } },
            {
                $lookup:
                {
                    from: "teachers",
                    pipeline: [{
                        $match: { schoolname: req.body.schoolname }
                    },
                    {
                        $lookup: {
                            from: "students",

                            pipeline: [
                                { $match: { schoolname: req.body.schoolname } }
                            ],

                            as: "Students"

                        }
                    }
                    ],
                    as: "teachers"
                }
            }

        ];
    }

    let teachersd = await commonService.aggregate(req, res, db.SchoolModel, query, controller)
    query.result = teachersd
    query.message = "List Successfull"
    commonApi.responseOnly(res, 'success', query, controller)

}

//Display Teachers with Students Controller
exports.teacherWithStudents = async (req, res) => {
    console.log(req.body)
    const query = [
        { $match: { schoolname: req.body.schoolname, class: req.body.class } },
        {
            $lookup:
            {
                from: "students",

                pipeline: [
                    { $match: { schoolname: req.body.schoolname, class: req.body.class } }
                ],
                as: "Students"
            }
        }

    ]
    let teachersd = await commonService.aggregate(req, res, db.TeacherModel, query, controller)
    query.result = teachersd
    query.message = "List Successfull"
    commonApi.responseOnly(res, 'success', query, controller)

}

