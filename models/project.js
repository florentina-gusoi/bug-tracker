'use strict';
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
        projectName: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        timestamps: false //to stop the model from requiring createdAt and updatedAt columns
    });
    Project.associate = function (models) {
        Project.hasMany(models.Bug)
    };
    return Project;
};