'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserProject = sequelize.define('UserProject', {
        userId: DataTypes.INTEGER,
        projectId: DataTypes.INTEGER
    }, {
        timestamps: false //to stop the model from requiring createdAt and updatedAt columns
    });
    UserProject.associate = function (models) {
        UserProject.belongsTo(models.User, {foreignKey: 'userId'})
        UserProject.belongsTo(models.Project, {foreignKey: 'projectId'})
    };
    return UserProject;
};