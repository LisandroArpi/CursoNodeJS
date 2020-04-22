const Joi = require("@hapi/joi");

const schemaBody = Joi.object({
    nombre: Joi.string().alphanum().min(3).max(15).required().messages({
        'string.base': `"nombre" debe ser un 'texto'`, 
        'string.empty': '"nombre" no puede estar vacio'
    }),
    edad: Joi.number().optional(),
    email: Joi.string().email().required(),
    año: Joi.number().integer().min(1900).max(2020).required()
});

async function validateBody(req, res, next) {
    try {
        await schemaBody.validateAsync(req.body);
        next();
    }
    catch (err) {
        res.status(400).json({
            "mensaje": err.details[0].message
        })
    }
}

module.exports = validateBody;