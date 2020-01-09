const jwt = require('jsonwebtoken');
const config = require('../config.js');
const messages = {
    unauthorized: 'You are not authorized to access this resource',
}

module.exports = function (req, res, next) {
    if (!req.headers.authorization) {
        res.status(401).send({
            error: messages.unauthorized,
        });
    } else {
        const tokenToVerify = req.headers.authorization.replace('Bearer ', '');
        jwt.verify(tokenToVerify, config.JWTSECRET, (err, data) => {
            if (err) {
                // Token-ul nu este valid deci raspundem clientului cu un mesaj de eroare si status code
                res.status(401).send({
                    error: messages.unauthorized,
                });
            } else {
                // Token-ul este valid deci request-ul poate continua. Apeland functia next() notificam
                // framework-ul ca poate trece la urmatorul middleware din chain.
                next();
            }
        });
    }
};