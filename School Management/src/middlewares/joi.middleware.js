const Joi = require('joi');

// Main method to validate values
async function validate(req, res, key, next) {
    const schema = Joi.object(key);

    const options = {
        abortEarly: true,
        allowUnknown: true,
        stripUnknown: false
    };
    var dataType = { ...req.body, ...req.params };
    const { error, value } = schema.validate(dataType, options);

    if (error) {
        return res.status(406).send({ status: 406, message: error.details[0].message });
    } else {
        req.body = req.body || {};
        req.params = req.params || {};
        next();
    }
};


// Common & reuseable methods
exports.emailParam = async (req, res, next) => {
    var key = {
        email: Joi.string().email().required()
    }
    return validate(req, res, key, next);
};

exports.idParam = async (req, res, next) => {
    var key = {
        id: Joi.string().guid().required()
    }
    return validate(req, res, key, next);
};

exports.user = async (req, res, next) => {
    let key = {
        _id: Joi.string(),
        username: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }
    return validate(req, res, key, next);
};