//Return Searched Single user 
exports.rgetuser = async (req, res, model, query, controller) => {
    try {
        var results = await model.findOne(query.filter).select(query.select);
        return results;
    } catch (error) {
        errorRes(res, error, errorMsg.list, controller);
    }
}