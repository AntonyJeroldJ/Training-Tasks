const { errorMsg, successMsg } = require("../helpers/httpMessages");
const { successRes, errorRes } = require("../middlewares/response.middleware");
console.log("commonapi_1 ");
exports.post = async (req, res, model, query, controller) => {
    try {
        var results = await model.insertMany(query.body);
        successRes(res, results, successMsg.create, controller);
    } catch (error) {
        errorRes(res, error, errorMsg.create, controller);
    }
}
console.log("commonapi_1 ");
exports.get = async (req, res, model, query, controller) => {
    try {
        console.log("commonapi_1 ");
        var results = await model.find(query.filter).select(query.select).sort(query.sort).skip(query.skip).limit(query.limit);
        console.log(results);
        successRes(res, results, successMsg.list, controller);
    } catch (error) {
        errorRes(res, error, errorMsg.list, controller);
    }
}
console.log("commonapi_1 ");
exports.update = async (req, res, model, query, controller) => {
    try {

        console.log("commonfdfapi_1 ");
        var results = await model.updateOne(query.filter, query.body);
        successRes(res, results, successMsg.update, controller);
    } catch (error) {
        errorRes(res, error, errorMsg.update, controller);
    }
}
console.log("commonapi_1 ");
exports.delete = async (req, res, model, query, controller) => {
    try {
        var results = await model.deleteOne(query.filter);
        successRes(res, results, successMsg.delete, controller);
    } catch (error) {
        errorRes(res, error, errorMsg.delete, controller);
    }
}
console.log("commonapi_1 ");
exports.returnResult = async (query) => {
    var results = await query;
    return results
}
console.log("commonapi_1 ");
exports.responseOnly = async (res, type, query, controller) => {
    if (type == "success") {
        successRes(res, query.results, query.message, controller);
    } else {
        errorRes(res, query.error, query.message, controller);
    }
}
