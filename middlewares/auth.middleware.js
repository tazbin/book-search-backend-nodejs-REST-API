// imports
const {
    registerValidationSchema,
    loginValidationSchema
} = require('../helpers/user_validation.helper');
const ObjectId = require('mongoose').Types.ObjectId;
const createErrors = require('http-errors');


// validating mongoose userId
const validateUserId = async (req, res, next) => {
    try {
        
        if( !ObjectId.isValid(req.body.userId) ) {
            throw createErrors.BadRequest('Invalid userId!');
        }
        next();

    } catch (err) {
        next(err);
    }
}

// middleware to validate register user data
const validateRegisterData = async (req, res, next) => {
    try {
        
        await registerValidationSchema.validateAsync(req.body);
        next();

    } catch (err) {
        err.name == 'ValidationError' ? 
        next(createErrors.BadRequest(err.message)) :
        next(err);
    }
}

// middleware to validate login user data
const validateLoginData = async (req, res, next) => {
    try {
        
        await loginValidationSchema.validateAsync(req.body);
        next();

    } catch (err) {
        err.name == 'ValidationError' ? 
        next(createErrors.BadRequest(err.message)) :
        next(err);
    }
}

// exports
module.exports = {
    validateUserId,
    validateRegisterData,
    validateLoginData
};