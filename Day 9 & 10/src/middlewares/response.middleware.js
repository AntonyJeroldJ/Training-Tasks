const logger = require('../helpers/logger');
//Response Middleware
var successRes = function successValue(res, results, message, controller) {
    console.log(message)
    return res.status(200).send({ status: 200, results: results, message: message, controller: controller });
};
var errorRes = function errorValue(res, error, message, controller) {
    logger.log('error', error, message, controller);
    return res.status(400).send({ status: 400, error: error, message: message, controller: controller });
};

module.exports = { successRes, errorRes };