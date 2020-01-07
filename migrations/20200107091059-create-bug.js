'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Bugs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            projectId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Projects',
                    key: 'id'
                }
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Bugs');
    }
};