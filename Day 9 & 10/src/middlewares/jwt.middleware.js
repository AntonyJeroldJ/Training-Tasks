const jwt = require("jsonwebtoken");
const { errorMsg } = require("../helpers/httpMessages");

var Jkey = process.env.JWT_SECRET_KEY;

//Token Verifier
exports.tokenVerify = async (req, res, next) => {
    try {
        var bearerToken = req.headers['authorization'].split(' ')[1];
        if (!bearerToken) throw errorMsg.invalidToken;

        await jwt.verify(bearerToken, Jkey, (err, user) => {
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

//Token Generator
exports.generateToken = async (data, expire) => {
    try {
        return (expire) ? jwt.sign(data.toJSON(), Jkey.toString(), { expiresIn: expire.toString() }) : jwt.sign(data.toJSON(), Jkey.toString())
    } catch (error) {
        return false;
    }
}

