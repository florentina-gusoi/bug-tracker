const models = require('../models');

const UsersProjectController = {
    show: (req, res) => {
        models
            .UserProject
            .findAll({include: [models.Project], where: {userId: parseInt(req.params.userId)}})
            .then(data => res.send(data));
    },
    index: (req, res) => {
        models
            .UserProject
            .findAll({include: [models.Project]})
            .then(data => res.send(data));
    },
};
module.exports = UsersProjectController;