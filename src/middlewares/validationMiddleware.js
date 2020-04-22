const Joi = require("@hapi/joi");

const schemaBody = Joi.object({
    nombre: Joi.string().alphanum().min(3).max(15).required(),
    edad: Joi.number().optional()
});

async function validateBody(req, res, next) {
    try {
        await schemaBody.validateAsync(req.body);
        next();
    }
    catch (err) {
        res.status(400).json(err)
    }
}

module.exports = validateBody;