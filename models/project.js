'use strict';
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        projectName: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        timestamps: false //to stop the model from requiring createdAt and updatedAt columns
    });
    Project.associate = function (models) {
        // associations can be defined here
    };
    return Project;
};