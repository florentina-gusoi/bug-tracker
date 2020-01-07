const models = require('../models')

const ProjectsBugsController = {

    show: (req, res) => {
        models
            .Project
            .findAll()
            .then(project => models.Bug.findAll({where: {projectId: req.params.projectId,}}))
            .then(project => {
                return models
                    .Project
                    .findByPk(req.params.projectId, {
                        include: [
                            {
                                model: models.Bug,
                            }
                        ]
                    })
            })
            .then(bugs => res.send(bugs));
    },
    create: (req, res) => {
        const body = req.body;
        models.Bug.create({
            projectId: req.params.projectId,
            description: body.description,
        }).then(bug => {
            return models
                .Project
                .findByPk(req.params.projectId, {
                    include: [
                        {
                            model: models.Bug,
                        }
                    ]
                })
                .then(project => {
                    return res.status(201).send(project);
                });
        });
    },
};
module.exports = ProjectsBugsController;