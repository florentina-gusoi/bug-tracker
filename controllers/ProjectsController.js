const models = require('../models');

const ProjectsController = {
    show: (req, res) => {
        models
            .Project
            .findByPk(req.params.id)
            .then(data => {
                if (!data) {
                    return res.status(404).send({});
                }

                return res.send(data);
            })
    },
    index: (req, res) => {
        models
            .Project
            .findAll()
            .then(data => res.send(data));

    },
    create: (req, res) => {
        const body = req.body;
        models
            .Project
            .create({
                projectName: body.projectName,
                status: body.status
            })
            .then(project => {
                return res.send(project);
            });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models
            .Project
            .update(body, {where: {id: id}})
            .then(updated => {
                models
                    .Project
                    .findByPk(id)
                    .then(data => res.send(data));
            });
    },
    delete: (req, res) => {
        const id = req.params.id;
        models
            .Project
            .destroy({
                where: {
                    id: id,
                }
            })
            .then(data => {
                if (data)
                    return res.send(true);
                else
                    return res.send(false);
            })
    },
};

module.exports = ProjectsController;
