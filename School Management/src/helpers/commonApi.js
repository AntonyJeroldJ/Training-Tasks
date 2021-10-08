const { errorMsg, successMsg } = require("../helpers/httpMessages");
const { successRes, errorRes } = require("../middlewares/response.middleware");

//Supports Post Method
exports.post = async (req, res, model, query, controller) => {
    try {
        var results = await model.insertMany(query.body);
        successRes(res, results, successMsg.create, controller);
    } catch (error) {
        errorRes(res, error, errorMsg.create, controller);
    }
}

//Supports Get Method
exports.get = async (req, res, model, query, controller) => {
    try {
        var results = await model.find(query.filter).select(query.select).sort(query.sort).skip(query.skip).limit(query.limit);

        successRes(res, results, successMsg.list, controller);
    } catch (error) {
        errorRes(res, error, errorMsg.list, controller);
    }
}

//Supports Update Method
exports.update = async (req, res, model, query, controller) => {
    try {
        var results = await model.updateOne(query.filter, query.body);
        successRes(res, results, successMsg.update, controller);
    } catch (error) {
        errorRes(res, error, errorMsg.update, controller);
    }
}

//Supports Delete Method
exports.delete = async (req, res, model, query, controller) => {
    try {
        var results = await model.deleteOne(query.filter);
        successRes(res, results, successMsg.delete, controller);
    } catch (error) {
        errorRes(res, error, errorMsg.delete, controller);
    }
}

//Supports Any Response call
exports.responseOnly = async (res, type, query, controller) => {
    if (type == "success") {
        successRes(res, query.result, query.message, controller);
    } else {
        errorRes(res, query.error, query.message, controller);
    }
}



