const db = require("../models/index.model");
const jwt = require("jsonwebtoken");
const commonApi = require("../helpers/commonApi");
const nodemailer = require("nodemailer");
const { errorMsg, successMsg } = require("../helpers/httpMessages");
const { successRes, errorRes } = require("../middlewares/response.middleware");
const { tokenVerify, generateToken } = require("../middlewares/jwt.middleware");
var mongoose = require("mongoose");
User = mongoose.model('jerold');


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

// exports.login = async (req, res) => {
//     const query = {};
//     query.filter = req.query;
//     query.select = {};
//     query.sort = {};
//     query.skip = req.query.skip;
//     query.limit = req.query.limit;
//     console.log("commonapi_1 s");
//     set = commonApi.get(req, res, db.authModel, query, controller);

// }

exports.login = function (req, res) {
    token = generateToken(req.body['username'] + req.body['password']);
    console.log(token)
    commonApi.post(req, res, token, controller);

}

exports.sentemail = async (req, res) => {
    console.log("its working dude");
    const query = {};
    query.filter = req.query;
    query.body = req.body;
    results = "Email sent to " + query.body['toemail'];
    console.log(query.body)
    console.log(query.body['open'])
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'programmeranto@gmail.com',
            pass: 'jjfamily',
        },
    });

    let info = await transporter.sendMail({
        from: '"Programmer Anto" programmeranto@gmail.com',
        to: query.body['toemail'],
        cc: query.body['cc'],
        bcc: query.body['bcc'],
        subject: query.body['subject'],
        html: "Hello " + query.body['name'] + " !!! <br> Welcome to SquashApps.... Kindly verify your account with below verification code <br> Verifiaction Code: " + Math.floor((Math.random() * 10000) + 1) + "<br>" + query.body['content'] + "<b><br>Thanks & Regards <br>SquashApps Pvt Ltd<br>Phone : 1235478965</b>", // html body
    });

    await transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            errorRes(res, error, errorMsg.emailsend, controller);
        } else {
            console.log("Server is ready to take our messages");
            successRes(res, results, successMsg.emailsend, controller);
        }
    });


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