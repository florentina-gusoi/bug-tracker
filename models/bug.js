'use strict';
module.exports = (sequelize, DataTypes) => {
    const Bug = sequelize.define('Bug', {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        projectId: {type: DataTypes.INTEGER, allowNull: false},
        description: DataTypes.STRING

    }, {
        timestamps: false //to stop the model from requiring createdAt and updatedAt columns
    });
    Bug.associate = function (models) {
        Bug.belongsTo(models.Project)
    };
    return Bug;
};