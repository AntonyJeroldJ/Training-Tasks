const db = require("../models/index.model");
const commonService = require("../helpers/commonService");
const { generateToken } = require("../middlewares/jwt.middleware");
const { sentEmail } = require("../helpers/sentemail");
const saltdata = require("../helpers/saltdata");
var controller = "Auth";

//Login API With JWT
exports.login = async (req, res) => {
    const query = {};
    query.filter = { email: req.body.email };
    const result = await commonService.rgetuser(req, res, db.userModel, query, controller);
    if (!result) return res.send({ status: 401, message: 'Email Not Found' });
    const pass = await saltdata.decrypt(result.password)
    if (pass != req.body.password) return res.send({ status: 401, message: 'Invalid Password' });
    var token = await generateToken(result);
    let output = { token: token }
    return res.send({ status: 200, message: 'Login Successfull', results: output });
}

// Forgot Password
exports.forgetPwd = async (req, res) => {
    console.log('fP Called')
    const query = {};
    query.body = req.body
    query.filter = { email: query.body['email'] };
    query.select = { name: 1, password: 1, email: 1 };
    let result = await commonService.rgetuser(req, res, db.userModel, query, controller);
    if (!result) return res.send({ status: 401, message: 'Email Not Found' });
    let pass = await saltdata.decrypt(result.password);
    result.password = pass;
    let emailbody = {
        subject: 'Forgot Password',
        html: `Hello <b>${result.name} .......!<br>Welcom to SquashApps....</b><br>Forgot your password just cool we are here to help you<br> Your password is: <b> ${result.password} </b>`
    }
    var email = await sentEmail(result, emailbody, res)

}
