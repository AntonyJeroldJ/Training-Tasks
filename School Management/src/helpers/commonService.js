const { errorMsg, successMsg } = require("../helpers/httpMessages");
const { successRes, errorRes } = require("../middlewares/response.middleware");

exports.getOne = async (req, res, model, query, controller) => {
    try {
        var results = await model.findOne(query.filter).select(query.select);
        return results;
    } catch (error) {
        errorRes(res, error, errorMsg.list, controller);
    }
}

//Supports Post Method
exports.post = async (req, res, model, query, controller) => {
    try {
        var results = await model.insertMany(query.body);
        return results
    } catch (error) {
        errorRes(res, error, errorMsg.create, controller);
    }
}

//Supports Get Method
exports.get = async (req, res, model, query, controller) => {
    try {
        var results = await model.find(query.filter).select(query.select).sort(query.sort).skip(query.skip).limit(query.limit);
        return results
    } catch (error) {
        errorRes(res, error, errorMsg.list, controller);
    }
}

//Supports Update Method
exports.update = async (req, res, model, query, controller) => {
    try {
        var results = await model.updateOne(query.filter, query.body);
        return results
    } catch (error) {
        errorRes(res, error, errorMsg.update, controller);
    }
}

//Supports UpdateMany Method
exports.updateall = async (req, res, model, query, controller) => {
    try {
        var results = await model.updateMany(query.filter, query.body);
        return results
    } catch (error) {
        errorRes(res, error, errorMsg.update, controller);
    }
}

//Supports DeleteOne Method
exports.delete = async (req, res, model, query, controller) => {
    try {
        var results = await model.deleteOne(query.filter);
        return results
    } catch (error) {
        errorRes(res, error, errorMsg.delete, controller);
    }
}

//Supports DeleteMany Method
exports.deleteall = async (req, res, model, query, controller) => {
    try {
        var results = await model.deleteMany(query.filter);
        return results
    } catch (error) {
        errorRes(res, error, errorMsg.update, controller);
    }
}

//Supports Aggregate Method
exports.aggregate = async (req, res, model, query, controller) => {
    try {
        var results = await model.aggregate(query);
        return results;
    } catch (error) {
        errorRes(res, error, errorMsg.list, controller);
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

