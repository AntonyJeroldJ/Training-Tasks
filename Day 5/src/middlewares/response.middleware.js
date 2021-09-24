const logger = require('../helpers/logger');
console.log("res_midd_1");

var successRes = function successValue(res, results, message, controller) {
    console.log("res_midd_2");
    return res.status(200).send({ status: 200, results: results, message: message, controller: controller });

}; console.log("res_midd_3");
var errorRes = function errorValue(res, error, message, controller) {
    console.log("res_midd_4");
    logger.log('error', error, message, controller);
    return res.status(400).send({ status: 400, error: error, message: message, controller: controller });
};

module.exports = { successRes, errorRes };