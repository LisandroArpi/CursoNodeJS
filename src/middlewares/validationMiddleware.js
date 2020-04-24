const Joi = require("@hapi/joi");

const schemaBody = Joi.object({
    nombre: Joi.string().alphanum().min(3).max(15).required().messages({
        'string.base': `"nombre" debe ser un 'texto'`,
        'string.alphanum': "Solo letras y numeros por favor",
        'string.empty': '"nombre" no puede estar vacio'
    }),
    edad: Joi.number().optional(),
    email: Joi.string().email().required(),
    año: Joi.number().integer().min(1900).max(2020).required()
});

const schemaHeader = Joi.object();

const schemaParams = Joi.object();

async function validateRequest(req, res, next) {
    try {
        await schemaBody.validateAsync(req.body);
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = validateRequest;