// imports
const Joi = require('joi');

// defining user validation schema
const registerValidationSchema = Joi.object({

    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .lowercase()
        .required(),
    
    password: Joi.string()
        .min(3)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

});

// defining login input data schema
const loginValidationSchema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .lowercase()
        .required(),
    
    password: Joi.string()
        .required()

});

// exports
module.exports = {
    registerValidationSchema,
    loginValidationSchema
};