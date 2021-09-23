var log4js = require("log4js");
console.log("logger_1 ");

exports.log = function (level, error, message, file) {
    var date = new Date();
    var fileName = (date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()).toString();
    console.log("logger_2 ");
    log4js.configure({
        appenders: { projectName: { type: 'file', filename: 'logs/' + fileName + '.log' } },
        categories: { default: { appenders: ['projectName'], level: level } }
    }); console.log("logger_3 ");
    var logger = log4js.getLogger('projectName');
    if (level === 'error') {
        logger.error(file, error)
    } console.log("logger_4 ");
}