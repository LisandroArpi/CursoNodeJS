function validateError(error, req, res, next) {
    res.status(400).json({
        "code": "usr_409",
        "mensaje": error.details[0].message
    });
}

module.exports = validateError;