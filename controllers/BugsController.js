const models = require('../models');

const BugsController = {
    show: (req, res) => {
        models
            .Bug
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
            .Bug
            .findAll()
            .then(data => res.send(data));

    },
    create: (req, res) => {
        const body = req.body;
        models
            .Bug
            .create({
                description: body.description,
                projectId: body.projectId
            })
            .then(bug => {
                return res.send(bug);
            });
    },
    update: (req, res) => {
        const body = req.body;
        const id = req.params.id;
        models
            .Bug
            .update(body, {where: {id: id}})
            .then(updated => {
                models
                    .Bug
                    .findByPk(id)
                    .then(data => res.send(data));
            });
    },

    delete: (req, res) => {
        const id = req.params.id;
        models
            .Bug
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

module.exports = BugsController;
