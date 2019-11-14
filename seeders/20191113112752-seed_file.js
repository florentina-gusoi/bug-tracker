'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Projects',
            [
                {
                    projectName: 'project One',
                    status: 'active'
                },
                {
                    projectName: 'project Two',
                    status: 'completed'
                },
                {
                    projectName: 'project Three',
                    status: 'released'
                },
                {
                    projectName: 'project -1',
                    status: 'archived'
                },
                {
                    projectName: 'project 0',
                    status: 'on hold'
                },
                {
                    projectName: 'project -1.0',
                    status: 'cancelled'
                }
            ], {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Projects', null, {});
    }
};
