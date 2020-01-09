const models = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config');

const messages = {
    unauthorized: 'Credentials are not valid',
}

const AuthenticationController = {
    login: (req, res) => {
        const body = req.body;
        const providedEmail = body.email;
        const providedPassword = body.password;
        models
            .User
            .findAll({
                where: {
                    email: providedEmail,
                    password: providedPassword,
                }
            })
            .then(data => {
                if (data.length) {
                    // Returnam aici pentru a opri executia scriptului
                    return jwt.sign({}, config.JWTSECRET, (err, token) => {
                        return res.send({
                            token: token,
                        });
                    });
                }

                res
                    .status(401)
                    .send({
                        error: messages.unauthorized,
                    });
            })
    },
};

module.exports = AuthenticationController;