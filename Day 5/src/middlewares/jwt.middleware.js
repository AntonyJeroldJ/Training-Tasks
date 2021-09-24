const jwt = require("jsonwebtoken");
const { errorMsg } = require("../helpers/httpMessages");

var Jkey = process.env.JWT_SECRET_KEY;
console.log("jwt_1");
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
        }); console.log("jwt_2");
        next();
    } catch (error) {
        return res.send({ status: 401, message: errorMsg.invalidToken });
    }
}
console.log("jwt_3");
exports.generateToken = async (data, expire) => {
    try {
        console.log("jwt_4");
        return (expire) ? jwt.sign({ data }, Jkey.toString(), { expiresIn: expire.toString() }) : jwt.sign(data, Jkey.toString())
    } catch (error) {
        return false;
    }
}

