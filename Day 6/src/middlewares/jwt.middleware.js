const jwt = require("jsonwebtoken");
const { errorMsg } = require("../helpers/httpMessages");

var Jkey = process.env.JWT_SECRET_KEY;

exports.tokenVerify = async (req, res, next) => {
    try {
        var bearerToken = req.headers['authorization'].split(' ')[1];
        if (!bearerToken) throw errorMsg.invalidToken;

        await jwt.verify(bearerToken, key, (err, user) => {
            if (user) {
                req['user'] = user.data;
            } else {
                throw error;
            }
        });
        next();
    } catch (error) {
        return res.send({ status: 401, message: errorMsg.invalidToken });
    }
}

exports.generateToken = async (data, expire) => {
    try {
        console.log(data + expire)
        return jwt.sign(data, Jkey.toString())
    } catch (error) {
        return false;
    }
}

