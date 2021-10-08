const db = require("../models/index.model");
const commonService = require("../helpers/commonService");
const commonApi = require("../helpers/commonApi");
const { generateToken } = require("../middlewares/jwt.middleware");
const { sentEmail } = require("../helpers/sentEmail");
const saltdata = require("../helpers/saltData");
var controller = "Auth";

//Login API With JWT
exports.login = async (req, res) => {
    const query = {};
    query.filter = { email: req.body.email };
    const result = await commonService.getOne(req, res, db.userModel, query, controller);
    if (!result) return res.send({ status: 401, message: 'Email Not Found' });
    const pass = await saltdata.decrypt(result.password)
    if (pass != req.body.password) return res.send({ status: 401, message: 'Invalid Password' });
    var token = await generateToken(result);
    let output = { token: token }
    return res.send({ status: 200, message: 'Login Successfull', results: output });
}

// Forgot Password
exports.forgetPwd = async (req, res) => {
    const query = {};
    if (!req.body.otp) {
        var otp = Math.floor(1000 + Math.random() * 9000);
        query.body = req.body
        query.body.otp = otp
        query.filter = { email: query.body['email'] };
        query.select = { name: 1, password: 1, email: 1 };
        let result = await commonService.getOne(req, res, db.userModel, query, controller);
        if (!result) return res.send({ status: 401, message: 'Email Not Found' });
        const otpupdate = commonService.update(req, res, db.userModel, query, controller);
        let emailbody = {
            subject: 'Forgot Password',
            html: `Hello <b>${result.name} .......!<br>Welcom to SquashApps....</b><br>Forgot your password just cool we are here to help you<br> OTP for your password reset is: <b> ${val} </b>`
        }
        var email = await sentEmail(result, emailbody, res)
    }
    else {
        query.body = req.body
        query.body.password = req.body.password
        query.filter = { email: query.body['email'] };
        query.select = { name: 1, password: 1, email: 1, otp: 1 };
        let result = await commonService.getOne(req, res, db.userModel, query, controller);
        if (!result) return res.send({ status: 401, message: 'Email Not Found' });
        if (req.body.otp != result.otp) { return res.send({ status: 401, message: 'Invalid OTP' }); }
        const pass = await saltdata.encrypt(req.body.password);
        query.body.password = pass;
        commonApi.update(req, res, db.userModel, query, controller);
    }
}

//Password Reset With Old Password
exports.resetPwd = async (req, res) => {
    const query = {};
    query.filter = { email: req.body.email };
    query.body = req.body;
    const result = await commonService.getOne(req, res, db.userModel, query, controller);
    if (!result) return res.send({ status: 401, message: 'Email Not Found' });
    const pass = await saltdata.decrypt(result.password)
    if (pass != req.body.oldpassword) return res.send({ status: 401, message: 'Invalid Password' });
    const enpass = await saltdata.encrypt(req.body.password);
    query.body.password = enpass
    commonApi.update(req, res, db.userModel, query, controller);

}

//Verify Account
exports.verifyAccount = async (req, res) => {
    var otp = Math.floor(1000 + Math.random() * 9000);
    const query = {};
    if (!req.body.otp) {
        query.body = req.body
        query.body.otp = otp
        query.filter = { email: query.body['email'] };
        query.select = { name: 1, password: 1, email: 1 };
        let result = await commonService.getOne(req, res, db.userModel, query, controller);
        if (!result) return res.send({ status: 401, message: 'Email Not Found' });
        console.log(query)
        const otpupdate = commonService.update(req, res, db.userModel, query, controller);
        let emailbody = {
            subject: 'Account Verification',
            html: `Hello <b>${result.name} .......!<br>Welcom to SquashApps....</b><br>Kindly Verify Your Your Account<br> OTP for your Account Verification is: <b> ${val} </b>`
        }
        var email = await sentEmail(result, emailbody, res)
    }
    else {
        query.body = req.body
        query.body.verified = "yes"
        query.filter = { email: query.body['email'] };
        query.select = { name: 1, password: 1, email: 1, otp: 1 };
        let result = await commonService.getOne(req, res, db.userModel, query, controller);
        if (!result) return res.send({ status: 401, message: 'Email Not Found' });
        if (req.body.otp != result.otp) { return res.send({ status: 401, message: 'Invalid OTP' }); }
        commonApi.update(req, res, db.userModel, query, controller);
    }


}


